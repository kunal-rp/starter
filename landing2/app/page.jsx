"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Tinos } from "next/font/google";

const tinos = Tinos({ weight: "400", subsets: ["latin"] });

import ForceRefreshFirst from "./ForceRefreshFirst.jsx";
import Hero from "./Hero.jsx";
import Header from "./Header.jsx";

import RootAnimation from "../src/animation/RootAnimation.jsx";
import ScrollPercentageAnimation from "../src/animation/ScrollPercentageAnimation.jsx";

import useEmailWaitlist from "../src/useEmailWaitlist.jsx";

export default function AnimationPage(props) {
	const pathName = usePathname();

	return (
		<RootAnimation className="bg-white text-dark overflow-x-hidden">
			<Hero className=" w-full min-h-[100vh] h-fit bg-primary text-white" />

			<Rest1 className=" w-full min-h-[100vh] bg-white" />
			<Rest2 className=" w-full min-h-[100vh] bg-white" />

			<JoinWaitlist className="w-full h-fit bg-primary" />

			<CustomHeader className="fixed top-0 right-0 w-full h-fit" />

			<Indicator />
		</RootAnimation>
	);
}

function Indicator(props) {
	return (
		<div className="fixed bottom-0 right-0 rounded-xl bg-white m-2 p-1">
			<span>{(props.scrollPercent * 100).toFixed(0)}</span>
		</div>
	);
}

function CustomHeader(props) {
	function booleanSectionConfigs(startingPercentage, endPercentage) {
		if (
			props.scrollPercent >= startingPercentage &&
			props.scrollPercent < endPercentage
		) {
			return true;
		}
		return false;
	}

	function generateConfig() {
		// Header classes change depending on FULL page scroll percentage
		if (booleanSectionConfigs(0, 0.001)) {
			return {
				logoClasses: "fill-white",
				navClasses:
					"text-white bg-dark bg-opacity-100 hover:bg-opacity-70 fill-white ",
				secondaryButtonClasses:
					"text-white bg-white bg-opacity-0 hover:bg-opacity-20",
				primaryButtonClasses: "bg-white text-primary",
				mobileBarClasses: "",
			};
		} else if (booleanSectionConfigs(0.001, 0.4)) {
			return {
				logoClasses: "fill-white",
				navClasses:
					"text-white bg-dark bg-opacity-100 hover:bg-opacity-70 fill-white ",
				secondaryButtonClasses:
					"text-white bg-dark hover:bg-opacity-70 ",
				primaryButtonClasses: "bg-white text-primary",
				mobileBarClasses: "bg-dark bg-opacity-70 backdrop-blur-md",
			};
		} else {
			return {
				logoClasses: "fill-dark",
				navClasses:
					"bg-dark bg-opacity-20 hover:bg-opacity-30 fill-dark",
				secondaryButtonClasses:
					"text-dark bg-dark bg-opacity-10 hover:bg-opacity-50 ",
				primaryButtonClasses: "bg-dark text-white",
				mobileBarClasses: "bg-dark bg-opacity-10 backdrop-blur-md",
			};
		}
	}

	return <Header config={generateConfig()} className={props.className} />;
}

