import React from 'react';
import ThemeToggle from './ThemeToggle';

import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import makeStyles from '@mui/styles/makeStyles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid';

import Divider from '@mui/material/Divider';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarIcon from '@mui/icons-material/Star';
import InfoIcon from '@mui/icons-material/Info';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { useTheme } from '@mui/styles';

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
        style={{ backgroundColor: theme.palette.barBg.main, color: 'primary' }}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            onClick={handleDrawerOpen}
            color='secondary'
            aria-label='menu'
            size="large">
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
          <IconButton onClick={handleDrawerClose} size="large">
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
