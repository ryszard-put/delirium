import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#333'
  },
  fonts: {
    primary: `'Oxygen', sans-serif`,
    secondary: `'Open Sans', sans-serif`
  }
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default AppTheme;
