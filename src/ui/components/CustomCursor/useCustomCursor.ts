"use client";

import React from "react";
import { UseCustomCursorReturn } from "./index";

export const useCustomCursor = (): UseCustomCursorReturn => {
	const [isActive, setIsActive] = React.useState(false);
	const [position, setPosition] = React.useState({ x: 0, y: 0 });

	React.useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (isActive) {
				requestAnimationFrame(() => {
					setPosition({ x: e.clientX, y: e.clientY });
				});
			}
		};

		if (isActive) {
			document.addEventListener("mousemove", handleMouseMove, {
				passive: true,
			});
		}

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, [isActive]);

	const handlers = React.useMemo(
		() => ({
			onMouseEnter: () => setIsActive(true),
			onMouseLeave: () => setIsActive(false),
		}),
		[],
	);

	return {
		isActive,
		position,
		handlers,
	};
};
