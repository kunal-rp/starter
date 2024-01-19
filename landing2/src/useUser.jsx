import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";

import { acmeAccessTokenState } from "./recoil.jsx";

export default function useUser() {
	const acmeAccessToken = useRecoilValue(acmeAccessTokenState);
	const [user, setUser] = useState(null);

	var getUserDetails = () => {
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

	return [user, getUserDetails];
}
