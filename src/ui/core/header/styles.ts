import { center } from "@/app/styles/mixins";
import { Container } from "@/app/styles/patterns";
import variables from "@/app/styles/variables";
import styled from "styled-components";

interface HeaderProps {
	$scrolled: boolean;
}

interface HeaderProgressProps {
	$progress: number;
}

export const Header = styled.header<HeaderProps>`
	padding: ${({ $scrolled }) => ($scrolled ? "1.6rem 0" : "2rem 0")};
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	background-color: ${({ $scrolled }) =>
		$scrolled ? variables.colors.neutral[400] : "transparent"};
	transition: all 0.4s ease;
	z-index: 1000;

	img {
		height: ${({ $scrolled }) => ($scrolled ? "3rem" : "3.9rem")};
		transition: height 0.4s ease;
	}

	@media (max-width: 600px) {
		padding: ${({ $scrolled }) => ($scrolled ? "1.6rem 0" : "2.8rem 0")};

		img {
			max-width: 8.4rem;
		}
	}
`;

export const HeaderContainer = styled.div`
	${Container}
	${center}
`;

export const HeaderProgress = styled.div<HeaderProgressProps>`
	height: 0.3rem;
	width: ${({ $progress }) => $progress}%;
	background-color: ${variables.colors.primary[100]};
	transition: all 0.2s ease;
	position: absolute;
	bottom: 0;
	left: 0;
`;
