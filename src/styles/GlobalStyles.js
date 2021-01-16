import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    color: white;
    font-family: 'CaviarDreams';
  }
`;

export const theme = {
  colors: {
    primary: "blue",
  },
};
