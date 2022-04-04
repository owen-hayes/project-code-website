import React, { useState, useEffect } from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Grid, Paper, Container, Box, Typography } from '@mui/material'
import ReactRotatingText from 'react-rotating-text'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    // background: 'warning',
    color: 'primary'
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
}))

let thingsToRotate = ['<h1>Welcome To <b>Project: Code!</b></h1>']

export default function HomePage() {
  const classes = useStyles()
  const [showTyping, setShowTyping] = useState(false)
  const [showStatic, setShowStatic] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTyping(true)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={classes.root}>
      <Container maxWidth='xl'>
        <Grid justifyContent='center' container spacing={3}>
          <Grid item xs={12}></Grid>
          <Grid item container xs={12} justifyContent='center'>
            <Paper className={classes.paper}>
              <Typography variant='h5' className={classes.mark} style={{ fontFamily: 'Roboto Mono' }}>
                {showTyping ? (
                  <ReactRotatingText
                    items={thingsToRotate}
                    onTypingEnd={() => {
                      setShowStatic(true)
                      setShowTyping(false)
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
              Project: Code is a programming and Computer Science based RSO which allows students to pursue their interests in programming
              topics with group based projects. By introductory group meetings which address popular topics in Computer Science and possible
              interesting project ideas, members will be introduced to each other and start to find common interest groups, with which they
              can develop project ideas on their own. Then each group, led by an upperclassmen mentor or experienced member in that field
              that will help to advise and give feedback to the group on their work and ideas for the project, will begin work on their
              project, giving weekly updates to the RSO on any findings and to see development. Overall, the niche of this RSO is to allow
              introductory and intermediate programmers to find a place where they can feel comfortable learning programming and exploring
              their interests, while meeting many people who share common interests.
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
