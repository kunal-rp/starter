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

async function getSpreadSheet(auth) {
	const res = await sheets.spreadsheets.get({
		spreadsheetId: GOOGLE_SHEET_ID,
		auth,
	});
	return res;
}

async function getSpreadSheetValues({ auth, sheetName }) {
	const res = await sheets.spreadsheets.values.get({
		spreadsheetId: GOOGLE_SHEET_ID,
		auth,
		range: sheetName,
	});
	return res;
}

async function appendEmailToSheet(auth) {
	const res = await sheets.spreadsheets.values.append({
		spreadsheetId: GOOGLE_SHEET_ID,
		auth,
		range: GOOGLE_SHEET_NAME,
		valueInputOption: "RAW",
		insertDataOption: "INSERT_ROWS",
		resource: {
			majorDimension: "ROWS",
			values: [["test@gmail.com", Date.now()]],
		},
	});
}

module.exports = {
	GOOGLE_API_URL,
	GOOGLE_API_USERINFO_URL,
	GOOGLE_SHEET_ID,
	GOOGLE_SHEET_NAME,
	getAuthToken,
	getSpreadSheet,
	getSpreadSheetValues,
	appendEmailToSheet,
};
