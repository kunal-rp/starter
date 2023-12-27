import { useState, useEffect } from "react";
import axios from "axios";

export default function useLoginManager() {
	const [googleAccessToken, setGoogleAccessToken] = useState(null);

	useEffect(() => {
		if (googleAccessToken) {
			axios.post(
				process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/login",
				{
					googleAccessToken: googleAccessToken,
				},
				{ withCredentials: true },
			);
		}
	}, [googleAccessToken]);

	return [setGoogleAccessToken];
}
