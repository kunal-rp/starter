const fs = require("fs");

const DB_UTIL = require("../db/util.js");

var GOOGLE_CONFIG = require("../config/google.config.js");

const userRoute = (req, res) => {
	res.json(req.decodedJwt);
};

const projectRoute = (req, res) => {
	try {
		DB_UTIL.getProjectsForUser(
			req.decodedJwt.user_id,
			(err, projectData) => {
				var result = {};
				result.projects = projectData;
				result.selected_project_id = projectData[0].project_id;
				res.json(result);
			},
		);
	} catch (e) {
		res.status(500).send("Database Connection failure");
	}
};

function readJSONFile(filename, callback) {
	fs.readFile(filename, function (err, data) {
		if (err) {
			callback(err);
			return;
		}
		try {
			callback(null, JSON.parse(data));
		} catch (exception) {
			callback(exception);
		}
	});
}

async function addToWaitListRoute() {
	try {
		const auth = await GOOGLE_CONFIG.getAuthToken();
		responses = await GOOGLE_CONFIG.appendEmailToSheet(auth);
	} catch (error) {
		console.log(error.message, error.stack);
	}
}

module.exports = { userRoute, projectRoute, addToWaitListRoute };
