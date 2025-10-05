"use client";

import React from "react";
import * as S from "./styles";
import { useFaq } from "./useFaq";

interface FaqItem {
	title: string;
	description: string;
}

const Faq = () => {
	const { activeItem, isMobile, handleItemHover, handleItemClick } = useFaq();

	const faqItems: FaqItem[] = [
		{
			title: "QUANDO POSSO ME MATRICULAR?",
			description:
				"Você pode se matricular em qualquer dia e hora, basta acessar a página do curso e se inscrever.",
		},
		{
			title: "POSSO FAZER DOIS OU MAIS CURSOS AO MESMO TEMPO?",
			description:
				"Sim. Apenas atente-se às datas, elas devem ser diferentes, porque cada curso tem sua dinâmica.",
		},
		{
			title: "QUAIS OS PRÉ-REQUISITOS?",
			description:
				"Cada curso tem seus pré-requisitos descritos na própria página. Identifique-os, para que você obtenha um melhor aproveitamento do seu SHIFT.",
		},
		{
			title: "QUAL A DURAÇÃO DOS CURSOS?",
			description: "De 6 a 42 horas.",
		},
		{
			title: "PRECISO LEVAR ALGUM MATERIAL PARA AS AULAS?",
			description:
				"Não. Os materiais utilizados em sala de aula são fornecidos pela FIAP e as aulas mais técnicas são realizadas em nossos próprios laboratórios. Sugerimos somente que traga o que preferir para suas anotações.",
		},
		{
			title: "VOU RECEBER CERTIFICADO DE CONCLUSÃO DE CURSO?",
			description:
				"Sim. Ao cumprir pelo menos 75% da carga horária do curso, você receberá um Certificado Digital, que poderá ser acessado na plataforma.",
		},
	];

	return (
		<S.Section>
			<S.SectionContainer>
				<S.SectionMain>
					<S.SectionTitle>FAQ</S.SectionTitle>
					<S.SectionDescription>
						Dúvidas Frequentes
					</S.SectionDescription>
				</S.SectionMain>
				<S.SectionContent>
					<S.SectionFaq>
						{faqItems.map((item, index) => (
							<S.SectionItem
								key={index}
								$isActive={activeItem === index}
								onMouseEnter={() => handleItemHover(index)}
								onClick={() => handleItemClick(index)}
								style={{
									cursor: isMobile ? "pointer" : "default",
								}}
							>
								<S.SectionItemTitle
									$isActive={activeItem === index}
								>
									{item.title}
								</S.SectionItemTitle>
								<S.SectionItemDescription
									$isActive={activeItem === index}
								>
									{item.description}
								</S.SectionItemDescription>
							</S.SectionItem>
						))}
					</S.SectionFaq>
				</S.SectionContent>
			</S.SectionContainer>
		</S.Section>
	);
};

export default Faq;
