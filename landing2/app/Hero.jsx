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
						ACME is the smart, secure workflow builder for your
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
						ACME is the smart, secure workflow builder for your
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
					ACME is the smart, secure workflow builder for your whole
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
	return <img src="images/acme_logo.png" className="w-[40px] h-auto" />;
}
