import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { useIsVisible } from "../util/useIsVisible";
import Section from "./Section";

export default function Hero(props) {
	const ref = useRef();

	return (
		<Section
			ref={ref}
			className={
				props.className + " flex flex-col h-full space-y-10 pb-10"
			}
		>
			<h1 className="text-6xl font-medium text-center">
				A product-designing platform built around{" "}
				<span className="underline decoration-primary">procuring</span>{" "}
				&{" "}
				<span className="underline decoration-primary">delivering</span>{" "}
				<span className="text-secondary">materials</span>.
			</h1>
			<h3 className="text-xl">
				Create products with materials as the foundation. Drive product
				development while keeping continuity & logistics in focus.
			</h3>
			<button className="flex flex-row bg-primary p-2 w-fit rounded-xl items-center space-x-2  transition transition-shadow shadow-none hover:shadow-2xl">
				<span className="w-fit text-white text-xl rounded-2xl ">
					Request a Demo
				</span>
				<Image
					width={512}
					height={512}
					src="/laptop.png"
					className="text-white max-h-[20px] w-auto"
					alt="Laptop image"
				/>
			</button>
		</Section>
	);
}
