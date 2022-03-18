import React, { useState } from 'react';

import { adaptV4Theme } from '@mui/material/styles';

import './App.css';
import HomeBar from './components/navbar/HomeBar';
import HomePage from './components/HomePage.js';

import { CssBaseline, createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
import './font-import.css';

// let lightTheme = createMuiTheme({
//   typography: {
//     fontFamily: '"Raleway", "Helvetica"',
//   },
//   palette: {
//     primary: {
//       main: '#fc4e47',
//     },
//     secondary: {
//       main: '#ffa726',
//     },
//     test: {
//       main: '#ff00c3'
//     }
//   },
// });
// lightTheme = responsiveFontSizes(lightTheme);

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? 'dark' : 'light';
  const mainPrimaryColor = darkState ? '#262626' : '#c4c4c4';
  const mainSecondaryColor = darkState ? '#fc4e47' : '#fc4e47';
  const mainBarColor = darkState ? '#4d4d4d' : '#ebebeb';
  const darkTheme = createTheme({
    typography: {
      fontFamily: '"Raleway", "Helvetica"',
    },
    palette: {
      mode: palletType,
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor },
      barBg: { main: mainBarColor, black: '#333333', white: '#f5f5f5' },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className='App'>
          <HomeBar
            handleThemeChange={handleThemeChange}
            darkState={darkState}
          ></HomeBar>
          <HomePage></HomePage>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
