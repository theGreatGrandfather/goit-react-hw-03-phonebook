import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import { GlobalStyles } from './components/GlobalStyle';
import  App  from 'components/App';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    bgc: '#e7e7e7',
    success: 'green',
    warning: 'orange',
    error: 'red',
  },
  spacing: value => `${value * 4}px`,

};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
