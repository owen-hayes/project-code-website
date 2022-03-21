import React, { useState } from 'react';

import './App.css';
import HomeBar from './components/navbar/HomeBar';

import { CssBaseline, createTheme, ThemeProvider, StyledEngineProvider, Switch } from '@mui/material';
import './font-import.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Expenses from './components/routes/expenses';
import Invoices from './components/routes/invoices';
import HomePage from './components/routes/HomePage';
import Projects from './components/routes/Projects';

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
          <Router>
            <HomeBar
              handleThemeChange={handleThemeChange}
              darkState={darkState}
            ></HomeBar>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/invoices' element={<Invoices />} />
            </Routes>
          </Router>
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
