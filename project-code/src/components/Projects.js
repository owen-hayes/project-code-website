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

export default function HomePage2() {
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
          <Grid item xs={12} sm={12} md={6} lg={4} xl={6}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Slot 1
            </Paper>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={6}>
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
