import { Breakpoints } from "primitives";
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
* {
    box-sizing: border-box;
  }

  html, body {
    font-size: 10px;
    direction: rtl;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  button svg {
    @media (min-width: ${Breakpoints.sm}) {
    & {
      scale: 1.5;
    }
  }
  }
`;
