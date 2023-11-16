import { forwardRef, useState, useEffect } from "react";

import { useIsVisible } from "../util/useIsVisible";

const FadeIn = forwardRef((props, ref) => {
	const isVisible = useIsVisible(ref);
	const [hasRendered, setHasRendered] = useState(false);

	useEffect(() => {
		if (isVisible) setHasRendered(true);
	}, [isVisible]);

	const BASE_CLASSNAME = "w-full h-full";
	const FADE_CLASSNAME = "transition-opacity ease-in duration-700";

	function determineRender() {
		if (props.stopAfterInitialRender && hasRendered) {
			return true;
		}
		return isVisible;
	}

	return (
		<div
			ref={ref}
			className={
				BASE_CLASSNAME +
				" " +
				FADE_CLASSNAME +
				" " +
				(determineRender() ? "opacity-100" : "opacity-0") +
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
