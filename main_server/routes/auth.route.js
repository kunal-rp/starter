var https = require("https");
var jwt = require("jsonwebtoken");

const DB_UTIL = require("../db/util.js");

var JWT_CONFIG = require("../config/acme.config.js");
var GOOGLE_CONFIG = require("../config/google.config.js");

const loginRoute = (req, res) => {
	if (!req.body.googleAccessToken) {
		res.status(400).send("Missing External Access Token");
		return;
	}

	makeGoogleSsoCall(req.body.googleAccessToken, (profile, err) => {
		if (err) {
			res.status(500).send("Invalid External Access Token");
			return;
		}

		verifyUserInDataBase(profile.email, (err, user) => {
			if (err) {
				res.status(500).send("User not registered in database");
				return;
			}

			profile.user_id = user.user_id;

			jwt.sign(profile, process.env.JWT_REFRESH_SECRET, (err, token) => {
				if (err) {
					res.status(500).send("Error while generating access token");
					return;
				}
				res.cookie(JWT_CONFIG.JWT_REFRESH_COOKIE_NAME, token, {
					maxAge: 900000,
					httpOnly: true,
					Path: "/",
				});
				res.status(200).send("login successful");
			});
		});
	});
};

function verifyUserInDataBase(email, callback) {
	DB_UTIL.getUserInfo(email, (err, user) => callback(err, user));
}

const logoutRoute = (req, res) => {
	res.clearCookie(JWT_CONFIG.JWT_REFRESH_COOKIE_NAME);
	res.status(200).json({});
};

const refreshRoute = (req, res) => {
	var refreshCookie = req.cookies[JWT_CONFIG.JWT_REFRESH_COOKIE_NAME];

	var verifyRefresh = (callback) => {
		jwt.verify(
			refreshCookie,
			process.env.JWT_REFRESH_SECRET,
			(err, decoded) => {
				if (err) {
					res.status(422).send("Invalid Refresh");
				} else {
					callback(decoded);
				}
			},
		);
	};

	var createAccessToken = (decodedRefresh, callback) => {
		jwt.sign(
			decodedRefresh,
			process.env.JWT_ACCESS_SECRET,
			{ expiresIn: "10m" },
			(err, token) => {
				if (err) {
					res.status(500).send();
					return;
				}
				callback(token);
			},
		);
	};

	verifyRefresh((decodedRefresh) =>
		createAccessToken(decodedRefresh, (token) => {
			res.status(200).json({ access_token: token });
		}),
	);
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

module.exports = { loginRoute, logoutRoute, refreshRoute };
