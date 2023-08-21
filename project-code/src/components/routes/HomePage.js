/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Container, Box, Typography, Link, Button } from '@mui/material';
import ReactRotatingText from 'react-rotating-text';
import { Link as RouterLink } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import AssignmentIcon from '@mui/icons-material/Assignment';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center'
    // background: 'warning',
    // color: 'primary',
  },
  paperContainer: {
    backgroundImage: `url(${'main.jpeg'})`
  },
  bigText: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'transparent',
    color: 'primary'
  },
  chakra: {
    fontFamily: 'Chakra Petch'
  },
  mark: {
    // backgroundColor: 'white',
  },
  react_text: {
    display: 'none'
  },
  leftAlign: {
    textAlign: 'left'
  }
}));

let thingsToRotate = ['<h1>Welcome To <b>Project: Code!</b></h1>            '];

export default function HomePage() {
  const classes = useStyles();
  const [showTyping, setShowTyping] = useState(false);
  const [showStatic, setShowStatic] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div className={classes.root}>
    <Container maxWidth='md'>
      <Box textAlign='center' pt={3} pb={3}>
        {showTyping && (
          <Typography variant='h5' className={classes.mark} sx={{ fontFamily: 'Roboto Mono' }}>
            <ReactRotatingText
              items={thingsToRotate}
              onTypingEnd={() => {
                setShowStatic(true);
                setShowTyping(false);
              }}
              typingInterval={50}
            />
            <Box height='6rem'></Box>
          </Typography>
        )}
        {showStatic && (
          <Typography variant='h2'>
            Welcome to
            <Box sx={{ fontWeight: 'bold' }}>Project: Code!</Box>
          </Typography>
        )}
      </Box>
      <Typography variant='h5' fontWeight='bold' noWrap>
        What is{' '}
        <Box display='inline' fontStyle='italic'>
          Project: Code
        </Box>
        ?
      </Typography>
      {/* <Typography paragraph>
        We are a programming and Computer Science based RSO which allows
        students to pursue their interests in programming topics with group
        based projects. By introductory group meetings which address popular
        topics in Computer Science and possible interesting project ideas,
        members will be introduced to each other and start to find common
        interest groups, with which they can develop project ideas on their own.
        Then each group, led by an upperclassmen mentor or experienced member in
        that field that will help to advise and give feedback to the group on
        their work and ideas for the project, will begin work on their project,
        giving weekly updates to the RSO on any findings and to see development.
        Overall, the niche of this RSO is to allow introductory and intermediate
        programmers to find a place where they can feel comfortable learning
        programming and exploring their interests, while meeting many people who
        share common interests.
      </Typography> */}
      <Typography paragraph>
        We are a registered student organization (RSO) at the University of Illinois at Urbana-Champaign that allows programmers of all
        skill levels to learn and explore with like-minded peers through group-based programming projects!
      </Typography>

      <Typography variant='h5' fontWeight='bold'>
        What kinds of projects can I work on?
      </Typography>
      <Typography paragraph>
        Each semester, we offer a variety of projects touching on areas like web development, data visualization, hardware engineering,
        machine learning, game development, and more!{' '}
        <Link to='/projects' component={RouterLink}>
          Check out some of our published projects here.
        </Link>
      </Typography>

      <Typography variant='h5' fontWeight='bold'>
        Can I lead a project?
      </Typography>
      <Typography paragraph>
        If you're looking for an opportunity to lead a project you're passionate about, we would love to consider you for a Project Manager
        (PM) role! PM applications open near the end of each semester.{' '}
        <Link href='https://forms.gle/WsWA5c6P9b2FBHy6A' target='_blank'>
          Apply here if you're interested in being a PM for Fall 2023!
        </Link>
      </Typography>

      <Typography variant='h5' fontWeight='bold'>
        How can I get involved?
      </Typography>
      <Typography paragraph>
        Attend our meetings!{' '}
        <Link to='calendar' component={RouterLink}>
          Take a look at out our calendar
        </Link>{' '}
        to view our upcoming general meetings and workshops. We begin to solidify project groups within the first few weeks of the semester,
        so come to as many of our general meetings as possible. Also, be sure to join our Discord, sign up for our mailing list, and follow
        us on Instagram!
      </Typography>
      <Grid container spacing={1} justifyContent='space-evenly' alignItems='center'>
        <Grid item xs={12}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            startIcon={<AssignmentIcon />}
            fullWidth
            href='https://forms.gle/JLdA4oW1X7RDWn9N8'
            target='_blank'
            aria-label='Fall 2023 interest form'
          >
            Fall 2023 Interest Form
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            startIcon={<FaDiscord />}
            fullWidth
            href='https://discord.gg/yCPDb8YRRp'
            target='_blank'
          >
            Join our Discord
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {/* <Button
            variant='outlined'
            color='primary'
            size='large'
            startIcon={<MailIcon />}
            fullWidth
            href='https://tinyurl.com/ProjectCodeMailing'
            target='_blank'
          >
            Join our mailing list
          </Button> */}
          <Button
            variant='outlined'
            color='primary'
            size='large'
            startIcon={<MailIcon />}
            fullWidth
            href='https://dashboard.mailerlite.com/forms/393887/92302177630946577/share'
            target='_blank'
          >
            Join our mailing list
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant='outlined'
            color='primary'
            size='large'
            startIcon={<InstagramIcon />}
            fullWidth
            href='https://www.instagram.com/project.code.uiuc/'
            target='_blank'
            aria-label='Follow us on Instagram'
          >
            Follow us on Instagram
          </Button>
        </Grid>
      </Grid>
      <Grid justifyContent='center' container spacing={3} mt='5'>
        {/* <Grid item xs={12}></Grid> */}
        {/* <Grid item container xs={12} justifyContent='center'> */}
        {/* <Paper className={classes.paper}> */}

        {/* </Grid> */}
        {/* <Grid item xs={12}></Grid> */}
        {/* <Grid item xs={0} sm={0} md={6} lg={6} xl={6}> */}
        {/* <Paper sx={{ textAlign: 'center' }}> */}
        {/* <Box p={2}> */}
        {/* <img src='Images/Meeting.JPG' width='95%' /> */}
        {/* </Box> */}
        {/* </Paper> */}
        {/* </Grid> */}
        <Grid item xs={12} sm={12} md={10} lg={8} xl={6}>
          {/* <Paper className={`${classes.paper} ${classes.leftAlign}`}> */}

          {/* </Paper> */}
        </Grid>
      </Grid>
    </Container>
    // </div>
  );
}
