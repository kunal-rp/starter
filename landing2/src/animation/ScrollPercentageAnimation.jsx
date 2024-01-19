"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

import { percentageScrollState } from "../recoil.jsx";

export default function ScrollPercentageAnimation({
	startScrollPercentage,
	endScrollPercentage,
	...props
}) {
	const ScrollPercentageAnimationRef = useRef();

	const [localScrollPercent, setLocalScrollPercent] = useState(0);

	function calculateLocalScrollPercent() {
		// Default to 0  if scroll isn't active & animation SHOULD NOT have occured yet
		if (props.scrollPercent < startScrollPercentage) {
			setLocalScrollPercent(0);
		}

		// Default to 1 value if scroll isn't active & animation SHOULD have occured yet
		else if (props.scrollPercent > endScrollPercentage) {
			setLocalScrollPercent(1);
		} else {
			setLocalScrollPercent(
				(props.scrollPercent - startScrollPercentage) /
					(endScrollPercentage - startScrollPercentage),
			);
		}
	}

	useEffect(() => {
		calculateLocalScrollPercent();
	}, [props.scrollPercent]);

	function updatedChildren() {
		// Pass local scroll percent to children
		return React.Children.map(props.children, (child) =>
			React.cloneElement(child, {
				scrollPercent: localScrollPercent,
			}),
		);
	}

	return (
		<div ref={ScrollPercentageAnimationRef} class={props.className}>
			{updatedChildren()}
		</div>
	);
}
