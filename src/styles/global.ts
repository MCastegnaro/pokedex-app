import { createGlobalStyle } from "styled-components";

import Cursola from "../assets/cursola.svg";

export const GlobalStyle = createGlobalStyle`

:root {
  --primary-color: #F2B807;
  --secondary-color: #F28F16;
  --tertiary-color: #F5DB13;
  --danger-color: #D93E30;
  --light-color: #F6F7F9;
  --dark-color: #212121;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor: url(assets/cursola.svg), auto;
  cursor: url(${Cursola}), auto;
}

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}


`;
