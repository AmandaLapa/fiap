"use client";

import React from "react";
import * as C from "@/ui/components/CustomCursor/styles";

export type CursorSize = "large" | "small";

export interface CustomCursorProps {
	isActive: boolean;
	position: { x: number; y: number };
	size?: CursorSize;
}

export interface UseCustomCursorReturn {
	isActive: boolean;
	position: { x: number; y: number };
	handlers: {
		onMouseEnter: () => void;
		onMouseLeave: () => void;
	};
}

const CustomCursor: React.FC<CustomCursorProps> = React.memo(
	({ isActive, position, size = "large" }) => {
		const getOffset = (size: CursorSize) => {
			return size === "large" ? 80 : 10;
		};

		const offset = getOffset(size);

		return (
			<C.Cursor
				$isActive={isActive}
				$size={size}
				style={{
					left: `${position.x - offset}px`,
					top: `${position.y - offset}px`,
				}}
			/>
		);
	},
);
CustomCursor.displayName = "CustomCursor";

export default CustomCursor;
