import { css } from "styled-components";
import variables from "./variables";

export const Container = css`
	max-width: 1324px;
	padding: 0 1.5rem;
	margin: 0 auto;

	@media (max-width: 1050px) {
		padding: 0px 2.4rem;
	}
`;

export const heading350 = css`
	font-size: 35rem;
	font-family: ${variables.fonts.heading};
	font-weight: 900;
	line-height: 100%;
	text-transform: uppercase;
	vertical-align: middle;
`;

export const heading144 = css`
	font-size: 14.4rem;
	font-family: ${variables.fonts.heading};
	font-weight: 400;
	line-height: 100%;
	text-transform: uppercase;
`;

export const heading120 = css`
	font-size: 12rem;
	font-family: ${variables.fonts.heading};
	font-weight: 400;
	line-height: 140px;
`;

export const heading92 = css`
	font-size: 9.2rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 100%;
`;

export const heading80 = css`
	font-size: 8rem;
	font-family: ${variables.fonts.heading};
	font-weight: 400;
	line-height: 100%;
	text-transform: uppercase;
`;

export const heading60Stroke = css`
	font-size: 6rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 100%;
	color: transparent;
	-webkit-text-stroke: 0.15rem ${variables.colors.neutral[300]};
`;

export const heading55 = css`
	font-size: 5.5rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 100%;
`;

export const heading37 = css`
	font-size: 3.7rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 27px;
	color: transparent;
	-webkit-text-stroke: 0.15rem ${variables.colors.primary[200]};
`;

export const heading30 = css`
	font-size: 3rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 27px;
`;

export const heading22 = css`
	font-size: 2.2rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 100%;
`;

export const heading20 = css`
	font-size: 2rem;
	font-family: ${variables.fonts.heading};
	font-weight: 400;
	line-height: 24px;
	letter-spacing: -1%;
`;

export const heading17 = css`
	font-size: 1.7rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 30px;
	letter-spacing: -3%;
	text-transform: uppercase;
`;

export const heading13 = css`
	font-size: 1.3rem;
	font-family: ${variables.fonts.heading};
	font-weight: 500;
	line-height: 12px;
	letter-spacing: 7%;
	text-transform: uppercase;
`;

export const paragraph22Light = css`
	font-size: 2.2rem;
	font-family: ${variables.fonts.primary};
	font-weight: 300;
	line-height: 30px;
`;

export const paragraph16Regular = css`
	font-size: 1.6rem;
	font-family: ${variables.fonts.primary};
	font-weight: 400;
	line-height: 19px;
`;
