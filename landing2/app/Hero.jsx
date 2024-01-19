import { useEffect } from "react";

import { Tinos } from "next/font/google";

import useScreenSize from "../src/useScreenSize.jsx";

const tinos = Tinos({ weight: "400", subsets: ["latin"] });

export default function Hero(props) {
	const screenSizeLevel = useScreenSize();

	useEffect(() => {}, [screenSizeLevel]);

	var generateProps = () => {
		var res = { ...props };
		res.screenSizeLevel = screenSizeLevel;
		return res;
	};

	return (
		<div
			className={
				props.className +
				" bg-[url('../public/images/hero_grid.png')] bg-cover flex flex-col justify-center"
			}
		>
			<HeroImage {...generateProps()} />
			<div
				className={
					"mt-32 mb-20 p-20 text-center grid " +
					(screenSizeLevel < 2 ? "grid-cols-4" : "grid-cols-6") +
					" grid-flow-row gap-4"
				}
			>
				{new Array(12).fill("a").map(() => (
					<Logo className="col-span-1 max-w-[100px] fill-white" />
				))}
			</div>
		</div>
	);
}

function HeroImage(props) {
	if (props.screenSizeLevel < 2) {
		return (
			<div className={"flex flex-col "}>
				<div className="m-auto text-center flex flex-col space-y-5 w-3/4 mt-28">
					<span
						className={
							"text-6xl text-white m-auto " + tinos.className
						}
					>
						Smart, secure workflow.
					</span>
					<span className="text-md text-white m-auto ">
						Tines is the smart, secure workflow builder for your
						whole team. Break down barriers across systems with
						fewer duplicate efforts, unnecessary alerts, and
						information silos.
					</span>
					<div className="flex flex-row space-x-3 justify-center">
						<button
							className="text-primary bg-white p-2
							rounded-md"
						>
							Sign Up free
						</button>
						<button
							className="text-white border-2 border-white p-2
							rounded-md"
						>
							Book a Demo
						</button>
					</div>
					<img
						src="images/hero_sm.png"
						className="w-2/3 self-center h-auto"
					/>
				</div>
			</div>
		);
	} else if (props.screenSizeLevel >= 2 && props.screenSizeLevel < 4) {
		return (
			<div className={"flex flex-col "}>
				<img src="images/hero_md.png" className="w-7/8 self-center " />
				<div className="m-auto absolute top-1/3 right-1/2 -translate-y-1/3 translate-x-1/2 text-center flex flex-col space-y-5">
					<span
						className={
							"text-6xl text-white m-auto " + tinos.className
						}
					>
						Smart, secure workflow.
					</span>
					<span className="text-md text-white m-auto ">
						Tines is the smart, secure workflow builder for your
						whole team. Break down barriers across systems with
						fewer duplicate efforts, unnecessary alerts, and
						information silos.
					</span>
					<div className="flex flex-row space-x-3 justify-center">
						<button
							className="text-primary bg-white p-2
							rounded-md"
						>
							Sign Up free
						</button>
						<button
							className="text-white border-2 border-white p-2
							rounded-md"
						>
							Book a Demo
						</button>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={"flex flex-col "}>
			<img src="images/hero_lg.png" className="w-4/5 self-center mt-28" />
			<div className="text-left flex flex-col w-1/4 ml-40 space-y-5 -mt-40">
				<span className="text-sm text-white m-auto ">
					Tines is the smart, secure workflow builder for your whole
					team. Break down barriers across systems with fewer
					duplicate efforts, unnecessary alerts, and information
					silos.
				</span>
				<div className="flex flex-row space-x-3 justify-left text-sm">
					<button
						className="text-primary bg-white p-2
							rounded-md"
					>
						Sign Up free
					</button>
					<button
						className="text-white border-2 border-white p-2
							rounded-md"
					>
						Book a Demo
					</button>
				</div>
			</div>
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
