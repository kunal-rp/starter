import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import { headerState } from "../atom/atoms.jsx";
import {
	UserIcon,
	ChevronDownIcon,
	CircleStackIcon,
	ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";

import { HEADERS } from "../constants.jsx";

export default function Header(props) {
	const [selectedHeader] = useRecoilState(headerState);

	function firstCap(word) {
		return word.charAt(0).toUpperCase() + word.slice(1);
	}

	useEffect(() => {
		document.title = firstCap(selectedHeader);
	}, [selectedHeader]);

	return (
		<div className="h-fit max-w-full flex flex-row m-5 items-center justify-center shadow-xl p-3 rounded-xl ">
			<div className="flex flex-row items-center space-x-1">
				<UserIcon className="w-[30px] h-[30px] rounded text-primary" />
				<div className="flex flex-col justify-center">
					<h3 className="text-md font-semibold">First Last</h3>
					<h3 className="text-sm">Organization</h3>
				</div>
			</div>
			<button className="flex flex-row border border-primary rounded items-center p-1 space-x-2 ml-10">
				<CircleStackIcon className="w-[20px] h-[20px]" />
				<h1 className="text-md">Project Name</h1>
				<ChevronDownIcon className="w-[15px] h-[15px]" />
			</button>
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
			<button className="flex flex-row space-x-1 items-center">
				<h1 className="text-lg">Logout</h1>
				<ArrowLeftOnRectangleIcon className="w-[20px] h-[20px]" />
			</button>
		</div>
	);
}
