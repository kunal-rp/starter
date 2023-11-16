import { forwardRef } from "react";

import { useIsVisible } from "../util/useIsVisible";

let Section;
export default Section = forwardRef((props, ref) => {
	const isVisible = useIsVisible(ref);

	const BASE_CLASSNAME =
		"w-full h-full min-h-full md:min-h-[80%] text-black text-center items-center space-y-10 md:pr-[10%] md:pl-[10%]";
	const FADE_CLASSNAME = "transition-opacity ease-in duration-700";

	return (
		<div
			ref={ref}
			className={
				BASE_CLASSNAME +
				" " +
				FADE_CLASSNAME +
				" " +
				(isVisible ? "opacity-100" : "opacity-0") +
				" " +
				props.className
			}
		>
			{props.children}
		</div>
	);
});
