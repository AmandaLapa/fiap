"use client";

import React from "react";

interface UseScrollReturn {
	isVisible: boolean;
	sectionRef: React.RefObject<HTMLDivElement>;
}

export const useScroll = (): UseScrollReturn => {
	const [isVisible, setIsVisible] = React.useState(false);
	const sectionRef = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsVisible(true);
				}
			},
			{
				threshold: 0.2,
				rootMargin: "0px 0px -50px 0px",
			},
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return {
		isVisible,
		sectionRef,
	};
};
