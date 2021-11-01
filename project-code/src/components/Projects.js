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

export default function Projectlist() {
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
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid justify='center' container spacing={8} columnSpacing={{ xs: 1, sm: 1, md: 2 , lg: 3, xl: 3}}>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img src='./Images/Covid-Data-Image(12-12-2020)(SAMPLE).png' height='310 px' />
              <Box fontWeight='fontWeightBold'>Visualization of Covid Data across Illinois Counties</Box>
              By Jimmy Berg, Gabe Grais, and Kai Loh
              <Box fontWeight='fontWeightBold'>
              <a id="Data-Vis-Heroku-1" title="Go to Heroku Container"
              href="https://projectcode-coviddata.herokuapp.com/"> Click here to view</a>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 2
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 3
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 4
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 5
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 6
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
