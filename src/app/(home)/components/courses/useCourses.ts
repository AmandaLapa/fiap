"use client";

import React from "react";
import { useCustomCursor } from "@/ui/components/CustomCursor/useCustomCursor";

export type TabType = "tecnologia" | "inovacao" | "negocios";

export interface TabData {
	id: TabType;
	title: string;
	items: Array<{
		title: string;
		description: string;
	}>;
}

export interface UseCoursesReturn {
	activeTab: TabType;
	animatingOut: boolean;
	cursor: ReturnType<typeof useCustomCursor>;
	activeTabData: TabData | undefined;
	isMobile: boolean;
	expandedTab: TabType | null;
	handleTabChange: (tab: TabType) => void;
	handleMobileToggle: (tab: TabType) => void;
}

export const useCourses = (tabsData: TabData[]): UseCoursesReturn => {
	const [activeTab, setActiveTab] = React.useState<TabType>("tecnologia");
	const [animatingOut, setAnimatingOut] = React.useState(false);
	const [isMobile, setIsMobile] = React.useState<boolean>(false);
	const [expandedTab, setExpandedTab] = React.useState<TabType | null>(
		"tecnologia",
	);
	const cursor = useCustomCursor();

	React.useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 1000);
		};

		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);

		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	const handleTabChange = (tab: TabType) => {
		if (tab !== activeTab && !isMobile) {
			setAnimatingOut(true);
			setTimeout(() => {
				setActiveTab(tab);
				setAnimatingOut(false);
			}, 300);
		}
	};

	const handleMobileToggle = (tab: TabType) => {
		if (isMobile) {
			setExpandedTab((prev) => (prev === tab ? null : tab));
		}
	};

	const activeTabData = tabsData.find((tab) => tab.id === activeTab);

	return {
		activeTab,
		animatingOut,
		cursor,
		activeTabData,
		isMobile,
		expandedTab,
		handleTabChange,
		handleMobileToggle,
	};
};
