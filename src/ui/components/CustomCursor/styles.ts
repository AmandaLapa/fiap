import styled, { css } from "styled-components";
import variables from "@/app/styles/variables";

import logo from "@/assets/brand/fiap-logo.svg";
import { center, z } from "@/app/styles/mixins";
import { CursorSize } from "./index";

export const Cursor = styled.div<{ $isActive: boolean; $size: CursorSize }>`
	position: fixed;
	background-color: ${variables.colors.primary[100]};
	border-radius: 50%;
	${center}
	pointer-events: none;
	z-index: ${z("element")};
	will-change: transform;
	transform-origin: center center;
	transform: scale(${({ $isActive }) => ($isActive ? 1 : 0.2)});
	transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);

	${({ $size }) =>
		$size === "large"
			? css`
					width: 10rem;
					height: 10rem;

					&::after {
						content: "";
						display: block;
						background: url(${logo.src}) no-repeat center/cover;
						width: 7rem;
						height: 1.8rem;
						filter: brightness(0) invert(1);
					}
			  `
			: css`
					width: 2rem;
					height: 2rem;
			  `}

	@media (max-width: 999px) {
		display: none;
	}
`;
