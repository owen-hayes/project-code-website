import React, { useContext } from 'react';
import ThemeToggle from './ThemeToggle';

import Drawer from '@mui/material/Drawer';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import ListItemLink from './ListItemLink.js';
import { Home } from '@mui/icons-material';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import UploadIcon from '@mui/icons-material/Upload';
import { Alert, Grid, List, Snackbar, Typography, useMediaQuery } from '@mui/material';

import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { UserContext } from '../context/user-context';
import LoginButton from './LoginButton';
import { getAuth } from 'firebase/auth';

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

  const aboveSm = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    // <div className={classes.root}>
    <>
      <AppBar position='sticky' color='secondary'>
        <Toolbar className={classes.toolbar}>
          {/* Logo */}
          <Link to='/'>
            <img src='./project-code.svg' alt='Project Code logo' height='60 px' style={{ marginTop: 10, marginBottom: 5 }} />
          </Link>

          {/* <Typography>{props.userRole ? props.userRole : 'nothing'}</Typography> */}
          <Box className={classes.rightGroup}>
            {/* When screen is above 'sm' breakpoint, keep theme toggle
                and login button outside menu */}
            {aboveSm && (
              <>
                <Box mr={2}>
                  <ThemeToggle darkState={props.darkState} handleThemeChange={props.handleThemeChange} />
                </Box>
                <LoginButton user={props.user} handleSnackbarOpen={handleSnackbarOpen} setUserRole={props.setUserRole} />
              </>
            )}
            <IconButton edge='start' className={classes.menuButton} onClick={handleDrawerOpen} aria-label='menu' size='large'>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
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
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='right'
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <Box className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} size='large'>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        <Divider />

        {/* When screen is below 'sm' breakpoint, put theme toggle and login button in menu */}
        {!aboveSm && (
          <Grid container pt={2} justifyContent='space-evenly'>
            <Grid item>
              <Box>
                <ThemeToggle darkState={props.darkState} handleThemeChange={props.handleThemeChange} />
              </Box>
            </Grid>

            <Grid item>
              <LoginButton user={props.user} handleSnackbarOpen={handleSnackbarOpen} setUserRole={props.setUserRole} />
            </Grid>
          </Grid>
        )}
        <List aria-label='main nav' onClick={handleDrawerClose}>
          <ListItemLink to='/' primary='Home' icon={<Home />} />
          <ListItemLink to='/calendar' primary='Calendar' icon={<CalendarMonthIcon />} />
          <ListItemLink to='/projects' primary='Projects Gallery' icon={<DeveloperBoardIcon />} />
          {props.userRole === 'admin' && <ListItemLink to='/uploadproject' primary='Upload Project' icon={<UploadIcon />} />}
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
