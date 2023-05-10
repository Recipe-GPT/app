import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
    padding: 0;
    margin: 0;
  }
  
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
  }

  &:link, &:visited{
    color: unset;
  }

  body{
    margin: 0;
  }

  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
