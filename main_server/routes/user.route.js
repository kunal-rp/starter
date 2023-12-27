const fs = require("fs");

const userRoute = (req, res) => {
	console.log("user route");
	res.json(req.decodedJwt);
};

const projectRoute = (req, res) => {
	console.log("project route");
	readJSONFile("./data/projects.json", function (err, json) {
		console.log(err);
		if (err) {
			throw err;
		}
		var result = {};
		result.projects = json;
		result.selected_project_id = json[1].id;
		res.json(result);
	});
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

module.exports = { userRoute, projectRoute };
