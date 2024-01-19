import { useState, useEffect } from "react";

import { ChevronDownIcon } from "@heroicons/react/24/solid";

import useScreenSize from "../src/useScreenSize.jsx";
import useUser from "../src/useUser.jsx";

export default function Header(props) {
	const [user, fetchUser] = useUser();

	useEffect(() => fetchUser(), []);

	const screenSizeLevel = useScreenSize();

	useEffect(() => {}, [screenSizeLevel]);

	const TOP_NAV_DROPDOWN = [
		{ text: "Product", dropdown: true, className: "bg-green-100" },
		{ text: "Solution", dropdown: true, className: "bg-pink-100" },
		{ text: "Product", dropdown: true, className: "bg-orange-100" },
		{ text: "Pricing", dropdown: null },
	];

	const [navIndex, setNavIndex] = useState(null);

	function profileButton() {
		return (
			<a
				href={process.env.NEXT_PUBLIC_MAIN_APP_URL}
				className={
					"p-2 rounded-md font-semibold backdrop-blur-md " +
					props.config.primaryButtonClasses
				}
			>
				<div className="flex flex-row items-center space-x-5">
					<span>Goto App</span>
					<img src={user.picture} className="h-[20px] rounded-2xl" />
				</div>
			</a>
		);
	}

	function topNavDropdown(index) {
		return (
			<div
				onMouseOver={() => setNavIndex(index)}
				onMouseOut={() => setNavIndex(null)}
				className={
					"cursor-pointer flex flex-row p-3 items-center space-x-1 backdrop-blur-md font-semibold " +
					props.config.navClasses
				}
			>
				<span>{TOP_NAV_DROPDOWN[index].text}</span>
				{TOP_NAV_DROPDOWN[index].dropdown && screenSizeLevel > 3 ? (
					<ChevronDownIcon className="h-[15px] " />
				) : (
					<></>
				)}
			</div>
		);
	}

	function topNavButton(text, primary = false, link = null) {
		return (
			<button
				onClick={() => (link ? (window.location.href = link) : null)}
				className={
					"p-2 rounded-md font-semibold backdrop-blur-md " +
					(primary
						? props.config.primaryButtonClasses
						: props.config.secondaryButtonClasses)
				}
			>
				{text}
			</button>
		);
	}

	if (screenSizeLevel <= 2) {
		return (
			<div
				className={
					props.className +
					" flex flex-row p-5 justify-between text-sm items-center rounded-br-xl rounded-bl-xl " +
					props.config.mobileBarClasses
				}
			>
				<Logo className={"h-[30px] " + props.config.logoClasses} />

				<div className="flex flex-row space-x-1 justify-center items-center text-white">
					{user
						? profileButton()
						: topNavButton("Login", true, "/login")}
				</div>
			</div>
		);
	}

	return (
		<div className={props.className + " flex flex-col  "}>
			<div
				className={
					" flex flex-row p-5 justify-between text-sm items-center"
				}
			>
				<Logo className={"h-[30px] " + props.config.logoClasses} />

				<div className="flex flex-row items-center rounded-xl overflow-hidden">
					{TOP_NAV_DROPDOWN.map((_, index) => topNavDropdown(index))}
				</div>

				<div className="flex flex-row space-x-1 justify-center items-center text-white">
					{topNavButton("Book a Demo")}
					{user
						? profileButton()
						: topNavButton("Login", true, "/login")}
				</div>
			</div>
			<div
				className={
					"w-[500px] h-[200px]  m-auto rounded-xl  " +
					(navIndex !== null && TOP_NAV_DROPDOWN[navIndex].dropdown
						? "visible " + TOP_NAV_DROPDOWN[navIndex].className
						: "invisible")
				}
			></div>
		</div>
	);
}

function Logo(props) {
	return <img src="images/acme_logo.png" className="w-[40px] h-auto" />;
}
