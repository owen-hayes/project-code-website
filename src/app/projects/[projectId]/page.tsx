"use client";
import { Avatar, Box, Button, Chip, Grid, Sheet, Typography } from "@mui/joy";

import LaunchIcon from "@mui/icons-material/Launch";
import NextLink from "next/link";
import { PMLinkList } from "../_components/ProjectCard";
import { getProjectById, prettyPrintSemester } from "../projects";

export default function Page({ params }: { params: { projectId: string } }) {
  const project = getProjectById(params.projectId);

  // Formats like: "A, B, C"
  const namesFormatter = new Intl.ListFormat("en", {
    style: "narrow",
    type: "conjunction",
  });

  // Show "not found" message if project doesn't exist
  if (project === undefined) {
    return (
      <Typography level="title-lg">
        Project not found:{" "}
        <Typography fontFamily="monospace" color="primary">
          {params.projectId}
        </Typography>
      </Typography>
    );
  }

  return (
    <>
      {/* Using sheet so absolutely-positioned emoji displays in right spot */}
      <Sheet sx={{ backgroundColor: "background.body" }}>
        {/* Container for title, chips, and emoji */}
        <Grid container spacing={1}>
          <Grid xs={9} sm={8}>
            {/* Main title heading */}
            <Typography level="h1" sx={{ mt: 0 }}>
              {project.title}
            </Typography>

            {/* Grid of chips (semester started, other active semesters, and areas of CS) */}
            <Grid container spacing={0.5} mt={0}>
              {/* Semester project started */}
              <Grid>
                <Chip
                  variant="outlined"
                  color="primary"
                  sx={{ fontSize: "md" }}
                >
                  {prettyPrintSemester(project.started)}
                </Chip>
              </Grid>

              {/* Other semesters project was active in */}
              {project.alsoActiveIn.map((semester, idx) => (
                <Grid key={idx}>
                  <Chip
                    variant="outlined"
                    color="primary"
                    sx={{ fontSize: "md" }}
                  >
                    {prettyPrintSemester(semester)}
                  </Chip>
                </Grid>
              ))}

              {/* Areas of CS that the project spans */}
              {project.areas.map((area, idx) => (
                <Grid key={idx}>
                  <Chip variant="outlined" sx={{ fontSize: "md" }}>
                    {area}
                  </Chip>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Spacer where avatar could fit to prevent title from overlapping */}
          {project.emoji && (
            <Grid
              xs={3}
              sm={4}
              sx={{ display: "flex" }}
              justifyContent="flex-end"
              alignItems="center"
            ></Grid>
          )}
        </Grid>

        {/* Actual emoji */}
        {project.emoji && (
          <Avatar
            sx={{
              "--Avatar-size": "5rem",
              position: "absolute",
              right: "0rem",
              top: "0rem",
            }}
          >
            {project.emoji}
          </Avatar>
        )}

        {/* PMs */}
        <Typography level="title-lg" mt={2} sx={{ fontSize: "xl" }}>
          Led by <PMLinkList projectManagers={project.projectManagers} />
        </Typography>

        {/* Contributors */}
        {project.contributors && project.contributors.length > 0 && (
          <Typography level="title-md">
            Contributors: {namesFormatter.format(project.contributors)}
          </Typography>
        )}
      </Sheet>

      {/* Links to view project and view source code */}
      <Box sx={{ mt: 1.5 }}>
        {project.viewProjectLink && (
          <Button
            sx={{ mr: 1 }}
            endDecorator={<LaunchIcon />}
            component={NextLink}
            href={project.viewProjectLink}
            passHref
          >
            View Project
          </Button>
        )}

        {project.sourceCodeLink && (
          <Button
            variant="outlined"
            endDecorator={<LaunchIcon />}
            component={NextLink}
            href={project.sourceCodeLink}
            passHref
          >
            Source Code
          </Button>
        )}
      </Box>

      {/* Description */}
      {project.description && (
        <Typography mt={2} level="body-lg">
          {project.description}
        </Typography>
      )}
    </>
  );
}
