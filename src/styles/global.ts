import styled, { createGlobalStyle } from "styled-components";

import Cursola from "../assets/cursola.svg";
import Pokebola from "../assets/pokebola.svg";

export const GlobalStyle = createGlobalStyle`

:root {
  --primary-color: #F2B807;
  --secondary-color: #F28F16;
  --tertiary-color: #F5DB13;
  --danger-color: #D93E30;
  --light-color: #F6F7F9;
  --dark-color: #212121;

  --h1-size: 72px; 
  --h2-size: 64px; 
  --h3-size: 36px; 
  --h4-size: 24px;
  --h5-size: 18px;
  --h6-size: 12px;
  --paragraph-size: 16px;


  --device-mobile: 360px;
  --device-tablet: 744px;
  --device-desktop: 1280px;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  cursor: url(${Cursola}), auto;
}

  button{
    cursor: url(${Pokebola}), auto;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  height: 100vh;
`;

export const Content = styled.main`
  display: inherit;
  flex: 1;
  justify-content: center;
`;
