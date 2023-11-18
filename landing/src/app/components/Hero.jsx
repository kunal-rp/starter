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
				props.className +
				" flex flex-col h-screen p-5 space-y-10 md:space-y-20"
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
		</Section>
	);
}
