"use client";

import * as S from "./styles";

const Hero = () => {
	return (
		<S.Section>
			<S.SectionContainer>
				<S.SectionMain>
					<S.SectionTitle>
						<S.TitleLine $delay={0}>A melhor faculdade</S.TitleLine>
						<S.TitleLine $delay={0.3}>de tecnologia</S.TitleLine>
					</S.SectionTitle>

					<S.SectionBefore>SOBRE</S.SectionBefore>
				</S.SectionMain>
			</S.SectionContainer>
		</S.Section>
	);
};

export default Hero;
