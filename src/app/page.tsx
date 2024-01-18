// "use client";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import {
  AspectRatio,
  Divider,
  Grid,
  Link,
  Typography
} from "@mui/joy";
import Button from "@mui/joy/Button";
import Image from "next/image";
import NextLink from "next/link";

import MeetingsAndEvents from "./_components/MeetingsAndEvents";

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

      <MeetingsAndEvents />
    </>
  );
}
