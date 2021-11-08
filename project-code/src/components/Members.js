import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, Box, Typography } from '@material-ui/core';
import Image from 'material-ui-image';
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      // background: 'warning',
      color: 'primary',
    },
    paperContainer: {
      backgroundImage: `url(${'main.jpeg'})`,
    },
    bigText: {
      padding: theme.spacing(2),
      textAlign: 'center',
      background: 'transparent',
      color: 'primary',
    },
    chakra: {
      fontFamily: 'Chakra Petch',
    },
    mark: {
      // backgroundColor: 'white',
    },
    react_text: {
      display: 'none',
    },
    leftAlign: {
      textAlign: 'left',
    },
  }));

  export default function Memberlist() {
    const classes = useStyles();
    const [showTyping, setShowTyping] = useState(false);
    const [showStatic, setShowStatic] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowTyping(true);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    
    
    return (
      // add drop down menu for semester
      <div className={classes.root}>
        <Container maxWidth='xl'>
          <Grid justify='center' container spacing={10} columnSpacing={{ xs: 1, sm: 1, md: 2 , lg: 2, xl: 2}}>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
          <Typography variant='h3'>
          <Box fontWeight='fontWeightBold'>Executives</Box>
          </Typography>
          </Grid>
          <Grid item lg={1}></Grid>
            <Grid item xs={10} sm={10} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
          <Typography variant='h3'>
          <Box fontWeight='fontWeightBold'>Project Leads</Box>
          </Typography>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={11}>
          <Typography variant='h3'>
          <Box fontWeight='fontWeightBold'>Members</Box>
          </Typography>
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item lg={1}></Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
              <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Default-avatar.png' height='191 px' />
                <Box fontFamily='Verdana'> Name</Box>
                <Box fontFamily='Verdana'> Email</Box>
                <Box fontFamily='Verdana'> Year and Major</Box>
                <Box fontFamily='Verdana'> Fun Fact!</Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
  