export const FETCH_STATES = {
	IN_PROGRESS: "IN_PROGRESS",
	SUCCESS: "SUCCESS",
	FAIL: "FAIL",
};

export const HEADERS = ["product", "material", "logistics"];

export const PROJECT_URL = process.env.SERVER_URL + "/projects";

export const PROJECTS = [
	{
		id: 101,
		title: "Running Shoe 1",
		description: "Sample Running Shoe project ",
	},
	{
		id: 201,
		title: "Casual Shoe 2",
		description: "Sample Everyday Beater shoe project ",
	},
];
