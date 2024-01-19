import { useState, useEffect } from "react";
import axios from "axios";

export default function useLoginManager() {
	const [googleAccessToken, setGoogleAccessToken] = useState(null);

	const [error, setError] = useState(null);

	useEffect(() => {
		if (googleAccessToken) {
			setError(null);
			axios
				.post(
					process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/login",
					{
						googleAccessToken: googleAccessToken,
					},
					{ withCredentials: true },
				)
				.catch((error) => {
					if (error.response) {
						setError(error.response.data); // => the response payload
					}
				});
		}
	}, [googleAccessToken]);

	return [setGoogleAccessToken, error];
}
