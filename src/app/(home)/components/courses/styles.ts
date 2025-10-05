import { center, flex } from "@/app/styles/mixins";
import {
	Container,
	heading13,
	heading17,
	heading22,
	heading30,
	heading37,
	heading55,
	heading92,
	paragraph22Light,
} from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
	0% {
		opacity: 0;
		transform: translateY(30px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeIn = keyframes`
	from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
`;

export const Section = styled.section`
	padding: 10rem 0 20rem;

	@media (max-width: 600px) {
		padding: 19.5rem 0 8rem;
	}
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionMain = styled.div`
	margin-bottom: 10.5rem;
	${flex("row", "center", "space-between", "3rem")}

	@media(max-width: 880px) {
		margin-bottom: 5.9rem;
		gap: 5rem;
		flex-direction: column;
		align-items: flex-start;
	}
`;

export const SectionHeading = styled.div``;

export const SectionTitle = styled.h2`
	margin-bottom: 1.3rem;
	${heading92}

	@media (max-width: 600px) {
		font-size: 6.2rem;
		line-height: 6rem;
	}
`;

export const SectionDescription = styled.p`
	color: ${variables.colors.primary[200]};
	${heading22}
`;

export const SectionTabs = styled.div`
	${flex("row", "center", "flex-start", "10rem")}
`;

export const SectionTab = styled.button<{ $isActive: boolean }>`
	position: relative;
	cursor: pointer;
	${heading17}
	color: ${({ $isActive }) =>
		$isActive
			? variables.colors.neutral[100]
			: variables.colors.neutral[200]};
	transition: all 0.3s ease;

	&::before {
		content: "";
		position: absolute;
		width: ${({ $isActive }) => ($isActive ? "3.9rem" : "0")};
		height: 0.6rem;
		top: -0.5rem;
		left: 0;
		background-color: ${variables.colors.primary[200]};
		transition: width 0.3s ease-in-out;
	}

	&:hover {
		color: ${variables.colors.neutral[100]};
		&::before {
			width: 3.9rem;
		}
	}
`;

export const SectionContent = styled.div`
	margin-top: 5rem;
`;

export const SectionPane = styled.div`
	animation: ${fadeIn} 0.5s ease-in-out;

	@media (max-width: 1000px) {
		${flex("column", "flex-start", "flex-start", "4rem")}

		div {
			width: 100%;
		}
	}
`;

export const SectionPaneTitle = styled.h3<{
	$animatingOut?: boolean;
	$isMobile?: boolean;
	$isExpanded?: boolean;
}>`
	margin-bottom: ${({ $isMobile }) => ($isMobile ? "0" : "8.5rem")};
	${heading55}
	color: ${variables.colors.neutral[100]};
	opacity: ${({ $animatingOut }) => ($animatingOut ? 0 : 1)};
	transform: translateY(
		${({ $animatingOut }) => ($animatingOut ? "20px" : "0")}
	);
	transition:
		opacity 0.3s ease-out,
		transform 0.3s ease-out;
	animation: ${fadeInUp} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

	${({ $isMobile }) =>
		$isMobile &&
		`
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		align-items: center;
	`}

	@media (max-width: 600px) {
		margin-bottom: 0;
		font-size: 3rem;
		text-transform: uppercase;
	}
`;

export const SectionPaneIcon = styled.span<{ $isExpanded: boolean }>`
	width: 5.7rem;
	height: 5.7rem;
	border-radius: 50%;
	${center}
	${({ $isExpanded }) => ($isExpanded ? heading30 : heading37)}
	border: 1px solid ${variables.colors.primary[200]};
	transition: all 0.3s ease;
	color: ${({ $isExpanded }) =>
		$isExpanded ? variables.colors.neutral[500] : "transparent"};
	background-color: ${({ $isExpanded }) =>
		$isExpanded ? variables.colors.primary[200] : "transparent"};
`;

export const SectionPaneList = styled.ul`
	${flex("column", "flex-start", "flex-start", "2.7rem")}
	width: 100%;
	max-width: 74.8rem;

	@media (max-width: 1000px) {
		max-width: 100%;
		margin-top: 1.6rem;
	}

	@media (max-width: 600px) {
		gap: 1.8rem;
	}
`;

export const SectionPaneItem = styled.li<{
	$animatingOut?: boolean;
	$delay?: number;
}>`
	padding-bottom: 2.2rem;
	${flex("row", "center", "flex-start", "2.2rem")}
	border-bottom: 1px solid ${variables.colors.neutral[200]};
	width: 100%;
	opacity: ${({ $animatingOut }) => ($animatingOut ? 0 : 1)};
	transform: translateY(
		${({ $animatingOut }) => ($animatingOut ? "20px" : "0")}
	);
	transition:
		opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
			${({ $delay }) => $delay || 0}ms,
		transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
			${({ $delay }) => $delay || 0}ms;
	animation: ${fadeInUp} 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
		${({ $delay }) => $delay || 0}ms both;

	@media (max-width: 600px) {
		padding-bottom: 1.8rem;
		flex-direction: column-reverse;
		align-items: flex-start;
		gap: 0.2rem;
	}
`;

export const SectionPaneItemTitle = styled.strong`
	${paragraph22Light}
	color: ${variables.colors.neutral[200]};

	@media (max-width: 600px) {
		font-size: 1.8rem;
		color: ${variables.colors.neutral[100]};
	}
`;

export const SectionPaneItemDescription = styled.p`
	${heading13}
	color: ${variables.colors.neutral[200]};

	@media (max-width: 600px) {
		font-size: 1rem;
	}
`;
