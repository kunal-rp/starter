var https = require("https");
var jwt = require("jsonwebtoken");

var JWT_CONFIG = require("../config/acme.config.js");
var GOOGLE_CONFIG = require("../config/google.config.js");

const loginRoute = (req, res) => {
	if (!req.body.googleAccessToken) {
		res.status(400).send();
		return;
	}

	makeGoogleSsoCall(req.body.googleAccessToken, (profile, err) => {
		console.log("google sso profile", profile, err);
		if (err) {
			res.status(500).send();
			return;
		}

		jwt.sign(profile, process.env.JWT_SECRET, (err, token) => {
			if (err) {
				res.status(500).send();
				return;
			}
			res.cookie(JWT_CONFIG.JWT_COOKIE_NAME, token, {
				maxAge: 900000,
				httpOnly: true,
				Path: "/",
			});
			res.status(200).send();
		});
	});
};

function makeGoogleSsoCall(accessToken, callback) {
	var options = {
		host: GOOGLE_CONFIG.GOOGLE_API_URL,
		path: GOOGLE_CONFIG.GOOGLE_API_USERINFO_URL(accessToken),
		headers: {
			Authorization: `Bearer ${accessToken}`,
			Accept: "application/json",
		},
	};

	var req = https
		.get(options, function (res) {
			let data = [];

			res.on("data", (chunk) => {
				data.push(chunk);
			});

			res.on("end", () => {
				const googleData = JSON.parse(Buffer.concat(data).toString());
				const result = {
					name: googleData.name,
					picture: googleData.picture,
					email: googleData.email,
				};
				callback(result);
			});
		})
		.on("error", (err) => {
			callback(null, err);
		});
}

module.exports = { loginRoute };
