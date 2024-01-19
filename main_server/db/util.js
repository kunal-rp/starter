const { MongoClient } = require("mongodb");

const DATABASE_NAME = "acme_database";
const USERS_COLLECTION = "user_collection";
const PROJECTS_COLLECTION = "project_collection";

function connectDb(callback) {
	const client = new MongoClient(process.env.MONGO_URI);

	var database = client.db(DATABASE_NAME);

	database.command({ ping: 1 }).then((_) => callback(database));
}

function getUserInfo(userEmail, callback) {
	connectDb((db) => {
		db.collection(USERS_COLLECTION)
			.find({ user_email: userEmail })
			.toArray()
			.then((userData) => {
				if (userData.length != 1) {
					callback(
						new Error(
							"No registered user found for email :",
							userEmail,
						),
					);
					return;
				}
				callback(null, userData[0]);
			});
	});
}

function getProjectsForUser(userId, callback) {
	connectDb((db) => {
		db.collection(PROJECTS_COLLECTION)
			.find({ user_id: userId })
			.toArray()
			.then((projectData) => callback(null, projectData));
	});
}

module.exports = {
	connectDb,
	getProjectsForUser,
	getUserInfo,
};
