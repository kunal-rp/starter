import Image from "next/image";

export default function Header(props) {
	return (
		<div className="flex flex-row w-full p-10">
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
	);
}
