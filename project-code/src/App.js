import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import HomeBar from './components/HomeBar';
import HomePage from './components/HomePage.js';
import Projects from './components/Projects.js';

import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import './font-import.css';
import HomePage2 from './components/Projects.js';

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
  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: '"Raleway", "Helvetica"',
    },
    palette: {
      type: palletType,
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor },
      barBg: { main: mainBarColor },
    },
  });
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  return (
    <Router>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className='App'>
        <HomeBar
          handleThemeChange={handleThemeChange}
          darkState={darkState}
        ></HomeBar>
        <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/Projects' component={HomePage2} />
      </Switch>
      </div>
    </ThemeProvider>
    </Router>
  );
}

export default App;
