import React from 'react'
import ThemeToggle from './ThemeToggle'

import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import makeStyles from '@mui/styles/makeStyles'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'

import Divider from '@mui/material/Divider'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/styles'
import ListItemLink from './ListItemLink'
import { Home, MonetizationOn } from '@mui/icons-material'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'
import { List } from '@mui/material'

const drawerWidth = 240

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
}))

function HomeBar(props) {
  const classes = useStyles()
  const theme = useTheme()

  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: theme.palette.barBg.main, color: 'primary' }}>
        <Toolbar className={classes.toolbar}>
          <Link to='/'>
            <img src='./logo-cropped.png' alt='Project Code logo' height='75 px' />
          </Link>

          <div className={classes.rightGroup}>
            <ThemeToggle darkState={props.darkState} handleThemeChange={props.handleThemeChange} />

            <Button color='secondary' variant='contained'>
              Login
            </Button>

            <IconButton
              edge='start'
              className={classes.menuButton}
              onClick={handleDrawerOpen}
              color='secondary'
              aria-label='menu'
              size='large'
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
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
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose} size='large'>
            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>

        <Divider />

        <List aria-label='main nav'>
          <ListItemLink to='/' primary='Home' icon={<Home />} />
          <ListItemLink to='/projects' primary='Projects' icon={<DeveloperBoardIcon />} />
          <ListItemLink to='/expenses' primary='Expenses' icon={<MonetizationOn />} />
        </List>
      </Drawer>
    </div>
  )
}

export default HomeBar
