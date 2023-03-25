import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'NanumSquare', sans-serif;
  }

  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
