import { useRef } from "react";
import Image from "next/image";

import Section from "./Section";
import { useIsVisible } from "../util/useIsVisible";

export default function Features(props) {
	const section1Ref = useRef();
	const section2Ref = useRef();
	const section3Ref = useRef();

	function createSubSection(el1, el2) {
		return (
			<Section className="flex flex-col md:flex-row w-full md:h-[90%]]">
				{el1}
				{el2}
			</Section>
		);
	}

	return (
		<>
			<Section
				ref={section1Ref}
				className="flex flex-col md:flex-row w-full md:h-screen delay-100"
			>
				<div className="w-[90%] md:w-[50%] ">
					<Image
						width={512}
						height={512}
						src="/product_design.png"
						className="w-[150px] md:w-[300px] h-auto m-auto"
						alt="Product Design Clipart"
					/>
				</div>
				<div className="w-[90%] md:w-[50%] rounded-xl flex flex-col p-10 space-y-5 md:space-y-10 text-left">
					<h3 className="text-4xl">
						<span className="underline decoration-primary text-primary">
							Easily Manage
						</span>{" "}
						Product Technical Specs
					</h3>
					<span className="text-xl">
						Upload existing specs as your project&apos;s starting
						point.
					</span>
					<span className="text-xl">
						Export all finished product designs, material
						information, & logistics planning straight from your
						portal.
					</span>
				</div>
			</Section>

			<Section
				ref={section2Ref}
				className="flex flex-col-reverse md:flex-row w-full md:h-screen delay-100"
			>
				<div className="w-[90%] md:w-[50%] rounded-xl flex flex-col p-10 space-y-5 md:space-y-10 text-left">
					<h3 className="text-4xl">
						<span className="underline decoration-primary text-primary">
							Compare Material Strengths
						</span>{" "}
						during the Product Design Process
					</h3>
					<span className="text-xl">
						Gain insights into material&apos;s per functionality &
						style.
					</span>
					<span className="text-xl">
						Enjoy access to an every-growing database, with a focus
						on sustainable green materials.
					</span>
				</div>
				<div className="w-[90%] md:w-[50%] ">
					<Image
						width={512}
						height={512}
						src="/chart.png"
						className="w-[150px] md:w-[300px] h-auto m-auto"
						alt="Chart Clipart"
					/>
				</div>
			</Section>

			<Section
				ref={section3Ref}
				className="flex flex-col md:flex-row w-full md:h-screen delay-100"
			>
				<div className="w-[90%] md:w-[50%] ">
					<Image
						width={512}
						height={512}
						src="/logistics.png"
						className="w-[150px] md:w-[300px] h-auto m-auto"
						alt="Globe Logistics Clipart"
					/>
				</div>
				<div className="w-[90%] md:w-[50%] rounded-xl flex flex-col p-10 space-y-5 md:space-y-10 text-left">
					<h3 className="text-4xl">
						Manufacturing logistics is no longer an afterthough,
						it&apos;s{" "}
						<span className="underline decoration-primary text-primary">
							an added benifit.
						</span>
					</h3>
					<span className="text-xl">
						Filter materials for availability & logistical
						requirements.
					</span>
					<span className="text-xl">
						Connect with suppliers straight from our portals without
						all the communication hassles.
					</span>
				</div>
			</Section>
		</>
	);
}
