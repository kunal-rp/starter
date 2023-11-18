import { useRef } from "react";
import Image from "next/image";

import FadeIn from "./FadeIn.jsx";

export default function Header(props) {
	const ref = useRef();

	return (
		<FadeIn
			ref={ref}
			className={
				(props.className ? props.className : " ") + " w-full h-fit"
			}
			stopAfterInitialRender={true}
		>
			<div className="flex flex-row p-3 md:ml-20 md:mr-20 rounded-xl shadow-xl justify-center ">
				<Image
					width={1500}
					height={300}
					src="/materri_green.png"
					className="max-h-[30px] w-auto"
					alt="Green Materri logo"
				/>
				<div className="m-auto" />
				<button className="flex flex-row bg-primary p-1 w-fit rounded-xl items-center space-x-1 ">
					<span className="w-fit text-white text-md rounded-xl ">
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
			</div>
		</FadeIn>
	);
}
