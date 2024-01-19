// requires access token

import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import { REFRESH_URL } from "../constants.jsx";
import { acmeAccessTokenState } from "../atom/atoms.jsx";
import { useGetData } from "../util/useGetData.jsx";

export default function PrivateRouteWrapper(props) {
	const [error, setError] = useState(null);
	const [acmeAccessToken, setAcmeAccessToken] =
		useRecoilState(acmeAccessTokenState);

	const [fetchAcmeAccessTokenState, fetchAcmeAccessToken] = useGetData({
		url: REFRESH_URL,
		onFail: (error) => setError(error),
		onSuccess: (data) => {
			data.access_token
				? setAcmeAccessToken(data.access_token)
				: setError(new Error("Invalid Response"));
		},
	});

	useEffect(() => {
		if (!acmeAccessToken) fetchAcmeAccessToken();
	}, []);

	useEffect(() => {
		if (fetchAcmeAccessTokenState === "FAIL")
			setError(new Error("Fail on fetching access token"));
	}, [fetchAcmeAccessTokenState, error]);

	// error, redirect immediantly to landing
	if (error) {
		window.location.replace(process.env.LANDING_URL);
	}

	// Access Token still needs to be attempted
	if (!acmeAccessToken) {
		return <></>;
	}

	return <>{props.children}</>;
}
