import { Container, heading20 } from "@/app/styles/patterns";
import styled from "styled-components";

export const Footer = styled.footer`
	padding: 4rem 0;

	@media (max-width: 600px) {
		padding: 3rem 0;
	}
`;

export const FooterContainer = styled.div`
	${Container}
`;

export const FooterCopy = styled.div`
	${heading20}

	@media (max-width: 600px) {
		font-size: 1.6rem;
	}
`;
