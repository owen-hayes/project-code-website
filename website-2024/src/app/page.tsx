"use client";
import Image from "next/image";
import Button from "@mui/joy/Button";
import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Link,
  Sheet,
  Stack,
  Typography,
  useColorScheme,
  useTheme,
} from "@mui/joy";
import { useEffect, useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { DiscountRounded, Launch } from "@mui/icons-material";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
import Person from "@mui/icons-material/Person";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import MailIcon from "@mui/icons-material/Mail";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import LaunchIcon from "@mui/icons-material/Launch";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";

// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

// Supports weights 200-900
import "@fontsource-variable/source-sans-3";

// import '@fontsource/inter';

export default function Home() {
  const theme = useTheme();
  return (
    <Stack>
      {/* Main heading */}
      <Typography level="h1" sx={{ textAlign: "center", mb: 1, fontSize: 48 }}>
        <Typography fontWeight="normal" display={{ xs: "block", sm: "inline" }}>
          Welcome to{" "}
        </Typography>
        <Typography
          // Display "Project: Code!" on new line on mobile
          display={{ xs: "block", sm: "inline" }}
        >
          Project: Code!
        </Typography>
      </Typography>

      <Grid container direction="row" spacing={2} alignItems="flex-start">
        {/* Left side with text and buttons */}
        <Grid container xs={12} md={6} rowSpacing={2}>
          {/* Main info paragraph */}
          <Grid xs={12}>
            <Typography level="body-lg">
              Explore areas of computer science like{" "}
              <Typography fontWeight="bold">
                app / web development, data science, machine learning, virtual
                reality / augmented reality, and game development{" "}
              </Typography>
              with groups of like-minded peers at UIUC! Join us to work with a
              Project Manager (PM) and a group of 5-10 students and spend the
              semester or year working on a{" "}
              <Link
                component={NextLink}
                href="/projects"
                passHref
                sx={{ display: "inline" }}
              >
                project centered around your area of interest
              </Link>{" "}
              (web dev, data science, etc.).
            </Typography>
          </Grid>

          {/* Container for buttons */}
          <Grid
            container
            xs={12}
            spacing={1}
            sx={{ flexGrow: 1 }}
            // bgcolor="purple"
          >
            {/* <Grid spacing={1} sx={{ bgcolor: "magenta" }}> */}
            <Grid
              xs={12}
              sm={6}
              md={6}
              // md={4}
            >
              {/* <Box sx={{ backgroundColor: "green" }}>hi</Box> */}
              <Button
                size="lg"
                startDecorator={<FontAwesomeIcon icon={faDiscord} size="lg" />}
                component="a"
                href="https://discord.gg/yCPDb8YRRp"
                target="_blank"
                fullWidth // Take full width of grid item
                sx={{ height: "100%" }}
              >
                JOIN OUR DISCORD
              </Button>
            </Grid>

            <Grid xs={12} md={6} sm={6}>
              <Button
                variant="outlined"
                size="lg"
                startDecorator={<MailIcon />}
                fullWidth
                component="a"
                href="https://forms.gle/x7JLMNzbmNFLRipAA"
                target="_blank"
                sx={{ height: "100%" }}
              >
                JOIN OUR MAILING LIST
              </Button>
            </Grid>

            <Grid xs={12} md={6} sm={6}>
              <Button
                variant="outlined"
                size="lg"
                startDecorator={<InstagramIcon />}
                fullWidth
                component="a"
                href="https://www.instagram.com/project.code.uiuc/"
                target="_blank"
                sx={{ height: "100%" }}
              >
                FOLLOW US ON INSTAGRAM
              </Button>
            </Grid>
            <Grid xs={12} md={6} sm={6}>
              <Button
                variant="outlined"
                size="lg"
                startDecorator={<LinkedInIcon />}
                fullWidth
                component="a"
                href="https://www.linkedin.com/company/23690855"
                target="_blank"
                sx={{ height: "100%" }}
              >
                FOLLOW US ON LINKEDIN
              </Button>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Grid>

        {/* Right side with image */}
        <Grid xs={12} md={6} alignSelf="center">
          {/* <Grid xs={12}> */}
          {/* <Box> */}
          <AspectRatio
            variant="outlined"
            ratio="16/9"
            objectFit="cover"
            sx={{ borderRadius: "lg" }}
          >
            {/* only layout="fill" makes sense for using with AspectRatio */}
            <Image
              alt="Students in a Project: Code meeting in a lecture hall"
              src="/meeting-blur-crop-2.jpg"
              layout="fill"
              // placeholder="blur"
            />
          </AspectRatio>
          {/* </Box> */}
          {/* </Grid> */}
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5, mb: 3 }} />
      <Typography level="h2">Meetings and Events</Typography>
      <Grid container spacing={0.5}>
        <Grid>
          <Chip
            variant="outlined"
            // color="primary"
            startDecorator={<AppleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                component: "a",
                href: "webcal://calendar.google.com/calendar/ical/h9el7b7k8413uo9m49f1h7brpc%40group.calendar.google.com/public/basic.ics",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            {/* <Typography level="title-md" fontWeight="600"> */}
            Subscribe to Apple Calendar
            {/* </Typography> */}
          </Chip>
        </Grid>
        <Grid>
          <Chip
            variant="outlined"
            // color="primary"
            startDecorator={<GoogleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                component: "a",
                href: "https://calendar.google.com/calendar/render?cid=h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            {/* <Typography level="title-md" fontWeight="600"> */}
            Subscribe to Google Calendar
            {/* </Typography> */}
          </Chip>
        </Grid>
      </Grid>

      <Grid container spacing={2} alignItems="stretch" mt={1}>
        {[
          {
            title: "General Meeting #1 – Info Session",
            date: "Thu, Jan 18, 2024, 6–7 PM",
            location: "Siebel 1404",
            locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
            description:
              "Learn more about Project: Code and how to get started on a project this semester!",
          },
          {
            title: "General Meeting #2 – Projects Intro",
            date: "Thu, Jan 25, 2024, 6–7 PM",
            location: "Siebel 1404",
            locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
            description:
              "Learn about the projects being held this semester and select the project you are most interested in working on!",
          },
          {
            title: "More meetings coming soon!",
            // date: "Wed, Jan 24, 2024, 6–7 PM",
            description:
              "Keep an eye on Discord and this site so you never miss a meeting! You can also subscribe to our calendar with the links above.",
          },

          // {
          //   title: "General Meeting #3 – Midpoint Presentations",
          //   date: "Early March (Date & Time TBA)",
          //   location: "Siebel 1404",
          //   locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
          //   description:
          //     "Hear from project groups about the progress they've made so far this semester!",
          // },
          // {
          //   title: "General Meeting #4 – Final Presentations",
          //   date: "Late April (Date & Time TBA)",
          //   location: "Siebel 1404",
          //   locationLink: "https://maps.app.goo.gl/yCpsPaRFWMEaEnWt6",
          //   description:
          //     "Hear again from project groups and see each team's final product!",
          // },
        ].map((event, idx) => (
          <Grid xs={12} sm={6} md={4} key={idx}>
            <Card variant="soft" sx={{ maxWidth: "md", height: "100%" }}>
              <CardContent>
                <Typography level="title-lg">{event.title}</Typography>

                {event.date && event.date !== "" && (
                  <Typography level="title-md">{event.date}</Typography>
                )}
                {event.location && event.location !== "" && (
                  <Chip
                    variant="solid"
                    color="primary"
                    endDecorator={<LaunchIcon />}
                    slotProps={{
                      action: {
                        component: "a",
                        href: event.locationLink,
                      },
                    }}
                    sx={{ fontWeight: 600, fontSize: "md", mb: 1.5 }}
                  >
                    {/* <Typography level="title-md" fontWeight="600"> */}
                    {event.location}
                    {/* </Typography> */}
                  </Chip>
                )}
                <Divider sx={{ mt: 0.5, mb: 1 }} />
                {event.description !== "" && (
                  <Typography>{event.description}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}

// spacing={2} direction="column"
