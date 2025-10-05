"use client";

import React from "react";
import * as S from "./styles";
import { useWave } from "./useWave";

const Wave = () => {
	const { sectionRef, canvasRef, progress, getGlitchText } = useWave();

	const lineData = [
		{
			texts: [
				{
					text: "//desenvolvimento serverless",
					position: 9,
					isCircle: false,
					hasTyping: true,
				},
			],
		},
		{
			texts: [
				{ text: "•", position: 1, isCircle: true, hasTyping: false },
			],
		},
		{
			texts: [
				{
					text: "//data viz",
					position: 3,
					isCircle: false,
					hasTyping: true,
				},
				{
					text: "//web hacking",
					position: 30,
					isCircle: false,
					hasTyping: true,
				},
				{
					text: "06",
					position: 96,
					isCircle: false,
					hasTyping: false,
					isSpecial: true,
				},
				{
					text: "cursos",
					position: 97,
					isCircle: false,
					hasTyping: false,
					isSubtext: true,
				},
			],
		},
		{
			texts: [
				{
					text: "//cyber crimes",
					position: 4,
					isCircle: false,
					hasTyping: true,
				},
				{
					text: "//cloud services",
					position: 30,
					isCircle: false,
					hasTyping: true,
				},
			],
		},
	];

	return (
		<S.Section ref={sectionRef}>
			<S.SectionContainer>
				<S.SectionLines>
					{lineData.map((line, index) => (
						<S.SectionLineWrapper key={index} $index={index}>
							<S.SectionLine width={progress * 100} />
							<S.SectionMain>
								{line.texts.map((textItem, textIndex) => (
									<S.SectionDescription
										key={textIndex}
										$position={textItem.position}
										$progress={progress}
										$isCircle={textItem.isCircle}
										$isSpecial={textItem.isSpecial}
										$isSubtext={textItem.isSubtext}
									>
										{textItem.hasTyping
											? getGlitchText(
													textItem.text,
													progress,
													textItem.position,
											  )
											: progress * 100 >=
											    textItem.position
											  ? textItem.text
											  : ""}
									</S.SectionDescription>
								))}
							</S.SectionMain>
						</S.SectionLineWrapper>
					))}
				</S.SectionLines>

				<S.WaveCanvas ref={canvasRef} />
			</S.SectionContainer>
		</S.Section>
	);
};

export default Wave;
