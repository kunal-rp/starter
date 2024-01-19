import { useState, useEffect } from "react";

export default function useTrackScrollPosition() {
	const [scrollPercent, setScrollPercent] = useState(0);

	function getDocHeight() {
		var D = document;
		return Math.max(
			D.body.scrollHeight,
			D.documentElement.scrollHeight,
			D.body.offsetHeight,
			D.documentElement.offsetHeight,
			D.body.clientHeight,
			D.documentElement.clientHeight,
		);
	}

	useEffect(() => {
		const updatePosition = () => {
			var scrollTop = window.pageYOffset;
			var winHeight = window.innerHeight;
			var docHeight = getDocHeight();

			var calculatedPercentage = scrollTop / (docHeight - winHeight);

			// Pixels are not exact, 1 should be max value
			setScrollPercent(Math.min(calculatedPercentage, 1));
		};
		window.addEventListener("scroll", updatePosition);
		window.addEventListener("resize", updatePosition);
		updatePosition();
		return () => {
			window.removeEventListener("scroll", updatePosition);
			window.removeEventListener("resize", updatePosition);
		};
	}, []);

	return scrollPercent;
}
