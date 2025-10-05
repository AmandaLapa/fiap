import {
	Container,
	heading22,
	heading92,
	heading20,
	paragraph16Regular,
} from "@/app/styles/patterns";
import variables from "@/app/styles/variables";

import styled from "styled-components";

export const Section = styled.section`
	padding: 10rem 0;

	@media (max-width: 600px) {
		padding: 4.4rem 0 6rem;
	}
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionMain = styled.div`
	margin-bottom: 11.2rem;

	@media (max-width: 600px) {
		margin-bottom: 4.2rem;
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

export const SectionContent = styled.div``;

export const SectionFaq = styled.ul`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 3rem 7rem;

	@media (max-width: 1050px) {
		gap: 4rem;
	}

	@media (max-width: 940px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 740px) {
		grid-template-columns: 1fr;
		gap: 5.6rem;
	}
`;

export const SectionItem = styled.li<{ $isActive: boolean }>`
	padding-top: 3rem;
	min-height: 18rem;
	width: 100%;
	position: relative;
	cursor: pointer;
	transition: all 0.3s ease;

	&::before {
		content: "";
		position: absolute;
		width: 5.9rem;
		height: 0.2rem;
		background-color: ${variables.colors.neutral[200]};
		top: 0;
		left: 0;
		transition: all 0.4s ease;
	}

	&:hover {
		&::before {
			width: 100%;
			background-color: ${variables.colors.primary[200]};
		}
	}

	@media (max-width: 740px) {
		min-height: auto;
		padding-top: 1.2rem;
	}
`;

export const SectionItemTitle = styled.h3<{ $isActive: boolean }>`
	margin-bottom: ${({ $isActive }) => ($isActive ? "2rem" : "0")};
	${heading20}
	color: ${({ $isActive }) =>
		$isActive
			? variables.colors.neutral[100]
			: variables.colors.neutral[200]};
	transition: all 0.3s ease;

	@media (max-width: 600px) {
		margin-bottom: ${({ $isActive }) => ($isActive ? "0.9rem" : "0")};
	}
`;

export const SectionItemDescription = styled.p<{ $isActive: boolean }>`
	${paragraph16Regular}
	color: ${variables.colors.neutral[200]};
	opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
	max-height: ${({ $isActive }) => ($isActive ? "200px" : "0")};
	overflow: hidden;
	transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	line-height: 1.9rem;

	@media (max-width: 600px) {
		font-size: 1.5rem;
	}
`;
