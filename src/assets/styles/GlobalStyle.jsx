import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* Resets */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  scroll-behavior: smooth;
}

main {
  max-width: 1400px;
  margin: 0 auto;
}

html {
  -webkit-tap-highlight-color: transparent;
}

a,
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
`;

export default GlobalStyle;
