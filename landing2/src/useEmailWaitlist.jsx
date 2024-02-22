import { useState, useEffect } from "react";
import axios from "axios";

export default function useEmailWaitlist(successCallback) {
	const [email, setEmail] = useState(null);

	const [error, setError] = useState(null);

	useEffect(() => {
		if (email) {
			setError(null);
			axios
				.post(
					process.env.NEXT_PUBLIC_MAIN_SERVER_URL +
						"/emailOnWaitList",
					{
						email: email,
					},
				)
				.catch((error) => {
					if (error.response) {
						setError(error.response.data); // => the response payload
					}
				})
				.then(() => successCallback());
		}
	}, [email]);

	return [setEmail, error];
}
