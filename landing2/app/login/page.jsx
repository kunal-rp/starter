"use client";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { googleLogout, useGoogleLogin, GoogleLogin } from "@react-oauth/google";

import { acmeAccessTokenState } from "../../src/recoil.jsx";
import useUser from "../../src/useUser.jsx";
import useLoginManager from "../../src/useLoginManager.jsx";
import useAccessTokenManager from "../../src/useAccessTokenManager.jsx";

export default function Page() {
	const [attemptFetchAccessToken] = useAccessTokenManager();
	const [setGoogleAccessToken, loginError] = useLoginManager(
		attemptFetchAccessToken,
	);

	const [user, fetchUser] = useUser();

	useEffect(() => fetchUser(), []);

	useEffect(() => {
		if (user) {
			window.location.replace(process.env.NEXT_PUBLIC_MAIN_APP_URL);
		}
	}, [user]);

	const acmeAccessToken = useRecoilValue(acmeAccessTokenState);

	useEffect(() => {
		if (acmeAccessToken) {
			window.location.replace(process.env.NEXT_PUBLIC_MAIN_APP_URL);
		}
		console.log(acmeAccessToken);
	}, [acmeAccessToken]);

	const login = useGoogleLogin({
		onSuccess: (user) => {
			setGoogleAccessToken(user.access_token);
		},
		onError: (error) => alert("Login Failed:", error),
	});

	const logOut = () => {
		googleLogout();
	};

	return (
		<div className="w-full h-screen bg-primary text-white flex-row items-center ">
			{loginError ? (
				<div className="p-5 m-auto bg-red-400 text-white rounded-xl text-center ">
					{loginError}
				</div>
			) : null}
			<button
				onClick={() => login()}
				className="rounded-xl p-2 bg-dark flex flex-row items-center m-auto"
			>
				<span>Sign In with</span>
				<img src="images/google_logo.png" className="w-[40px] h-auto" />
			</button>
		</div>
	);
}
