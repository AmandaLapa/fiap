"use client";

import React from "react";

export const useFaq = () => {
	const [activeItem, setActiveItem] = React.useState<number>(0);
	const [isMobile, setIsMobile] = React.useState<boolean>(false);

	React.useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 1000);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	const handleItemHover = (itemId: number) => {
		if (!isMobile) {
			setActiveItem(itemId);
		}
	};

	const handleItemClick = (itemId: number) => {
		if (isMobile) {
			setActiveItem(activeItem === itemId ? -1 : itemId);
		}
	};

	return {
		activeItem,
		isMobile,
		handleItemHover,
		handleItemClick,
	};
};
