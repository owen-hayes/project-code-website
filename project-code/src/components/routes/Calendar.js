import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

export default function Calendar() {
  const [frameLoaded, setFrameLoaded] = useState(false);

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mb={2}>
        Calendar
      </Typography>

      <Grid
        container
        spacing={1}
        justifyContent='center'
        alignItems='stretch'
        mb={2}
      >
        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            startIcon={<AppleIcon />}
            fullWidth
            href='webcal://calendar.google.com/calendar/ical/h9el7b7k8413uo9m49f1h7brpc%40group.calendar.google.com/public/basic.ics'
            target='_blank'
            aria-label='Add to Apple Calendar'
            sx={{ height: '100%', textAlign: 'center' }}
          >
            Add to Apple Calendar
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Button
            variant='contained'
            color='primary'
            size='large'
            startIcon={<GoogleIcon />}
            fullWidth
            href='https://calendar.google.com/calendar/render?cid=h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com'
            target='_blank'
            aria-label='Add to Google Calendar'
            sx={{ height: '100%', textAlign: 'center' }}
          >
            Add to Google Calendar
          </Button>
        </Grid>
      </Grid>

      {!frameLoaded && (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <CircularProgress size={80} />
        </Box>
      )}

      <iframe
        src='https://calendar.google.com/calendar/embed?src=h9el7b7k8413uo9m49f1h7brpc%40group.calendar.google.com&ctz=America%2FChicago&title=Project%3A%20Code&bgcolor=%23f5f5f5'
        width='100%'
        height='600'
        style={{ border: 'none' }}
        display={frameLoaded ? 'block' : 'none'}
        onLoad={() => setFrameLoaded(true)}
      />
    </Container>
  );
}
