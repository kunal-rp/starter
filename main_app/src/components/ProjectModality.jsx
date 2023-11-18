import React from "react";
import { useRecoilState } from "recoil";

import { projectModalityState } from "../atom/atoms.jsx";

export default function ProjectModality(props) {
	const [projectModality, setProjectModality] =
		useRecoilState(projectModalityState);
	return (
		<div
			onClick={() => setProjectModality(false)}
			className="absolute top-0 w-screen h-screen bg-black opacity-70 flex flex-row hover:cursor-pointer"
		>
			<div className="w-[30%] h-[50%] bg-white opacity-100 m-auto pointer-events-none cursor-default"></div>
		</div>
	);
}
