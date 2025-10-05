import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`
	* {
		scrollbar-width: thin;
		scrollbar-color: ${variables.colors.primary[100]} ${variables.colors.neutral[400]};
		list-style: none;
		text-decoration: none;
		margin: 0;
		padding: 0;
		text-align: left;
		border: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		font-weight: normal;
		font-size: 1.6rem;
		color: ${variables.colors.neutral[100]};
	}

	button {
		background: transparent;
		cursor: pointer;
	}

	img {
		display: block;
		max-width: 100%;
	}

	html,
	body {
		overflow-x: hidden;
		font-family: var(--roboto), sans-serif;
		background-color: ${variables.colors.neutral[500]};
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
		
		@media (max-width: 1250px) {
			font-size: 55%;
		}
		@media (max-width: 600px) {
			font-size: 62.5%;
		}
	}

	input,
	button,
	textarea {
		appearance: none;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: var(--montserrat), sans-serif;
	}

	::-webkit-scrollbar {
		width: 1rem;
	}

	::-webkit-scrollbar-track {
		background: ${variables.colors.neutral[400]};
	}

	::-webkit-scrollbar-thumb {
		background: ${variables.colors.primary[100]};

	}

	::-webkit-scrollbar-corner {
		background: ${variables.colors.neutral[400]};
	}
`;
