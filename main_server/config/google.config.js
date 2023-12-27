const GOOGLE_API_URL = "www.googleapis.com";

const GOOGLE_API_USERINFO_URL = (accessToken) =>
	`/oauth2/v1/userinfo?access_token=${accessToken}`;

module.exports = { GOOGLE_API_URL, GOOGLE_API_USERINFO_URL };
