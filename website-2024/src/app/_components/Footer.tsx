import { Box, Container, Divider, Grid, Typography } from "@mui/joy";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import IconButton from "@mui/joy/IconButton";

// import React from "react";

export default function Footer() {
  return (
    <footer id="footer">
      <Box height="100%" pt={5}>
        <Container sx={{ height: "100%" }}>
          <Divider sx={{ mb: "0.5rem" }} />
          
          <Grid
            container
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Grid xs={12} display='flex' alignItems='center' justifyContent='center'>
              <IconButton
                component="a"
                href="https://discord.gg/yCPDb8YRRp"
                target="_blank"
                size="md"
              >
                <FontAwesomeIcon icon={faDiscord} size="lg" />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/project.code.uiuc/"
                target="_blank"
                size="md"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/company/23690855"
                target="_blank"
                size="md"
              >
                <LinkedInIcon />
              </IconButton>
            </Grid>

            <Grid xs={12}>
              <Typography>&copy; 2024 Project: Code UIUC</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
