"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSetRecoilState } from "recoil";

import { percentageScrollState } from "../recoil.jsx";
import useTrackScrollPosition from "./hooks/useTrackScrollPosition.jsx";

export default function RootAnimation(props) {
	var rootAnimationRef = useRef(null);

	const setScrollPercent = useSetRecoilState(percentageScrollState);

	const scrollPercent = useTrackScrollPosition(rootAnimationRef);

	function updateChildren() {
		return React.Children.map(props.children, (child) =>
			React.cloneElement(child, { scrollPercent: scrollPercent }),
		);
	}

	useEffect(() => {
		setScrollPercent(scrollPercent);
	}, [scrollPercent]);

	return (
		<div
			id="rootAnimationContainer"
			ref={rootAnimationRef}
			class={
				"w-[100vw] min-h-[200vh] h-fit " +
				(props.className ? props.className : "")
			}
		>
			{updateChildren()}
		</div>
	);
}
