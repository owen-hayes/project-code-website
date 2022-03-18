import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Paper, Container, Box, Typography } from '@mui/material';
import ReactRotatingText from 'react-rotating-text';

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

let thingsToRotate = ['<h1>Welcome To <b>Project: Code!</b></h1>'];

export default function HomePage() {
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
        <Grid justifyContent='center' container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item container xs={12} justifyContent='center'>
            <Paper className={classes.paper}>
              <Typography
                variant='h5'
                className={classes.mark}
                style={{ fontFamily: 'Roboto Mono' }}
              >
                {showTyping ? (
                  <ReactRotatingText
                    items={thingsToRotate}
                    onTypingEnd={() => {
                      setShowStatic(true);
                      setShowTyping(false);
                    }}
                    typingInterval={50}
                  />
                ) : null}
                {showStatic ? (
                  <div>
                    <Typography variant='h2'>
                      Welcome to
                      <Box fontWeight='fontWeightBold'>Project: Code!</Box>
                    </Typography>
                  </div>
                ) : null}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}></Grid>
          <Grid item xs={0} sm={0} md={6} lg={6} xl={6}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id
              aliquam augue. Nunc eget tristique est. Curabitur maximus accumsan
              euismod. Proin vitae est metus. Proin vel aliquet tortor, quis
              luctus nisi. Proin elementum justo at eros volutpat suscipit.
              Curabitur in laoreet erat. Sed sapien ipsum, commodo vel fringilla
              et, auctor vel mi. Phasellus efficitur tristique velit, euismod
              dictum diam venenatis ut. Maecenas sit amet massa pulvinar ipsum
              ullamcorper hendrerit vel porttitor turpis. Morbi nec ligula eget
              velit feugiat maximus. Sed ut est tellus. Vestibulum lacinia quam
              nec condimentum gravida. Orci varius natoque penatibus et magnis
              dis parturient montes, nascetur ridiculus mus. Suspendisse at ex
              tortor. Aliquam sollicitudin urna ligula, sed congue dolor rhoncus
              ac.
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