function Rest1(props) {
	function generateScrollText(direction, objects) {
		return (
			<div
				style={{
					"margin-left":
						(
							props.scrollPercent * (-1 * direction * 300) +
							(direction > 0 ? 0 : -2000)
						).toFixed(0) + "px",
				}}
				className="font-bold w-full whitespace-nowrap flex flex-row space-x-2 items-center"
			>
				{new Array(20)
					.fill(objects)
					.flat()
					.map((obj) => (
						<>
							<img
								src={obj.image}
								className={
									"h-[50px] p-1 rounded-3xl " + obj.className
								}
							/>
							<span className={"text-3xl " + tinos.className}>
								{obj.text}
							</span>
						</>
					))}
			</div>
		);
	}

	return (
		<div
			className={
				props.className +
				" flex flex-col space-y-10 text-center items-center  mt-10"
			}
		>
			<img src="images/books.png" className="w-[100px] " />
			<span className="text-dark text-lg w-1/3 ">
				ACME gives frontline teams automation superpowers. What will you
				build?
			</span>

			<div className="flex flex-row text-md space-x-3 justify-center">
				<button
					className="text-white bg-dark p-2
							rounded-md"
				>
					Tour the Product
				</button>
				<button
					className="text-dark border-2 border-dark p-2
							rounded-md"
				>
					Book a Demo
				</button>
			</div>

			<div className="w-full h-fit flex flex-col space-y-5">
				{generateScrollText(1, [
					{
						text: "Compliance ",
						image: "images/chess.png",
						className: "bg-orange",
					},
					{
						text: "Employee lifecycle management",
						image: "images/shapes.png",
						className: "bg-pink",
					},
				])}
				{generateScrollText(-1, [
					{
						text: "Ticket management and telemetry ",
						className: "bg-green",
						image: "images/cello.png",
					},
					{
						text: "Incidents and alerts",
						image: "images/horn.png",
						className: "bg-primary",
					},
				])}
				{generateScrollText(1, [
					{
						text: "Compliance ",
						image: "images/chess.png",
						className: "bg-orange",
					},
					{
						text: "Employee lifecycle management",
						image: "images/shapes.png",
						className: "bg-pink",
					},
				])}
				{generateScrollText(-1, [
					{
						text: "Ticket management and telemetry ",
						className: "bg-green",
						image: "images/cello.png",
					},
					{
						text: "Incidents and alerts",
						image: "images/horn.png",
						className: "bg-primary",
					},
				])}
			</div>
		</div>
	);
}

function Rest2(props) {
	return (
		<div
			className={
				props.className +
				" flex flex-col space-y-10 text-center items-center p-10 w-full bg-red-100"
			}
		>
			<img src="images/lightning.png" className="w-[50px] " />
			<span
				className={
					"text-dark text-4xl w-2/3 md:w-full " + tinos.className
				}
			>
				Your tech, your people, your results
			</span>
			<div className="flex flex-col space-y-5 w-2/3 md:flex-row md:space-x-5 md:space-y-0 md:w-full">
				<div className="flex flex-col space-y-3 text-left text-dark">
					<span className="text-sm font-semibold">
						INCREASE EFFICIENCY
					</span>
					<span className="text-md ">
						ACME is fast to learn, even faster to integrate within
						your processes.
					</span>
				</div>
				<div className="flex flex-col space-y-3 text-left">
					<span className="text-sm font-semibold">MITIGATE RISK</span>
					<span className="text-md ">
						ACME is secure by definition, empowering safe business
						decisions.
					</span>
				</div>
				<div className="flex flex-col space-y-3 text-left">
					<span className="text-sm font-semibold">
						PROTECT REVENUE
					</span>
					<span className=" text-md ">
						ACME is more than an automation tool, it’s a platform
						for better work.
					</span>
				</div>
			</div>

			<div className="grid grid-cols-1 items-center sm:grid-cols-3 md:grid-cols-4 w-full m-auto gap-5 p-5 md:p-20 text-white">
				<BottomOverlayBox className="text-white h-[300px] col-span-1 ">
					<div className="flex flex-col text-left absolute bottom-0 p-5 pr-10">
						<span className="text-4xl">750 days</span>
						<span className="text-md">of work time saved</span>
					</div>
				</BottomOverlayBox>
				<div className="rounded-xl h-[300px] col-span-2 bg-orange-100 border-2 border-orange relative">
					<div className="flex flex-col text-left absolute top-0 p-5 ">
						<span className="text-2xl">
							An opportunity to bring automation into areas of the
							organization that just don’t have developers.
						</span>
					</div>
				</div>
				<LeftOverlayBox className="text-white w-full h-[300px] col-span-2 md:col-span-1 ">
					<div className="flex flex-col text-left absolute bottom-0 p-5 pr-10">
						<span className="text-4xl">10 hours daily</span>
						<span className="text-md">of work time saved</span>
					</div>
				</LeftOverlayBox>
				<RightOverlayBox className="text-white w-full h-[300px] col-span-1 ">
					<div className="flex flex-col text-left absolute bottom-0 p-5 pr-10">
						<span className="text-4xl">Two weeks of work time</span>
						<span className="text-md">saved every year</span>
					</div>
				</RightOverlayBox>
				<div className="rounded-xl h-[300px] col-span-1 bg-primary relative">
					<div className="flex flex-col text-left absolute bottom-0 p-5 pr-10">
						<span className="text-4xl">45 minutes</span>
						<span className="text-md">
							saved per onboarding request
						</span>
					</div>
				</div>
				<div className="rounded-xl h-[300px] col-span-2 bg-pink-100 border-2 border-pink relative ">
					<div className="flex flex-col text-left absolute top-0 p-5 ">
						<span className="text-2xl">
							ACME is creating capabilities in our operations
							where they did not exist previously.
						</span>
					</div>
				</div>
				<div className="rounded-xl h-[300px] col-span-2 bg-green-100 border-2 border-green  relative">
					<div className="flex flex-col text-left absolute top-0 p-5 ">
						<span className="text-2xl">
							We can automate anything, the only thing we’re
							limited by is our own mindset and time to do it.{" "}
						</span>
					</div>
				</div>
				<TopOverlayBox className="text-white w-full h-[300px] col-span-1 ">
					<div className="flex flex-col text-left absolute bottom-0 p-5 pr-10">
						<span className="text-4xl">50%</span>
						<span className="text-md">reduced time per ticket</span>
					</div>
				</TopOverlayBox>
			</div>
		</div>
	);
}

