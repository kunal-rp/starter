import React, { useEffect } from "react";
import Header from "./Header.jsx";
import { Outlet, useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";

import { headerState, projectModalityState } from "../atom/atoms.jsx";
import { HEADERS } from "../constants.jsx";
import PrivateRouteWrapper from "./PrivateRouteWrapper.jsx";

import ProjectModality from "./ProjectModality.jsx";

export default function Layout(props) {
	const [selectedHeader, setSelectedHeader] = useRecoilState(headerState);
	const [projectModality] = useRecoilState(projectModalityState);

	const location = useLocation();

	useEffect(() => {
		var urlNavHeader = location.pathname.split("/")[1];
		if (HEADERS.includes(urlNavHeader)) setSelectedHeader(urlNavHeader);
	}, [location]);

	return (
		<>
			{projectModality ? <ProjectModality /> : null}
			<PrivateRouteWrapper>
				<div className="w-full min-h-full h-full flex flex-col p-5 space-y-[2%] bg-[#FFFFFF]">
					<Header />
					<div className="w-full h-full flex flex-row p-1 rounded-xl shadow-xl">
						<Outlet />
					</div>
				</div>
			</PrivateRouteWrapper>
		</>
	);
}
