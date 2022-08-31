import React, { useEffect, useState } from 'react';

import './App.css';
import HomeBar from './components/navbar/HomeBar';

import { Container, createTheme, CssBaseline, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './components/context/user-context';
import Footer from './components/navbar/Footer';
import Attendance from './components/routes/Attendance';
import Calendar from './components/routes/Calendar';
import HomePage from './components/routes/HomePage';
import OldProjects from './components/routes/OldProjects';
import Projects from './components/routes/Projects';
import RequireAuth from './components/routes/RequireAuth';
import UploadProject from './components/routes/UploadProject';
import './font-import.css';

function App() {
  const [darkState, setDarkState] = useState(false);

  const palletType = darkState ? 'dark' : 'light';
  // const mainPrimaryColor = darkState ? '#262626' : '#fc4e47';
  const mainPrimaryColor = darkState ? '#fc4e47' : '#fc4e47';
  // const mainSecondaryColor = darkState ? '#fc4e47' : '#fc4e47';
  const mainSecondaryColor = darkState ? '#121212' : '#f5f5f5';
  const mainBarColor = darkState ? '#4d4d4d' : '#ebebeb';
  let darkTheme = createTheme({
    typography: {
      fontFamily: '"Raleway", "Helvetica"',
      h1: {
        fontWeight: 'bold'
      }
    },
    palette: {
      mode: palletType,
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor },
      barBg: { main: mainBarColor, black: '#333333', white: '#f5f5f5' }
    }
  });
  darkTheme = responsiveFontSizes(darkTheme);
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();

  function setAndSaveUser(user) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(getAuth().currentUser));
  }

  getAuth().onAuthStateChanged((user) => {
    // console.log('auth state changed');
    setUser(user);

    if (user) {
      getAuth()
        .currentUser.getIdTokenResult()
        .then((idTokenResult) => {
          // console.log(idTokenResult.claims);
          // Confirm the user is an Admin.
          if (idTokenResult.claims.admin) {
            // Show admin UI.
            // showAdminUI();
            // console.log('admin');
            setUserRole('admin');
          } else {
            // Show regular user UI.
            // showRegularUI();
            // console.log('not admin');
          }
        });
      // .catch((error) => {
      //   console.log(error);
      // });
    } else {
      setUserRole(undefined);
      localStorage.setItem('userRole', userRole);
      // console.log('here');
    }
    localStorage.setItem('userRole', userRole);
    // console.log(`user role: ${userRole}`);
  });

  // Check if user is logged in
  useEffect(() => {
    const localUserRole = localStorage.getItem('userRole');
    setUserRole(localUserRole);
    // console.log(`i'm here: ${localUserRole}`);
    const loggedInUser = localStorage.getItem('user');
    // console.log('loggedInUser');
    // console.log(loggedInUser);
    // console.log(getAuth().currentUser);
    if (loggedInUser !== 'undefined') {
      const foundUser = JSON.parse(loggedInUser);
      // getAuth()
      //   .updateCurrentUser(foundUser)
      //   .then(() => {
      //     // getAuth()
      //     //   .currentUser.getIdTokenResult()
      //     //   .then((idTokenResult) => {
      //     //     // Confirm the user is an Admin.
      //     //     if (idTokenResult.claims.admin) {
      //     //       // Show admin UI.
      //     //       // showAdminUI();
      //     //       setUserRole('admin');
      //     //     } else {
      //     //       // Show regular user UI.
      //     //       // showRegularUI();
      //     //     }
      //     //   })
      //     //   .catch((error) => {
      //     //     console.log(error);
      //     //   });
      //     setUser(foundUser);
      // });
      // getAuth() // aldkfskdfjskdjf osdoidfsoid oieurqioweurqupweoiruqpwoieurqwopieruqpwe
      //   .updateCurrentUser(foundUser);
      setUser(foundUser);
    }
  }, []);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <UserContext.Provider value={{ user: user, setUser: setAndSaveUser }}>
          <CssBaseline />
          <Router>
            <div id='page-container'>
              <HomeBar
                handleThemeChange={handleThemeChange}
                darkState={darkState}
                userRole={userRole}
                user={user}
                setUserRole={setUserRole}
              />
              <div id='content-wrap'>
                <Container sx={{ pb: 2 }}>
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/oldprojects' element={<OldProjects />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/attendance' element={<Attendance />} />
                    <Route
                      path='/uploadproject'
                      element={<RequireAuth userRole={userRole} requiredRole='admin' element={<UploadProject />} />}
                    />
                  </Routes>
                </Container>
              </div>
              <Footer />
            </div>
          </Router>
        </UserContext.Provider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
