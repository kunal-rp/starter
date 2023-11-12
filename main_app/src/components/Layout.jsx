import React from "react";
import Header from "./Header.jsx";

export default function Layout(props) {
	return (
		<div className="w-full h-full flex flex-col p-5 space-y-[2%]">
			<Header />
			<div className="w-full flex flex-row">{props.children}</div>
		</div>
	);
}
