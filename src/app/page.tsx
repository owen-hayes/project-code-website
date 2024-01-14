// "use client";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LaunchIcon from "@mui/icons-material/Launch";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import {
  AspectRatio,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/joy";
import Button from "@mui/joy/Button";
import Image from "next/image";
import NextLink from "next/link";

import { MEETINGS } from "./meetings";

export default function Home() {
  return (
    <>
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
                project centered around your area of interest (web dev, data
                science, etc.).
              </Link>{" "}
            </Typography>
          </Grid>

          {/* Container for buttons */}
          <Grid container xs={12} spacing={1}>
            {/* Buttons take full width (12/12) on mobile, or half width (6/12) on screens that are "sm" or above */}
            <Grid xs={12} sm={6}>
              <Button
                size="lg"
                startDecorator={<FontAwesomeIcon icon={faDiscord} size="lg" />}
                component="a"
                href="https://discord.gg/yCPDb8YRRp"
                target="_blank" // Open in new tab
                fullWidth // Take full width of grid item
                sx={{ height: "100%" }} // Take full height of grid item for when adjacent button is naturally taller than this one
              >
                JOIN OUR DISCORD
              </Button>
            </Grid>

            <Grid xs={12} sm={6}>
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

            <Grid xs={12} sm={6}>
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

            <Grid xs={12} sm={6}>
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
        </Grid>

        {/* Image of meeting appears on right side (desktop) or just below buttons (mobile) */}
        <Grid xs={12} md={6} alignSelf="center">
          <AspectRatio
            variant="outlined"
            ratio="16/9"
            objectFit="cover"
            sx={{ borderRadius: "lg" }}
          >
            <Image
              alt="Students in a Project: Code meeting in a lecture hall"
              src="/meeting.jpg"
              fill // Completely fill the AspectRatio component
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Improve performance since image is smaller on desktop
            />
          </AspectRatio>
        </Grid>
      </Grid>

      <Divider sx={{ mt: 5, mb: 3 }} />

      <Typography level="h2">Meetings and Events</Typography>

      {/* Chip buttons to subscribe to Apple/Google calendar feed */}
      <Grid container spacing={0.5}>
        {/* Grid item with chip button for Google Calendar subscription */}
        <Grid>
          <Chip
            variant="outlined"
            startDecorator={<AppleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                // Make it a link
                component: "a",

                /*
                  Format for iOS subscription link to Google Calendar is:
                  "webcal://calendar.google.com/calendar/ical/[CALENDAR ID]/public/basic.ics"

                  Calendar ID can be found in:
                  Google Calendar settings > [Calendar Name] > Integrate calendar
                */
                href: "webcal://calendar.google.com/calendar/ical/h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com/public/basic.ics",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            Subscribe to Apple Calendar
          </Chip>
        </Grid>

        {/* Grid item with chip button for Google Calendar subscription */}
        <Grid>
          <Chip
            variant="outlined"
            startDecorator={<GoogleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                component: "a",

                /*
                  Format for Google Calendar subscription:
                  "https://calendar.google.com/calendar/render?cid=[CALENDAR ID]"

                  Calendar ID can be found in:
                  Google Calendar settings > [Calendar Name] > Integrate calendar
                */
                href: "https://calendar.google.com/calendar/render?cid=h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            Subscribe to Google Calendar
          </Chip>
        </Grid>
      </Grid>

      {/* Grid for meetings */}
      <Grid container spacing={2} alignItems="stretch" mt={1}>
        {MEETINGS.map((meeting, idx) => (
          // Take full width on mobile, half width (6/12) on "sm", and third width (4/12) on "md"+
          <Grid xs={12} sm={6} md={4} key={idx}>
            {/* Height expands to match adjacent card if necessary */}
            <Card variant="soft" sx={{ height: "100%" }}>
              <CardContent>
                {/* Always show title */}
                <Typography level="title-lg">{meeting.title}</Typography>

                {/* Only show date if it exists */}
                {meeting.date && meeting.date !== "" && (
                  <Typography level="title-md">{meeting.date}</Typography>
                )}

                {/* Only show location if it exists */}
                {meeting.location && meeting.location !== "" && (
                  <Chip
                    variant="solid"
                    color="primary"
                    endDecorator={<LaunchIcon />}
                    slotProps={{
                      action: {
                        component: "a",
                        href: meeting.locationLink,
                      },
                    }}
                    sx={{ fontWeight: 600, fontSize: "md", mb: 1.5 }}
                  >
                    {meeting.location}
                  </Chip>
                )}

                <Divider sx={{ mt: 0.5, mb: 1 }} />

                {/* Only show description if it exists */}
                {meeting.description !== "" && (
                  <Typography>{meeting.description}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
