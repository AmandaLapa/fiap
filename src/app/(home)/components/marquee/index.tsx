"use client";

import React from "react";
import MarqueeComponent from "@/ui/components/Marquee";
import * as S from "./styles";

const Marquee = () => {
	return (
		<S.Section>
			<MarqueeComponent
				firstLineText="CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO."
				secondLineText="TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO."
				type="auto"
				fontType="heading"
				textColor="light"
				pauseOnHover={true}
				enableCustomCursor={true}
				showBorder={true}
			/>
		</S.Section>
	);
};

export default Marquee;
