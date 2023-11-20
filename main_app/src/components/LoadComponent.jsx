import React, { useEffect, useState } from "react";

import { FETCH_STATES } from "../constants.jsx";

export default function LoadComponent(props) {
	useEffect(() => {}, [props]);

	if (props.failed) {
		return "FAIL";
	}

	if (props.success) {
		return <>{props.children}</>;
	}

	return (
		<div className={props.className + " animate-pulse bg-gray-400"}></div>
	);
}
