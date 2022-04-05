import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container, Box } from '@material-ui/core';

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

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid
          justify='center'
          container
          spacing={8}
          columnSpacing={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 3 }}
        >
          <Grid item xs={12}></Grid>
          <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
            <Paper className={`${classes.paper} ${classes.leftAlign}`}>
              <img
                src='./Images/Covid-Data-Image(12-12-2020)(SAMPLE).png'
                height='310 px'
                alt='Heatmap of Covid Infections in Illinois'
              />
              <Box fontWeight='fontWeightBold'>
                Visualization of Covid Data across Illinois Counties
              </Box>
              By Jimmy Berg, Gabe Grais, and Kai Loh
              <Box fontStyle='italic'> Published on 7/20/21</Box>
              <Box>
                {' '}
                A flask application that takes in a date and displays covid data
                across Illinois Counties at that date. Clicking on a county
                gives a graph of cofirmed covid cases over the year.
              </Box>
              <Box fontWeight='fontWeightBold'>
                <a
                  id='Data-Vis-Heroku-1'
                  title='Go to Heroku Container'
                  href='https://projectcode-coviddata.herokuapp.com/'
                >
                  {' '}
                  Click here to view
                </a>
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
