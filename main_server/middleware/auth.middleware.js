var jwt = require("jsonwebtoken");

var JWT_CONFIG = require("../config/acme.config.js");

const NON_JWT_APIS = ["/login", "/refresh"];

const jwtMiddleware = (req, res, next) => {
	if (NON_JWT_APIS.includes(req.path) || req.method === "OPTIONS") {
		next();
		return;
	}
	if (!req.headers.authorization) {
		res.status(401).send("Invalid Credentials");
		return;
	}

	var accessToken = req.headers.authorization.split(" ")[1];

	jwt.verify(
		accessToken,
		process.env.JWT_ACCESS_SECRET,
		function (err, decoded) {
			if (err) {
				res.status(401).send("Invalid Credentials");
			} else {
				req.decodedJwt = decoded;
				next();
			}
		},
	);
};

// Export of all methods as object
module.exports = {
	jwtMiddleware,
};
