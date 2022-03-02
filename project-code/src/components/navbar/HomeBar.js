import React from 'react';
import ThemeToggle from './ThemeToggle';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarIcon from '@material-ui/icons/Star';
import InfoIcon from '@material-ui/icons/Info';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    alignItems: 'center',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
}));

function HomeBar(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        style={{ backgroundColor: theme.palette.barBg.main, color: 'black' }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleDrawerOpen}
            color={theme.palette.secondary.dark}
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h1' className={classes.title}>
            <Grid container>
              <Grid
                item
                xs={12}
                style={{ textAlign: 'center', fontFamily: 'Raleway' }}
              >
                <Typography variant='h4'>
                  {/* <b>Project: Code</b> */}
                  <img src='./logo-cropped.png' alt='Project Code logo' height='75 px' />
                </Typography>
              </Grid>
            </Grid>
          </Typography>
          <ThemeToggle 
            darkState={props.darkState} 
            handleThemeChange={props.handleThemeChange} />
          <Button color='secondary' variant='contained'>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* TODO: Add gradient thing when <Drawer> is open */}
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {['Page 1', 'Page 2', 'Etc...'].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              window.location.href = 'https://google.com';
            }}
          >
            <ListItemIcon>
              <StarIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Divider />
        <List>
          <ListItem
            button
            onClick={() => {
              window.location.href = 'https://google.com';
            }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText primary='About' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

export default HomeBar;
