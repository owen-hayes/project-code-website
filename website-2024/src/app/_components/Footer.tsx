import { Box, Container, Divider, Grid, Typography } from "@mui/joy";
import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <Box height="100%" sx={{paddingTop: 5}}>
        <Container sx={{ height: "100%" }}>
          <Divider sx={{ marginBottom: "0.5rem" }} />
          <Grid container alignItems="center" justifyContent="center">
            <Grid>
              <Typography>&copy; 2024 Project: Code UIUC</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
