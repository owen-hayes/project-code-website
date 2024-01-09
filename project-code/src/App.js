import React, { useEffect, useState } from 'react';
import { Container, createTheme, CssBaseline, responsiveFontSizes, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserContext } from './components/context/user-context';
import HomeBar from './components/navbar/HomeBar';
import Footer from './components/navbar/Footer';
import Attendance from './components/routes/Attendance';
import Calendar from './components/routes/Calendar';
import HomePage from './components/routes/HomePage';
import OldProjects from './components/routes/OldProjects';
import Projects from './components/routes/Projects';
import RequireAuth from './components/routes/RequireAuth';
import UploadProject from './components/routes/UploadProject';
import './font-import.css';
import './App.css';
import CurrentProjects from './components/routes/CurrentProjects';

function App() {
  // State for managing dark mode
  const [darkState, setDarkState] = useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);

  // Define theme colors based on dark mode state
  const mainPrimaryColor = darkState ? '#fc4e47' : '#fc4e47';
  const mainSecondaryColor = darkState ? '#121212' : '#f5f5f5';
  const mainBarColor = darkState ? '#4d4d4d' : '#ebebeb';

  // Create a MUI theme
  let darkTheme = createTheme({
    typography: {
      fontFamily: '"Source Sans 3", "Raleway", "Helvetica"',
      h1: {
        fontWeight: 'bold'
      },
      fontSize: 18
    },
    palette: {
      mode: darkState ? 'dark' : 'light',
      primary: { main: mainPrimaryColor },
      secondary: { main: mainSecondaryColor },
      barBg: { main: mainBarColor, black: '#333333', white: '#f5f5f5' }
      // background: { default: darkState?'#1e1e1e': '#ffffff' },
      // text: { secondary: '#121212' },
    }
  });

  // Listen for changes in the preferred color scheme
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = (event) => {
      setDarkState(event.matches);
    };

    mediaQuery.addEventListener('change', updateTheme);

    return () => {
      mediaQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  // Make the theme responsive to font sizes
  darkTheme = responsiveFontSizes(darkTheme);

  // Function to toggle dark mode
  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  // State for user and userRole
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();

  // Function to set user and save it to local storage
  function setAndSaveUser(user) {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(getAuth().currentUser));
  }

  // Listen for changes in the authentication state
  useEffect(() => {
    const authStateChangedCallback = (user) => {
      setUser(user);

      if (user) {
        getAuth()
          .currentUser.getIdTokenResult()
          .then((idTokenResult) => {
            // Give user role if they have "admin" claim
            if (idTokenResult.claims.admin) {
              setUserRole('admin');
            }
          });
      } else {
        setUserRole(undefined);
        localStorage.setItem('userRole', userRole);
      }
      localStorage.setItem('userRole', userRole);
    };

    const unsubscribe = getAuth().onAuthStateChanged(authStateChangedCallback);

    return () => {
      // Unsubscribe from the auth state changes when the component unmounts
      unsubscribe();
    };
  }, [userRole]);

  // Check if the user is logged in
  useEffect(() => {
    const localUserRole = localStorage.getItem('userRole');
    setUserRole(localUserRole);
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser !== 'undefined') {
      const foundUser = JSON.parse(loggedInUser);
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
                    <Route path='/published-projects' element={<Projects />} />
                    <Route path='/ongoing-projects' element={<CurrentProjects />} />
                    <Route path='/attendance' element={<Attendance />} />
                    <Route
                      path='/upload-project'
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
