import styled, { css } from "styled-components";
import variables from "@/app/styles/variables";
import { heading120, heading144, heading80 } from "@/app/styles/patterns";

export const Marquee = styled.div<{ $pauseOnHover: boolean }>`
	overflow: hidden;
	position: relative;

	${({ $pauseOnHover }) =>
		$pauseOnHover &&
		css`
			&:hover {
				* {
					animation-play-state: paused;
				}
			}
		`}
`;

export const MarqueeWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;

	@media (max-width: 600px) {
		gap: 0;
	}
`;

export const MarqueeLine = styled.div<{
	$showBorder: boolean;
	$size?: "large" | "small";
}>`
	white-space: nowrap;
	overflow: hidden;
	position: relative;
	height: ${({ $size }) => ($size === "large" ? "16rem" : "11.5rem")};
	display: flex;
	align-items: center;
	border-bottom: ${({ $showBorder }) =>
		$showBorder ? `1px solid ${variables.colors.neutral[100]}` : "none"};

	@media (max-width: 990px) {
		height: ${({ $size }) => ($size === "large" ? "13rem" : "9.5rem")};
	}

	@media (max-width: 600px) {
		height: 7rem;
	}
`;

export const MarqueeContent = styled.div`
	display: inline-flex;
	white-space: nowrap;
	will-change: transform;
`;

export const MarqueeText = styled.span<{
	$fontType: "heading" | "body";
	$textColor: "light" | "neutral";
}>`
	margin-right: 1rem;
	flex-shrink: 0;

	${({ $fontType }) => ($fontType === "heading" ? heading80 : heading144)}

	${({ $fontType, $textColor }) =>
		$fontType === "body"
			? css`
					color: transparent;
					-webkit-text-stroke: 0.15rem
						${variables.colors.neutral[300]};
			  `
			: css`
					color: ${$textColor === "light"
						? variables.colors.neutral[100]
						: variables.colors.neutral[300]};
			  `}

			@media (max-width: 990px) {
		${({ $fontType }) =>
			$fontType === "heading"
				? css`
						font-size: 6rem;
				  `
				: heading120}

		@media (max-width: 600px) {
			font-size: 3.5rem;
		}
	}
`;
