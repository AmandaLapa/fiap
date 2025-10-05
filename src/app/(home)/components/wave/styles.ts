import { Container, heading13, heading60Stroke } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled, { css } from "styled-components";

export const Section = styled.section`
	position: relative;
	background: ${variables.colors.neutral[500]};
	overflow: hidden;

	@media (max-width: 1000px) {
		display: none;
	}
`;

export const SectionContainer = styled.div`
	${Container}
	width: 100%;
	overflow: visible;
`;

export const SectionLines = styled.div`
	position: relative;
	width: 100%;
	height: 75rem;
	overflow: visible;
`;

export const SectionLineWrapper = styled.div<{ $index: number }>`
	position: absolute;
	width: 100%;
	height: 1px;
	top: ${({ $index }) => {
		if ($index === 3) {
			return 68;
		}
		return 15 + $index * 12;
	}}rem;
	left: 0;
`;

export const SectionLine = styled.div<{ width: number }>`
	position: absolute;
	top: 50%;
	left: 0;
	height: 2px;
	background-color: ${variables.colors.neutral[200]};
	width: ${({ width }) => width}%;
	transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	transform: translateY(-50%);
	opacity: 0.8;
`;

export const SectionMain = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

export const SectionDescription = styled.span<{
	$position: number;
	$progress: number;
	$isCircle?: boolean;
	$isSpecial?: boolean;
	$isSubtext?: boolean;
}>`
	position: absolute;
	left: ${({ $position }) => $position}%;
	top: -2rem;

	${({ $isCircle, $isSpecial }) => {
		if ($isCircle)
			return css`
				font-size: 3rem;
			`;
		if ($isSpecial) return heading60Stroke;
		return heading13;
	}}

	color: ${({ $isSpecial }) => {
		if ($isSpecial) return "transparent";
		return variables.colors.neutral[300];
	}};

	opacity: ${({ $progress, $position }) => {
		const lineProgress = $progress * 100;
		return lineProgress >= $position ? 1 : 0;
	}};

	transition: opacity 2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	white-space: nowrap;
	transform: translateX(-50%);

	${({ $isCircle }) =>
		$isCircle &&
		`
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: ${variables.colors.neutral[200]};
		top: -3rem;
		display: block;
		font-size: 0;
	`}

	${({ $isSpecial }) =>
		$isSpecial &&
		`
		top: -8rem;
	`}

	${({ $isSubtext }) =>
		$isSubtext &&
		`
		top: -2rem; 
	`}
`;

export const WaveCanvas = styled.canvas`
	position: absolute;
	bottom: 11%;
	left: -5%;
	width: calc(100% + 20rem);
	height: calc(100% + 20rem);
	pointer-events: none;
	overflow: visible;
`;
