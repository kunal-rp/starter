import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";

import { acmeAccessTokenState } from "../atom.jsx";

export default function useAccessTokenManager() {
	const [acmeAccessToken, setAcmeAccessToken] =
		useRecoilState(acmeAccessTokenState);

	var getAccessToken = (callback) => {
		if (!acmeAccessToken) {
			axios
				.get(process.env.NEXT_PUBLIC_MAIN_SERVER_URL + "/refresh", {
					withCredentials: true,
				})
				.then((res) => {
					if (res.data.access_token) {
						setAcmeAccessToken(res.data.access_token);
					}
					callback();
				})
				// 422 expected if user is not logged in
				.catch((err) => {
					callback();
					if (err.response.status != 422) throw err;
				});
		}
	};

	return [getAccessToken];
}
