"use client";
import { Link, List, ListItem, Stack, Typography, Button, AspectRatio } from "@mui/joy";
import Image from "next/image";
import LaunchIcon from "@mui/icons-material/Launch";

import NextLink from "next/link";

const CURRENT_SEMESTER = "fall-2024";

// Suggestion: put more recent semesters at beginning (e.g., [spring-2024, fall-2023, spring-2023, ...])
const PREVIOUS_SEMESTERS = ["spring-2024", "fall-2023"];

export default function Page() {
  return (
    <>
      <Typography level="h1" mt={3} mb={3}>
        Mailing List
      </Typography>

      <Typography level="h3" mb={2}>
        Step 1
      </Typography>

      <Button
        size="md"
        endDecorator={<LaunchIcon />}
        component="a"
        href={`https://lists.illinois.edu/lists/info/project-code-uiuc`}
        target="_blank"
      >
        Open the mailing list
      </Button>

      <Typography level="h3" mt={3} mb={2}>
        Step 2
      </Typography>

      <Typography level="body-lg" mb={3}>
        Select "Subscribe" from the List Options menu
      </Typography>

      <AspectRatio
        variant="outlined"
        ratio="3/1"
        objectFit="cover"
        sx={{ borderRadius: "lg" }}
      >
        <Image
          alt="Mailing list info page with options menu"
          src="/subscribe-instructions/step2.png"
          fill // Completely fill the AspectRatio component
          sizes="(max-width: 2000px) 100vw, (max-width: 1800px) 50vw, 33vw" // Improve performance since image is smaller on desktop
        />
      </AspectRatio>

      <Typography level="h3" mt={3} mb={2}>
        Step 3
      </Typography>

      <Typography level="body-lg" mb={3}>
        Fill in your email and name, and click "You've been subscribed to list project-code-uiuc"
      </Typography>

      <AspectRatio
        variant="outlined"
        ratio="1910/626"
        objectFit="cover"
        sx={{ borderRadius: "lg" }}
      >
        <Image
          alt="Mailing list info page with options menu"
          src="/subscribe-instructions/step3.png"
          fill // Completely fill the AspectRatio component
          sizes="(max-width: 2000px) 100vw, (max-width: 1800px) 50vw, 33vw" // Improve performance since image is smaller on desktop
        />
      </AspectRatio>

    </>
  );
}
