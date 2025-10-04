import { css } from "styled-components";
import variables from "./variables";

export const frame = css`
	overflow: hidden;
	display: block;

	& > img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
`;

export const center = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const flex = (
	direction: string,
	align: string,
	justify: string,
	gap?: string | "0px",
) => `
	display: flex;
	align-items: ${align};
	justify-content: ${justify};
	flex-direction: ${direction};
	gap: ${gap};
`;

export const z = (name: "modals" | "header" | "element" | "content") => {
	const index = variables.z_indexes.findIndex((item) => item == name) + 1;
	if (!index) return;
	return variables.z_indexes.length - index;
};
