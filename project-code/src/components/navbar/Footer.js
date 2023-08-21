import { Box, Container, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <footer id='footer'>
      <Box height='100%'>
        <Container maxWidth='md' sx={{ height: '100%' }}>
          <Divider sx={{ marginBottom: '0.5rem' }} />
          <Grid
            container
            // sx={{ backgroundColor: 'red' }}
            alignItems='center'
            justifyContent='center'
          >
            <Grid item>
              <Typography>&copy; 2023 Project: Code UIUC</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
