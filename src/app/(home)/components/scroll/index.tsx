"use client";

import * as S from "./styles";
import Image from "next/image";
import image from "@/assets/images/imagem.webp";
import MarqueeComponent from "@/ui/components/Marquee";
import { useScroll } from "./useScroll";

const Scroll = () => {
	const { isVisible, sectionRef } = useScroll();

	return (
		<S.Section ref={sectionRef}>
			<S.SectionContainer>
				<S.SectionImageWrapper>
					<S.SectionImage $isVisible={isVisible}>
						<Image
							src={image}
							alt="Descrição da imagem"
							quality={100}
						/>
					</S.SectionImage>
				</S.SectionImageWrapper>
			</S.SectionContainer>

			<S.SectionMarqueeWrapper>
				<MarqueeComponent
					firstLineText="SKILLS • CONHECIMENTO • SKILLS •"
					secondLineText="MUITO ALÉM DOS TUTORIAIS •"
					type="scroll"
					fontType="body"
					textColor="neutral"
					size="large"
				/>
			</S.SectionMarqueeWrapper>
		</S.Section>
	);
};

export default Scroll;
