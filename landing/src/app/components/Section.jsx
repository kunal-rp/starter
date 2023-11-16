import { forwardRef } from "react";

import { useIsVisible } from "../util/useIsVisible";
import FadeIn from "./FadeIn.jsx";

const Section = forwardRef((props, ref) => {
	const isVisible = useIsVisible(ref);

	const BASE_CLASSNAME =
		"w-full h-fit md:min-h-[60%] text-black text-center items-center space-y-10 md:pr-[10%] md:pl-[10%]";

	return (
		<FadeIn ref={ref} className={props.className + " " + BASE_CLASSNAME}>
			{props.children}
		</FadeIn>
	);
});
Section.displayName = "Section";

export default Section;
