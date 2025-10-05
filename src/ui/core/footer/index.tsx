"use client";

import React from "react";

import * as S from "./styles";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<S.Footer>
			<S.FooterContainer>
				<S.FooterCopy>
					© {currentYear} Fiap. Todos os direitos reservados.
				</S.FooterCopy>
			</S.FooterContainer>
		</S.Footer>
	);
};

export default Footer;
