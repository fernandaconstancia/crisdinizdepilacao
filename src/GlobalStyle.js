import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    font-family: "Ubuntu", Helvetica, Sans-Serif;
    list-style: none;
    text-decoration: none;
  }

  html, body {
    background: var(--color-8);
    height: 100vh;
  }

  :root {
    --color-1: #6B00BA;
    --color-2: #40006E;
    --color-3: #9F19FF;
    --color-4: #687028;
    --color-5: #00D494;
    --color-6: #C4D164;
    --color-7: #ffffff; 
    --color-8: #fafafa;
    --color-9: #ADADAD;
    --color-error: #e34034;

  }
`;
