"use client";

import React from "react";
import * as C from "@/ui/components/Marquee/styles";
import CustomCursor, { CursorSize } from "../CustomCursor";
import { useMarquee } from "./useMarquee";

export interface MarqueeProps {
	firstLineText: string;
	secondLineText?: string;
	type: "auto" | "scroll";
	fontType?: "heading" | "body";
	textColor?: "light" | "neutral";
	speed?: number;
	pauseOnHover?: boolean;
	showBorder?: boolean;
	enableCustomCursor?: boolean;
	cursorSize?: CursorSize;
	size?: "large" | "small";
}

const MarqueeComponent: React.FC<MarqueeProps> = ({
	firstLineText,
	secondLineText,
	type = "auto",
	fontType = "heading",
	textColor = "light",
	pauseOnHover = false,
	showBorder = false,
	enableCustomCursor = false,
	cursorSize = "large",
	size = "small",
}) => {
	const {
		sectionRef,
		firstLineRef,
		secondLineRef,
		isPaused,
		windowWidth,
		positions,
		scrollPositions,
		cursor,
		handleMouseEnter,
		handleMouseLeave,
		createRepeatedText,
	} = useMarquee();

	return (
		<React.Fragment>
			{enableCustomCursor && cursor.isActive && isPaused && (
				<CustomCursor
					isActive={cursor.isActive}
					position={cursor.position}
					size={cursorSize}
				/>
			)}

			<C.Marquee
				ref={sectionRef}
				$pauseOnHover={pauseOnHover && type === "auto"}
				onMouseEnter={enableCustomCursor ? handleMouseEnter : undefined}
				onMouseLeave={enableCustomCursor ? handleMouseLeave : undefined}
				style={{
					cursor:
						enableCustomCursor && cursor.isActive && isPaused
							? "none"
							: enableCustomCursor
							  ? "pointer"
							  : "default",
				}}
			>
				<C.MarqueeWrapper>
					<C.MarqueeLine $showBorder={showBorder} $size={size}>
						{type === "scroll"
							? [-1, 0, 1].map((offset) => (
									<C.MarqueeContent
										key={`first-scroll-${offset}`}
										ref={
											offset === 0
												? firstLineRef
												: undefined
										}
										style={{
											transform: `translateX(${
												scrollPositions.firstLine +
												offset * (windowWidth + 500)
											}px)`,
										}}
									>
										{createRepeatedText(
											firstLineText,
											15,
										).map((item) => (
											<C.MarqueeText
												key={item.key}
												$fontType={fontType}
												$textColor={textColor}
											>
												{item.text}
											</C.MarqueeText>
										))}
									</C.MarqueeContent>
							  ))
							: [-1, 0, 1].map((offset) => (
									<C.MarqueeContent
										key={`first-${offset}`}
										ref={
											offset === 0
												? firstLineRef
												: undefined
										}
										style={{
											transform: `translateX(${
												positions.firstLine +
												offset * (windowWidth + 500)
											}px)`,
											transition: isPaused
												? "transform 0.3s ease"
												: "none",
										}}
									>
										{createRepeatedText(firstLineText).map(
											(item) => (
												<C.MarqueeText
													key={item.key}
													$fontType={fontType}
													$textColor={textColor}
												>
													{item.text}
												</C.MarqueeText>
											),
										)}
									</C.MarqueeContent>
							  ))}
					</C.MarqueeLine>

					<C.MarqueeLine $showBorder={showBorder} $size={size}>
						{type === "scroll"
							? [-1, 0, 1].map((offset) => (
									<C.MarqueeContent
										key={`second-scroll-${offset}`}
										ref={
											offset === 0
												? secondLineRef
												: undefined
										}
										style={{
											transform: `translateX(${
												scrollPositions.secondLine +
												offset * (windowWidth + 500)
											}px)`,
										}}
									>
										{secondLineText &&
											createRepeatedText(
												secondLineText,
												15,
											).map((item) => (
												<C.MarqueeText
													key={item.key}
													$fontType={fontType}
													$textColor={textColor}
												>
													{item.text}
												</C.MarqueeText>
											))}
									</C.MarqueeContent>
							  ))
							: [-1, 0, 1].map((offset) => (
									<C.MarqueeContent
										key={`second-${offset}`}
										ref={
											offset === 0
												? secondLineRef
												: undefined
										}
										style={{
											transform: `translateX(${
												windowWidth -
												positions.secondLine +
												offset * (windowWidth + 500)
											}px)`,
											transition: isPaused
												? "transform 0.3s ease"
												: "none",
										}}
									>
										{createRepeatedText(
											secondLineText ?? "",
										).map((item) => (
											<C.MarqueeText
												key={item.key}
												$fontType={fontType}
												$textColor={textColor}
											>
												{item.text}
											</C.MarqueeText>
										))}
									</C.MarqueeContent>
							  ))}
					</C.MarqueeLine>
				</C.MarqueeWrapper>
			</C.Marquee>
		</React.Fragment>
	);
};

export default MarqueeComponent;
