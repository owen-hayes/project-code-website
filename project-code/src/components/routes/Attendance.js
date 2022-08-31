import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';

export default function Attendance() {
  return (
    <Container>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mb={2} pt={2}>
        Attendance
      </Typography>
      <Grid container spacing={1} justifyContent='space-evenly' alignItems='center'>
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            endIcon={<LaunchIcon />}
            fullWidth
            href='https://google.com'
            target='_blank'
          >
            Complete Attendance
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
