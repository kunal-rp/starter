import { useRef } from "react";
import Image from "next/image";

import FadeIn from "./FadeIn.jsx";

export default function Header(props) {
	const ref = useRef();

	return (
		<FadeIn
			ref={ref}
			className={props.className + "w-full "}
			stopAfterInitialRender={true}
		>
			<div className="flex flex-row p-5 md:ml-20 md:mr-20 rounded-xl shadow-xl justify-center">
				<Image
					width={1500}
					height={300}
					src="/materri_green.png"
					className="max-h-[30px] w-auto"
					alt="Green Materri logo"
				/>
				<div className="m-auto" />
				<button className="text-black"> Contact Us </button>
			</div>
		</FadeIn>
	);
}
