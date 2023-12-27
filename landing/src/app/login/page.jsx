"use client";
import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import useLoginManager from "../util/useLoginManager.jsx";

export default function Page() {
	const [setGoogleAccessToken] = useLoginManager();

	useEffect(() => console.log(process.env), []);

	const login = useGoogleLogin({
		onSuccess: (user) => setGoogleAccessToken(user.access_token),
		onError: (error) => alert("Login Failed:", error),
	});

	const logOut = () => {
		googleLogout();
	};

	return (
		<div className=" ">
			<button onClick={() => login()}>Sign in with Google 🚀 </button>
		</div>
	);
}
