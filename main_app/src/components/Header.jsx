import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import {
	UserIcon,
	ChevronDownIcon,
	CircleStackIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

import {
	headerState,
	projectIdState,
	projectDataState,
	projectModalityState,
} from "../atom/atoms.jsx";
import { useGetData } from "../util/useGetData.jsx";
import { HEADERS, PROJECT_URL, LOGOUT_URL } from "../constants.jsx";
import LoadComponent from "./LoadComponent.jsx";

export default function Header(props) {
	const [selectedHeader] = useRecoilState(headerState);

	const [projectModality, setProjectModality] =
		useRecoilState(projectModalityState);

	//logout

	const [fetchLogoutState, fetchLogout] = useGetData({
		url: LOGOUT_URL,
		onFail: (error) => console.log(error),
		onSuccess: (data) => {},
	});

	useEffect(() => {
		console.log(fetchLogoutState);
		if (fetchLogoutState === "SUCCESS")
			window.location.replace(process.env.LANDING_URL);
	}, [fetchLogoutState]);

	const [projectId, setProjectId] = useRecoilState(projectIdState);
	const [projectData, setProjectData] = useRecoilState(projectDataState);
	const [fetchProjectDataState, fetch] = useGetData({
		url: PROJECT_URL,
		onFail: (error) => console.log(error),
		onSuccess: (data) => {
			setProjectData(data.projects);
			setProjectId(data.selected_project_id);
		},
	});

	// On Header initial render, fetch and store project data globally
	useEffect(() => {
		fetch();
	}, []);

	function firstCap(originalWord) {
		return originalWord
			.split(" ")
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(" ");
	}

	useEffect(() => {
		document.title =
			(getCurrentProject()
				? firstCap(getCurrentProject().title) + ": "
				: "") + firstCap(selectedHeader);
	}, [selectedHeader, projectId, projectData]);

	function getCurrentProject() {
		return projectData && projectId
			? projectData.filter((project) => project.id == projectId)[0]
			: null;
	}

	return (
		<div className="h-fit max-w-full flex flex-row m-5 items-center justify-center shadow-xl p-3 rounded-xl ">
			<div className="flex flex-row items-center space-x-1">
				<UserIcon className="w-[30px] h-[30px] rounded text-primary" />
				<div className="flex flex-col justify-center">
					<h3 className="text-md font-semibold">First Last</h3>
					<h3 className="text-sm">Organization</h3>
				</div>
			</div>
			<LoadComponent
				success={projectId && projectData}
				className="w-[150px] h-full "
			>
				<button
					className="flex flex-row border border-primary rounded items-center p-1 space-x-2 ml-10"
					onClick={() => setProjectModality(true)}
				>
					<CircleStackIcon className="w-[20px] h-[20px]" />
					<h1 className="text-md">
						{getCurrentProject()
							? getCurrentProject()["title"]
							: null}
					</h1>
					<ChevronDownIcon className="w-[15px] h-[15px]" />
				</button>
			</LoadComponent>
			<div className="m-auto" />
			<div className="flex flex-row space-x-10">
				{HEADERS.map((headerText) => (
					<Link
						className={
							"text-lg " +
							(headerText === selectedHeader
								? "underline text-secondary"
								: "")
						}
						to={headerText.toLowerCase()}
					>
						{firstCap(headerText)}
					</Link>
				))}
			</div>
			<div className="m-auto" />
			<button
				className="flex flex-row space-x-1 items-center"
				onClick={() => fetchLogout()}
			>
				<h1 className="text-lg">Logout</h1>
				<ArrowLeftOnRectangleIcon className="w-[20px] h-[20px]" />
			</button>
		</div>
	);
}
