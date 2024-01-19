"use client";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

import useUser from "../util/useUser.jsx";

import { acmeAccessTokenState } from "../atom.jsx";
import useLoginManager from "../util/useLoginManager.jsx";
import ForceRefreshFirst from "../components/ForceRefreshFirst.jsx";

export default function Page() {
	const [setGoogleAccessToken, loginError] = useLoginManager();

	const [user, fetchUser] = useUser();

	useEffect(() => fetchUser(), []);

	const acmeAccessToken = useRecoilValue(acmeAccessTokenState);

	useEffect(() => {
		if (acmeAccessToken)
			window.location.replace(process.env.NEXT_PUBLIC_MAIN_APP_URL);
	}, [acmeAccessToken]);

	const login = useGoogleLogin({
		onSuccess: (user) => setGoogleAccessToken(user.access_token),
		onError: (error) => alert("Login Failed:", error),
	});

	const logOut = () => {
		googleLogout();
	};

	if (user) {
		window.location.replace(process.env.NEXT_PUBLIC_MAIN_APP_URL);
	}

	return (
		<>
			{loginError ? (
				<div className="w-1/3 h-fit m-auto bg-red-400 text-white ">
					{loginError}
				</div>
			) : null}
			<ForceRefreshFirst>
				<button onClick={() => login()}>Sign in with Google 🚀 </button>
			</ForceRefreshFirst>
		</>
	);
}
