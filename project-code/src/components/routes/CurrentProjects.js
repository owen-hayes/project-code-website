import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { currentProjectsData } from '../../CurrentProjectsData';
import ProjectCard from './ProjectCard';

export default function CurrentProjects() {
  const [projects] = useState(currentProjectsData);

  // useEffect(() => {
  //   const db = getDatabase();
  //   const projectsRef = ref(db, 'projects');
  //   onValue(projectsRef, (snapshot) => {
  //     const projectsData = snapshot.val();

  //     // If there are no projects, set projects to empty array
  //     if (!projectsData) {
  //       setProjects([]);
  //       return;
  //     }

  //     // Use minus sign to sort dates in descending order (newest to oldest)
  //     let projectsDataKeys = Object.keys(projectsData);
  //     projectsDataKeys.sort((a, b) => -sortDates(projectsData[a], projectsData[b]));

  //     const newProjects = projectsDataKeys.map((key) => {
  //       return { ...projectsData[key], id: key };
  //     });

  //     setProjects(newProjects);
  //   });
  // }, []);

  /**
   * Sort dates from oldest to newest
   * @param {*} a
   * @param {*} b
   * @returns TODO: finish
   */
  function sortDates(a, b) {
    // Make undefined/empty published dates come before non-empty dates
    if ((a.publishedDate === undefined || a.publishedDate === '') && (b.publishedDate === undefined || b.publishedDate === '')) {
      return 0;
    } else if (a.publishedDate === undefined || a.publishedDate === '') {
      return -1;
    } else if (b.publishedDate === undefined || b.publishedDate === '') {
      return 1;
    } else {
      const aDate = new Date(a.publishedDate);
      const bDate = new Date(b.publishedDate);
      if (aDate < bDate) {
        return 1;
      } else if (aDate > bDate) {
        return -1;
      }
    }
    return 0;
  }

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mb={2}>
        Fall 2023 Projects
      </Typography>
      {projects.length === 0 && (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <CircularProgress size={80} />
        </Box>
      )}
      <Grid container spacing={2} alignItems='stretch'>
        {/* Map all projects to a grid item with a ProjectCard inside */}
        {projects &&
          Object.keys(projects)
            .sort((a, b) => sortDates(projects[a], projects[b]))
            .map((key, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <ProjectCard {...projects[key]} />
              </Grid>
            ))}
        {/* <Grid item xs={12} sm={6} md={4}>
          <ProjectCard
            title='Test Project'
            // imageURL='asdf'
            contributors={['asdf', 'l', 'skaljfs  oiw']}
            // projectLink={'undefineasldd'}
            description='asodm kdjfaoksdjfwaie ofaisjfl'
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardMedia
              component='img'
              image='./Images/Covid-Data-Image(12-12-2020)(SAMPLE).png'
              alt='Covid-19 hotspots around Illinois'
            />
            <CardContent>
              <Typography variant='h4' fontWeight='bold'>
                Visualization of Covid Data across Illinois Counties
              </Typography>
              <Typography variant='h6'>
                Jimmy Berg, Gabe Grais, and Kai Loh
              </Typography>
              <Typography fontStyle='italic'>Led by Manager</Typography>
              <Typography paragraph mt={2}>
                A flask application that takes in a date and displays covid data
                across Illinois Counties at that date. Clicking on a county
                gives a graph of confirmed covid cases over the year.
              </Typography>
              <Typography fontStyle='italic'>Published on 7/20/21</Typography>
            </CardContent>
            <CardActions>
              <Button
                // sx={{ width: '50%' }}
                endIcon={<OpenInNewIcon />}
                href='https://projectcode-coviddata.herokuapp.com/'
                target='_blank'
                variant='outlined'
              >
                View Project
              </Button>
              <Button
                // sx={{ width: '50%' }}
                endIcon={<GitHubIcon />}
                href='https://projectcode-coviddata.herokuapp.com/'
                target='_blank'
                variant='outlined'
              >
                Source Code
              </Button>
            </CardActions>
          </Card>
        </Grid> */}
        {/* <Grid item xs={12} md={4}>
          <Paper
            sx={{ p: 2 }}
            // className={`${classes.paper} ${classes.leftAlign}`}
            // sx={{ bgcolor: 'red' }}
          >
            <img
              src='./Images/Covid-Data-Image(12-12-2020)(SAMPLE).png'
              width='100%'
              alt='Heatmap of Covid Infections in Illinois'
            />
            <Typography variant='h5' fontWeight='bold'>
              Visualization of Covid Data across Illinois Counties
            </Typography>
            <Typography>Jimmy Berg, Gabe Grais, and Kai Loh</Typography>
            <Typography fontStyle='italic'>Published on 7/20/21</Typography>
            <Typography>
              {' '}
              A flask application that takes in a date and displays covid data
              across Illinois Counties at that date. Clicking on a county gives
              a graph of confirmed covid cases over the year.
            </Typography>
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
        </Grid> */}
      </Grid>
    </Container>
  );
}
