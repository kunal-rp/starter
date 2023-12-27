var jwt = require("jsonwebtoken");

var JWT_CONFIG = require("../config/acme.config.js");

const resHeaderMiddleware = (req, res, next) => {
	var allowedOrigins = [
		process.env.LANDING_APP_URL,
		process.env.MAIN_APP_URL,
	];

	const origin = req.headers.origin;

	if (allowedOrigins.includes(origin)) {
		res.setHeader("Access-Control-Allow-Origin", origin);
	}
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept",
	);
	res.header("Access-Control-Allow-Credentials", true);
	next();
};

const jwtMiddleware = (req, res, next) => {
	var token = req.cookies[JWT_CONFIG.JWT_COOKIE_NAME];

	if (req.path === "/login") {
		next();
	} else {
		jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
			if (err) {
				res.status(500).send("Invalid Credentials");
			} else {
				req.decodedJwt = decoded;
				next();
			}
		});
	}
};

// Export of all methods as object
module.exports = {
	resHeaderMiddleware,
	jwtMiddleware,
};
