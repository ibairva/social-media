import { createGlobalStyle } from "styled-components";
import "../assets/css/font.css";

const GlobalStyle = createGlobalStyle`
	html {
		color: #343945;
		font-variant-ligatures: none;
		-webkit-font-variant-ligatures: none;
		text-rendering: optimizeLegibility;
		-moz-osx-font-smoothing: grayscale;
		font-smoothing: antialiased;
		-webkit-font-smoothing: antialiased;
		text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
	}
	body {
		overflow-y: scroll;
		overflow-x: hidden;
		font-family: "Gotham Pro";
		
		scroll-behavior: smooth;
	}
	span{
		font-family: "Gotham Pro";
	}
	a{
		font-family: "Gotham Pro";
	}
`;

export default GlobalStyle;
