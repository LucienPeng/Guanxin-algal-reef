import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/all.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import store from './store/index';
import { Provider } from 'react-redux';


let themeOption = createTheme({
  palette: {
    primary: {
      main: '#64C8B9', // Primary / Green / Main
      light: '#E0F4F1', // Primary / Green / Light
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#66A8C3', // Secondary / Blue / Main
      dark: '#52869C', // Secondary / Blue / Dark
      light: '#EDA822', // Secondary / Orange / Main (Use light as the second secondary main)
      contrastText: '#F2F2F2',
    },
    action: {
      disabledBackground: '#D3D4D5',
      disabled: '#7C7F82',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={themeOption}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
