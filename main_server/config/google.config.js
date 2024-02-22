const { google } = require("googleapis");
const sheets = google.sheets("v4");

const GOOGLE_API_URL = "www.googleapis.com";

const GOOGLE_API_USERINFO_URL = (accessToken) =>
	`/oauth2/v1/userinfo?access_token=${accessToken}`;

const GOOGLE_SHEET_ID = "13naC19Nj3NlNCRv0GHWfKb0LYs1xKOR2XlU6XdqnZi8";
const GOOGLE_SHEET_NAME = "waitlistSheet";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

async function getAuthToken() {
	const auth = new google.auth.GoogleAuth({
		scopes: SCOPES,
	});
	const authToken = await auth.getClient();
	return authToken;
}

async function appendEmailToSheet(auth, email) {
	const res = await sheets.spreadsheets.values.append({
		spreadsheetId: GOOGLE_SHEET_ID,
		auth,
		range: GOOGLE_SHEET_NAME,
		valueInputOption: "RAW",
		insertDataOption: "INSERT_ROWS",
		resource: {
			majorDimension: "ROWS",
			values: [[email, Date().toLocaleString()]],
		},
	});
}

async function addToWaitListRoute(email) {
	const auth = await getAuthToken();
	return await appendEmailToSheet(auth, email);
}

module.exports = {
	GOOGLE_API_URL,
	GOOGLE_API_USERINFO_URL,
	GOOGLE_SHEET_ID,
	GOOGLE_SHEET_NAME,
	getAuthToken,
	addToWaitListRoute,
};
