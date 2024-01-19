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
	return (
		<svg
			viewBox="0 0 387 120"
			fill="none"
			className={props.className}
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M164.64 39.4332H153.507V51.0165H164.64V76.3199C164.64 88.9154 172.737 96.1128 185.108 96.1128H194.217V83.6298H186.682C181.509 83.6298 178.473 80.7059 178.473 74.9704V51.0165H194.217V39.4332H178.473V22.3394H164.64V39.4332Z" />
			<path d="M200.663 30.549H215.958V14.8047H200.663V30.549ZM215.171 96.1129V39.4333H201.338V96.1129H215.171Z" />
			<path d="M237.482 96.113V65.1867C237.482 56.8646 242.881 50.7918 250.64 50.7918C257.725 50.7918 262.448 56.1899 262.448 63.9496V96.113H276.281V61.0256C276.281 47.7554 267.959 38.5337 255.139 38.5337C247.041 38.5337 240.631 42.02 237.482 48.2053V39.4334H223.65V96.113H237.482Z" />
			<path d="M323.753 77.2198C322.291 82.6179 317.68 85.5418 310.595 85.5418C301.823 85.5418 295.975 79.6939 294.963 70.5847H336.798C336.911 69.4601 337.023 67.7732 337.023 65.8614C337.023 52.3663 328.476 38.5337 309.471 38.5337C290.915 38.5337 281.693 52.5912 281.693 67.5483C281.693 82.3929 292.039 97.0127 310.595 97.0127C324.54 97.0127 335.111 89.253 337.248 77.2198H323.753ZM309.471 48.88C317.68 48.88 322.628 54.2781 323.191 61.4755H295.301C296.763 52.9286 301.711 48.88 309.471 48.88Z" />
			<path d="M364.792 97.0127C378.062 97.0127 386.721 90.0402 386.721 79.3565C386.721 53.7158 355.233 67.2109 355.233 54.9528C355.233 51.1292 358.494 48.88 363.442 48.88C367.828 48.88 372.664 51.579 373.451 56.8646H386.047C385.484 45.8436 376.375 38.5337 363.105 38.5337C351.409 38.5337 342.75 45.5062 342.75 55.4027C342.75 79.3565 373.789 67.3234 373.789 79.9188C373.789 83.2926 370.19 85.9917 364.792 85.9917C358.607 85.9917 354.446 82.6179 353.883 77.2198H341.288C341.963 89.3654 351.072 97.0127 364.792 97.0127Z" />
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M42.6985 0C28.4964 0 15.9392 9.21557 11.6889 22.7575L0 59.9999L11.6889 97.2423C15.9392 110.784 28.4964 120 42.6985 120H74.1845C88.3865 120 100.944 110.784 105.194 97.2423L116.883 59.9999L105.194 22.7575C100.944 9.21557 88.3865 0 74.1845 0H42.6985ZM74.185 9.36127C84.2934 9.36127 93.2311 15.9205 96.2562 25.5591L99.122 34.6898C93.3569 29.9307 86.0564 27.2521 78.4261 27.2515L38.3716 27.2504C30.7926 27.251 23.5391 29.8938 17.7923 34.593L20.6277 25.5591C23.6529 15.9205 32.5905 9.36127 42.6989 9.36127H74.185ZM19.9545 45.7447L12.6763 55.3195H104.121L96.8432 45.7458C92.4697 39.9923 85.6556 36.6133 78.4254 36.6127H38.1535C31.0048 36.6807 24.2839 40.0493 19.9545 45.7447ZM104.106 64.6808L96.8426 74.2457C92.4687 80.0057 85.6497 83.3886 78.4142 83.388L38.3824 83.387C31.1469 83.3875 24.3279 80.0047 19.954 74.2447L12.6916 64.6808H104.106ZM20.6271 94.4407C23.6523 104.079 32.59 110.639 42.6984 110.639H74.1844C84.2928 110.639 93.2305 104.079 96.2557 94.4407L99.1235 85.3034C93.3558 90.0682 86.0498 92.7499 78.4135 92.7493L38.3831 92.7483C30.7978 92.7488 23.5384 90.1028 17.7888 85.3975L20.6271 94.4407Z"
			/>
		</svg>
	);
}
