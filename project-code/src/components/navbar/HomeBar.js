import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle';

import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import makeStyles from '@mui/styles/makeStyles';

import { Home } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';
import ListItemLink from './ListItemLink.js';
import UploadIcon from '@mui/icons-material/Upload';
import { Alert, Grid, List, Snackbar, Typography, useMediaQuery } from '@mui/material';

import { Box } from '@mui/system';
import { getAuth } from 'firebase/auth';
import PropTypes from 'prop-types';
import { UserContext } from '../context/user-context';
import LoginButton from './LoginButton';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  rightGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuButton: {
    marginLeft: '.5rem'
  },
  themeToggle: {
    marginRight: '.5rem'
  }
}));

function HomeBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const [snackbarOpen, setSnackbarOpen] = React.useState(false);

  const userContext = useContext(UserContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSnackbarOpen = () => {
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const screenLargerThanSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      {/* Top bar */}
      <AppBar position='sticky' color='secondary'>
        <Toolbar className={classes.toolbar}>
          {/* Logo */}
          <Link to='/' style={{ WebkitUserSelect: 'none' }}>
            <img src='./project-code.svg' alt='Project Code logo' height='60 px' style={{ marginTop: 10, marginBottom: 5 }} />
          </Link>

          <Box className={classes.rightGroup}>
            {/* When screen is above 'sm' breakpoint, keep theme toggle
                and login button outside menu */}
            {screenLargerThanSm && (
              <>
                <Box mr={2}>
                  <ThemeToggle darkState={props.darkState} handleThemeChange={props.handleThemeChange} />
                </Box>
                <LoginButton user={props.user} handleSnackbarOpen={handleSnackbarOpen} setUserRole={props.setUserRole} />
              </>
            )}

            {/* Hamburger button in top bar */}
            <IconButton edge='start' className={classes.menuButton} onClick={handleDrawerOpen} aria-label='menu' size='large'>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Snack bar for sign in/out messages */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity='success' sx={{ width: '100%' }}>
          {userContext.user ? (
            <>
              <Typography>Successfully signed in.</Typography>
              <Typography display='inline'>
                Welcome,
                <Typography fontWeight='bold' display='inline'>
                  {' '}
                  {getAuth().currentUser?.displayName}
                </Typography>
                !
              </Typography>
            </>
          ) : (
            <Typography>Successfully signed out.</Typography>
          )}
        </Alert>
      </Snackbar>

      {/* TODO: Add gradient thing when <Drawer> is open */}
      {/* Side bar  */}
      <Drawer className={classes.drawer} variant='persistent' anchor='right' open={open} classes={{ paper: classes.drawerPaper }}>
        <Box className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} size='large'>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        <Divider />

        {/* When screen is below 'sm' breakpoint, put theme toggle and login button in menu */}
        {!screenLargerThanSm && (
          <Grid container pt={2} justifyContent='space-evenly'>
            {/* Dark mode toggle */}
            <Grid item>
              <Box>
                <ThemeToggle darkState={props.darkState} handleThemeChange={props.handleThemeChange} />
              </Box>
            </Grid>

            {/* Login button */}
            <Grid item>
              <LoginButton user={props.user} handleSnackbarOpen={handleSnackbarOpen} setUserRole={props.setUserRole} />
            </Grid>
          </Grid>
        )}

        {/* Navigation list */}
        <List aria-label='main nav' onClick={handleDrawerClose}>
          <ListItemLink to='/' primary='Home' icon={<Home />} />

          <ListItemLink to='/calendar' primary='Calendar' icon={<CalendarMonthIcon />} />

          <ListItemLink to='/ongoing-projects' primary='Fall 2023 Projects' icon={<DeveloperBoardIcon />} />

          <ListItemLink to='/published-projects' primary='Published Projects' icon={<DeveloperBoardIcon />} />

          {/* Only show upload project option for admins */}
          {props.userRole === 'admin' && <ListItemLink to='/upload-project' primary='Upload Project' icon={<UploadIcon />} />}
        </List>
      </Drawer>
    </>
  );
}

HomeBar.propTypes = {
  user: PropTypes.object,
  darkState: PropTypes.bool,
  handleThemeChange: PropTypes.func,
  userRole: PropTypes.string,
  setUserRole: PropTypes.func
};

export default HomeBar;
