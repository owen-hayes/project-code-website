"use client";
import { Link, List, ListItem, Stack, Typography } from "@mui/joy";

import NextLink from "next/link";
import ProjectsGrid from "./_components/ProjectsGrid";
import { getProjectsFromSemester, prettyPrintSemester } from "./all-projects";

export default function Page() {
  return (
    <Stack>
      {/* <Typography>Projects</Typography> */}
      <Typography level="h1" mb={1}>
        Projects
      </Typography>
      <Typography level="h2" mb={1}>
        Spring 2024
      </Typography>

      <ProjectsGrid
        projects={getProjectsFromSemester("spring-2024")}
        showPMApplication
        showMatchingForm
      />

      <Typography level="h2" mt={5}>
        Previous Semesters
      </Typography>

      <List marker="disc" sx={{ m: 0 }} size="sm">
        {/* Put previous semesters here (suggested: put newer at beginning) */}
        {["fall-2023"].map((semester) => (
          <ListItem>
            <Link
              component={NextLink}
              href={`projects/old/${semester}`}
              passHref
            >
              {prettyPrintSemester(semester)}
            </Link>
          </ListItem>
        ))}
      </List>
    </Stack>
  );
}
