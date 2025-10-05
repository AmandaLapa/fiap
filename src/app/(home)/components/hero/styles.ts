import { center, z } from "@/app/styles/mixins";
import {
	Container,
	heading120,
	heading350,
	heading55,
	heading92,
} from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled, { keyframes } from "styled-components";

interface TitleLineProps {
	$delay: number;
}

const fadeUp = keyframes`
	0% {
		opacity: 0;
		transform: translateY(-20px);
	}
	100% {
		opacity: 1;
		transform: translateY(0);
	}
`;

const fadeDown = keyframes`
	0% {
		opacity: 0;
    transform: translateY(50px);
	}

  100% {
		opacity: 1;
    transform: translateY(0);
	}
`;

export const Section = styled.section`
	padding: 39.2rem 0 35.8rem;

	@media (max-width: 990px) {
		padding: 30rem 0;
	}

	@media (max-width: 600px) {
		padding: 19.2rem 0;
	}
`;

export const SectionContainer = styled.div`
	${Container}
`;

export const SectionMain = styled.div`
	width: 100%;
	max-width: 127.7rem;
	position: relative;
	${center}
	pointer-events: none;
`;

export const SectionTitle = styled.h1`
	z-index: ${z("element")};
	display: flex;
	flex-direction: column;
`;

export const TitleLine = styled.span<TitleLineProps>`
	${heading120}
	display: block;
	opacity: 0;
	transform: translateY(-20px);
	animation: ${fadeUp} 0.8s ease-out forwards;
	animation-delay: ${({ $delay }) => $delay}s;

	&:first-child {
		margin-left: 9rem;
	}

	&:last-child {
		transform: translateY(-40px);
	}

	@media (max-width: 1340px) {
		${heading92}
	}

	@media (max-width: 990px) {
		font-size: 7rem;

		&:first-child {
			margin-left: 3rem;
		}
	}

	@media (max-width: 700px) {
		${heading55}
	}

	@media (max-width: 600px) {
		font-size: 3rem;
		line-height: 100%;
	}

	@media (max-width: 400px) {
		font-size: 2.8rem;

		&:first-child {
			margin-left: 2rem;
		}
	}
`;

export const SectionBefore = styled.p`
	bottom: -7rem;
	position: absolute;
	${heading350}
	color: ${variables.colors.neutral[600]};
	text-align: center;
	animation: ${fadeDown} 1.1s ease-in forwards;

	@media (max-width: 1340px) {
		font-size: 30rem;
	}

	@media (max-width: 990px) {
		font-size: 20rem;
	}

	@media (max-width: 700px) {
		font-size: 16rem;
		bottom: -4rem;
	}

	@media (max-width: 600px) {
		font-size: 10rem;
	}

	@media (max-width: 400px) {
		font-size: 9rem;
		bottom: -3rem;
	}
`;
