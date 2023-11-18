import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { headerState } from "../atom/atoms.jsx";
import { HEADERS } from "../constants.jsx";

export default function Layout(props) {
	const [selectedHeader, setSelectedHeader] = useRecoilState(headerState);

	const location = useLocation();

	useEffect(() => {
		var urlNavHeader = location.pathname.split("/")[1];
		if (HEADERS.includes(urlNavHeader)) setSelectedHeader(urlNavHeader);
	}, [location]);

	return (
		<div className="w-full min-h-full h-full flex flex-col p-5 space-y-[2%] bg-[#FFFFFF]">
			<Header />
			<div className="w-full h-full flex flex-row p-1 rounded-xl shadow-xl">
				<Outlet />
			</div>
		</div>
	);
}
