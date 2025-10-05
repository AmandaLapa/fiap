"use client";

import React from "react";

import Image from "next/image";
import * as S from "./styles";

import logo from "@/assets/brand/fiap-logo.svg";
import { useHeader } from "./useHeader";

const Header: React.FC = () => {
	const scrollState = useHeader();

	return (
		<S.Header $scrolled={scrollState.scrolled}>
			<S.HeaderContainer>
				<Image src={logo} quality={100} alt="Fiap" />
			</S.HeaderContainer>
			<S.HeaderProgress $progress={scrollState.scrollProgress} />
		</S.Header>
	);
};

export default Header;
