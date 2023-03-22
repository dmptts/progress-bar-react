import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
  }
`;
