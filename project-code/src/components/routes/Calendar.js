import { Box, CircularProgress, Container, Typography } from '@mui/material';
import React, { useState } from 'react';

export default function Calendar() {
  const [loaded, setLoaded] = useState(false);

  return (
    <Container sx={{ pt: 2 }}>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mb={2}>
        Calendar
      </Typography>
      {!loaded && (
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
          <CircularProgress size={80} />
        </Box>
      )}
      <iframe
        src='https://calendar.google.com/calendar/embed?src=h9el7b7k8413uo9m49f1h7brpc%40group.calendar.google.com&ctz=America%2FChicago&title=Project%3A%20Code&bgcolor=%23f5f5f5'
        width='100%'
        height='600'
        frameBorder={0}
        scrolling='no'
        display={loaded ? 'block' : 'none'}
        onLoad={() => {
          setLoaded(true);
        }}
      ></iframe>
    </Container>
  );
}
