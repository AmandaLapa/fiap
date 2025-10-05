"use client";

import React from "react";

export interface ScrollState {
	scrolled: boolean;
	scrollProgress: number;
}

export const useHeader = () => {
	const [scrollState, setScrollState] = React.useState<ScrollState>({
		scrolled: false,
		scrollProgress: 0,
	});

	const calculateScrollValues = React.useCallback((): ScrollState => {
		const scrollTop: number = window.scrollY;
		const docHeight: number =
			document.documentElement.scrollHeight - window.innerHeight;
		const scrollPercent: number =
			docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

		return {
			scrolled: scrollTop > 50,
			scrollProgress: Math.min(Math.max(scrollPercent, 0), 100),
		};
	}, []);

	const handleScroll = React.useCallback((): void => {
		const newScrollState = calculateScrollValues();
		setScrollState(newScrollState);
	}, [calculateScrollValues]);

	React.useEffect(() => {
		const initialState = calculateScrollValues();
		setScrollState(initialState);

		window.addEventListener("scroll", handleScroll, { passive: true });

		return (): void => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll, calculateScrollValues]);

	return scrollState;
};
