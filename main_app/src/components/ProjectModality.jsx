import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";

import LoadComponent from "./LoadComponent.jsx";
import {
	projectIdState,
	projectDataState,
	projectModalityState,
} from "../atom/atoms.jsx";
import { PROJECT_URL } from "../constants.jsx";
import { useGetData } from "../util/useGetData.jsx";

export default function ProjectModality(props) {
	const [projectModality, setProjectModality] =
		useRecoilState(projectModalityState);

	const [projectId, setProjectId] = useRecoilState(projectIdState);

	const [projectData] = useRecoilState(projectDataState);
	const [fetchProjectDataState, fetch] = useGetData({
		url: PROJECT_URL,
		onFail: (error) => console.log(error),
		onSuccess: (data) => setProjectData(data.projects),
	});

	useEffect(() => {
		console.log(projectData);
	}, [projectData, projectId]);

	return (
		<>
			<div className="fixed w-[30%] h-[50%] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  rounded-xl bg-white opacity-100 m-auto display flex flex-col z-50">
				<h1 className="text-2xl text-left pt-5 pl-10 pb-5">
					Select a Project
				</h1>
				<div className="w-full border-2 border-primary" />
				<div className="w-full h-fit flex flex-col space-y-2">
					<div className="flex flex-row w-full text-gray-600 text-center">
						<span className="w-1/2">ID</span>
						<span className="w-1/2">Name</span>
					</div>
					<LoadComponent success={projectId}>
						{projectData.map((project) => (
							<div
								className="flex flex-row w-full text-center hover:bg-gray-300"
								onClick={() => {
									setProjectId(project.project_id);
									setProjectModality(false);
								}}
							>
								<span className="w-1/2">
									{project.project_id}
								</span>
								<span className="w-1/2">
									{project.project_title}
								</span>
							</div>
						))}
					</LoadComponent>
				</div>
			</div>
			<div
				className="absolute top-0 w-screen h-screen bg-black opacity-70 flex flex-row "
				onClick={() => setProjectModality(false)}
			/>
		</>
	);
}
