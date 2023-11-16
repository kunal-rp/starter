import Image from "next/image";

export default function Header(props) {
	return (
		<div className="flex flex-row w-full p-10 bg-primary text-white">
			<Image
				width={600}
				height={300}
				src="/logo_white.png"
				className="max-h-[20px] w-auto"
				alt="White Materri logo"
			/>
			<div className="m-auto" />
			<button className="text-sm"> Materri LLC, 2023 </button>
		</div>
	);
}
