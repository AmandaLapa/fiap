import { frame } from "@/app/styles/mixins";
import { Container } from "@/app/styles/patterns";
import styled from "styled-components";

export const Section = styled.section`
	padding: 5.3rem 0 10rem;
	overflow: hidden;

	@media (max-width: 700px) {
		display: none;
	}
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionImageWrapper = styled.div`
	width: 100%;
	max-width: 149.5rem;
	height: 80.4rem;
	overflow: hidden;
`;

export const SectionImage = styled.div<{ $isVisible: boolean }>`
	width: 100%;
	height: ${({ $isVisible }) => ($isVisible ? "80.4rem" : "0")};
	${frame}
	transition: height 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);

	img {
		width: 100%;
		height: 80.4rem;
		object-fit: cover;
		transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		transform: ${({ $isVisible }) =>
			$isVisible ? "scale(1)" : "scale(1.1)"};
	}
`;

export const SectionMarqueeWrapper = styled.div`
	margin-top: -8rem;
`;
