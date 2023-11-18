import { forwardRef } from "react";

import { useIsVisible } from "../util/useIsVisible.jsx";

const FadeIn = forwardRef((props, ref) => {
	const BASE_CLASSNAME = "w-full h-full";
	const FADE_CLASSNAME = "transition-opacity ease-in duration-200";

	return (
		<div
			ref={ref}
			className={
				BASE_CLASSNAME +
				" " +
				FADE_CLASSNAME +
				" " +
				(props.isVisible ? "opacity-100" : "opacity-0") +
				" " +
				props.className
			}
		>
			{props.children}
		</div>
	);
});
FadeIn.displayName = "FadeIn";

export default FadeIn;
