import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { acmeAccessTokenState } from "../atom.jsx";

export default function useUser() {
	const [acmeAccessToken, setAcmeAccessToken] =
		useRecoilState(acmeAccessTokenState);
	const [user, setUser] = useState(null);

	useEffect(() => {
		getUserDetails();
	}, [acmeAccessToken]);

	var getAccessToken = () => {
		if (!acmeAccessToken) {
			axios
				.get(process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/refresh", {
					withCredentials: true,
				})
				.then((res) => {
					if (res.data.access_token) {
						setAcmeAccessToken(res.data.access_token);
					}
				});
		}
	};

	var getUserDetails = () => {
		console.log("getUserDetails ", acmeAccessToken);
		if (acmeAccessToken) {
			axios
				.get(process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/user", {
					withCredentials: true,
					headers: {
						authorization: "Bearer " + acmeAccessToken,
						"Content-Type": "application/json",
					},
				})
				.then((res) => setUser(res.data));
		}
	};

	return [user, getAccessToken];
}
