"use client";

import React from "react";
import { useCustomCursor } from "@/ui/components/CustomCursor/useCustomCursor";

interface UseMarqueeReturn {
	firstLineRef: React.RefObject<HTMLDivElement>;
	secondLineRef: React.RefObject<HTMLDivElement>;
	sectionRef: React.RefObject<HTMLDivElement>;

	isPaused: boolean;
	windowWidth: number;
	positions: {
		firstLine: number;
		secondLine: number;
	};
	scrollPositions: {
		firstLine: number;
		secondLine: number;
	};

	cursor: ReturnType<typeof useCustomCursor>;

	handleMouseEnter: () => void;
	handleMouseLeave: () => void;

	createRepeatedText: (
		text: string,
		times?: number,
	) => Array<{ text: string; key: number }>;
}

export const useMarquee = (): UseMarqueeReturn => {
	const firstLineRef = React.useRef<HTMLDivElement>(null);
	const secondLineRef = React.useRef<HTMLDivElement>(null);
	const sectionRef = React.useRef<HTMLDivElement>(null);

	const [isPaused, setIsPaused] = React.useState(false);
	const [windowWidth, setWindowWidth] = React.useState(0);
	const [positions, setPositions] = React.useState({
		firstLine: 1,
		secondLine: 1,
	});
	const [scrollPositions, setScrollPositions] = React.useState({
		firstLine: 0,
		secondLine: 0,
	});

	const cursor = useCustomCursor();

	const createRepeatedText = React.useCallback(
		(text: string, times: number = 8) => {
			return Array(times)
				.fill(null)
				.map((_, index) => ({ text, key: index }));
		},
		[],
	);

	React.useEffect(() => {
		const updateWidth = () => {
			const width = window.innerWidth;
			setWindowWidth(width);

			setPositions({
				firstLine: 0,
				secondLine: 0,
			});
		};

		updateWidth();
		window.addEventListener("resize", updateWidth);

		return () => window.removeEventListener("resize", updateWidth);
	}, []);

	React.useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const scrollSpeed = 0.3;

			setScrollPositions({
				firstLine: scrollY * scrollSpeed,
				secondLine: scrollY * -scrollSpeed * 0.7,
			});
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	React.useEffect(() => {
		if (windowWidth === 0) return;
		let animationId: number;

		const animate = () => {
			if (!isPaused) {
				setPositions((prev) => {
					const speed = 2;
					const cycleDistance = windowWidth + 500;

					let newFirstLine = prev.firstLine + speed;
					let newSecondLine = prev.secondLine + speed;

					if (newFirstLine >= cycleDistance) {
						newFirstLine = newFirstLine - cycleDistance;
					}

					if (newSecondLine >= cycleDistance) {
						newSecondLine = newSecondLine - cycleDistance;
					}

					return {
						firstLine: newFirstLine,
						secondLine: newSecondLine,
					};
				});
			}
			animationId = requestAnimationFrame(animate);
		};
		animationId = requestAnimationFrame(animate);

		return () => {
			if (animationId) {
				cancelAnimationFrame(animationId);
			}
		};
	}, [isPaused, windowWidth]);

	const handleMouseEnter = React.useCallback(() => {
		setIsPaused(true);
		cursor.handlers.onMouseEnter();
	}, [cursor.handlers]);

	const handleMouseLeave = React.useCallback(() => {
		setIsPaused(false);
		cursor.handlers.onMouseLeave();
	}, [cursor.handlers]);

	return {
		firstLineRef,
		secondLineRef,
		sectionRef,

		isPaused,
		windowWidth,
		positions,
		scrollPositions,

		cursor,

		handleMouseEnter,
		handleMouseLeave,

		createRepeatedText,
	};
};
