"use client";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect } from "react";
import { getProjectById, prettyPrintSemester } from "../all-projects";
import { PMList } from "../_components/ProjectCard";
import NextLink from "next/link";

export default function Page({ params }: { params: { projectId: string } }) {
  // useEffect(() => {
  //   console.log(getProjectById("wikipedia-similarity"));
  // }, []);
  const project = getProjectById(params.projectId);

  const namesFormatter = new Intl.ListFormat("en", {
    style: "narrow",
    type: "conjunction",
  });

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
      {/* <Typography level="h1">Wikipedia Similarity Applications</Typography>
      <Grid container spacing={0.5}>
        {["Data Viz"].map((area) => (
          <Grid>
            <Chip variant="outlined">{area}</Chip>
          </Grid>
        ))}
      </Grid>
      <Typography level="title-lg" mt={1} mb={3}>
        Led by Saket
      </Typography> */}
      <Sheet sx={{ backgroundColor: "background.body" }}>
        <Grid container spacing={1}>
          <Grid xs={9} sm={8}>
            <Typography level="h1" sx={{ mt: 0 }}>
              {project.title}
            </Typography>
            {/* <Grid container xs={12} bgcolor={"green"} spacing={0.5} mt={0.5}>
            {areas.map((area) => (
              <Grid>
                <Chip variant="outlined">{area}</Chip>
              </Grid>
            ))}
          </Grid> */}

            <Grid container spacing={0.5} mt={0}>
              <Grid>
                <Chip variant="outlined" color="primary" sx={{fontSize: 'md'}}>
                  {prettyPrintSemester(project.started)}
                </Chip>
              </Grid>
              {project.alsoActiveIn.map((semester) => (
                <Grid>
                  <Chip variant="outlined" color="primary" sx={{fontSize: 'md'}}>
                    {prettyPrintSemester(semester)}
                  </Chip>
                </Grid>
              ))}
              {project.areas.map((area) => (
                <Grid>
                  <Chip variant="outlined" sx={{fontSize: 'md'}}>{area}</Chip>
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
            >
              {/* <Avatar sx={{ "--Avatar-size": "5rem" }}>📊</Avatar> */}
            </Grid>
          )}
        </Grid>

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
        {/* <Grid container spacing={0.5} mt={0}>
          <Grid>
            <Chip variant="outlined" color="primary">
              {prettyPrintSemester(project.started)}
            </Chip>
          </Grid>
          {project.alsoActiveIn.map((semester) => (
            <Grid>
              <Chip variant="outlined" color="primary">
                {prettyPrintSemester(semester)}
              </Chip>
            </Grid>
          ))}
          {project.areas.map((area) => (
            <Grid>
              <Chip variant="outlined">{area}</Chip>
            </Grid>
          ))}
        </Grid> */}

        <Typography level="title-lg" mt={2} sx={{fontSize: 'xl'}}>
          Led by <PMList projectManagers={project.projectManagers} />
        </Typography>
        {project.contributors && project.contributors.length > 0 && (
          <Typography level="title-md">
            Contributors: {namesFormatter.format(project.contributors)}
          </Typography>
        )}
      </Sheet>

      <Box sx={{ mt: 1.5 }}>
        {project.viewProjectLink && (
          <Button
            sx={{ mr: 1 }}
            endDecorator={<LaunchIcon />}
            component={NextLink}
            href={project.viewProjectLink}
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
          >
            Source Code
          </Button>
        )}
      </Box>

      {/* <Typography level="h2">Description</Typography> */}
      {project.description && (
        <Typography mt={2} level="body-lg">{project.description}</Typography>
      )}
    </>
  );
}