function BottomOverlayBox(props) {
	return (
		<div className={"relative " + props.className}>
			{RoundedBox("w-full h-[85%] right-0 bg-primary-100 top-0")}
			{RoundedBox("w-full h-[85%] right-0 bg-primary-200 top-[5%]")}
			{RoundedBox("w-full h-[85%] right-0 bg-primary-300 top-[10%]")}
			{RoundedBox(
				"w-full h-[85%] right-0 bg-primary-400 top-[15%]",
				props.children,
			)}
		</div>
	);
}

function TopOverlayBox(props) {
	return (
		<div className={"relative " + props.className}>
			{RoundedBox("w-full h-[85%] right-0 bg-primary-100 bottom-0")}
			{RoundedBox("w-full h-[85%] right-0 bg-primary-200 bottom-[5%]")}
			{RoundedBox("w-full h-[85%] right-0 bg-primary-300 bottom-[10%]")}
			{RoundedBox(
				"w-full h-[85%] right-0 bg-primary-400 bottom-[15%]",
				props.children,
			)}
		</div>
	);
}

function LeftOverlayBox(props) {
	return (
		<div className={"relative " + props.className}>
			{RoundedBox("h-full w-[85%] top-0 bg-primary-100 right-0")}
			{RoundedBox("h-full w-[85%] top-0 bg-primary-200 right-[5%]")}
			{RoundedBox("h-full w-[85%] top-0 bg-primary-300 right-[10%]")}
			{RoundedBox(
				"h-full w-[85%] top-0 bg-primary-400 right-[15%]",
				props.children,
			)}
		</div>
	);
}

function RightOverlayBox(props) {
	return (
		<div className={"relative " + props.className}>
			{RoundedBox("h-full w-[85%] top-0 bg-primary-100 left-0")}
			{RoundedBox("h-full w-[85%] top-0 bg-primary-200 left-[5%]")}
			{RoundedBox("h-full w-[85%] top-0 bg-primary-300 left-[10%]")}
			{RoundedBox(
				"h-full w-[85%] top-0 bg-primary-400 left-[15%]",
				props.children,
			)}
		</div>
	);
}

function JoinWaitlist(props) {
	const [email, setEmail] = useState("");

	const [success, setSuccess] = useState(false);

	const [attemptEmail, error] = useEmailWaitlist(() => setSuccess(true));

	function ValidateEmail(input) {
		var validRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

		return input.match(validRegex);
	}

	return (
		<div
			className={
				props.className +
				" flex flex-col space-y-5 text-center items-center p-10 w-full"
			}
		>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				pattern=".+@example\.com"
				size="30"
				placeholder="your@test.com"
				className="rounded-xl text-center"
				required
			/>
			{!success && error ? (
				<div className="w-fit p-2 text-white bg-red-400 rounded-md">
					{error}
				</div>
			) : null}
			{success ? (
				<div className="w-fit p-2 text-white bg-green-400 rounded-md">
					Email Added
				</div>
			) : null}

			<button
				className="text-primary bg-white p-2
							rounded-md disabled:bg-gray-300"
				disabled={!ValidateEmail(email) || error || success}
				onClick={() => attemptEmail(email)}
			>
				Join the Waitlist
			</button>
		</div>
	);
}

function RoundedBox(className, child) {
	return <div className={"absolute rounded-xl " + className}>{child}</div>;
}
