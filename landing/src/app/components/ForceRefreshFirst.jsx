"use client";

import React, { useState, useEffect } from "react";

import useAccessTokenManager from "../util/useAccessTokenManager.jsx";

export default function ForceRefreshFirst(props) {
	const [attempt, setAttempt] = useState(false);
	const [attemptFetchAccessToken] = useAccessTokenManager();

	useEffect(() => {
		attemptFetchAccessToken(() => setAttempt(true));
	}, []);

	if (!attempt) {
		return <></>;
	}

	return <>{props.children}</>;
}
