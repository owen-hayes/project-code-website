"use client";
import { Link, List, ListItem, Stack, Typography } from "@mui/joy";

import NextLink from "next/link";
import ProjectsGrid from "./_components/ProjectsGrid";
import { getProjectsFromSemester, prettyPrintSemester } from "./projects";

const CURRENT_SEMESTER = "fall-2024";

// Suggestion: put more recent semesters at beginning (e.g., [spring-2024, fall-2023, spring-2023, ...])
const PREVIOUS_SEMESTERS = ["spring-2024", "fall-2023"];

export default function Page() {
  return (
    <>
      <Typography level="h1" mt={3} mb={2}>
        Projects
      </Typography>

      {/* Current semester heading */}
      <Typography level="h2" mb={1}>
        {prettyPrintSemester(CURRENT_SEMESTER)}
      </Typography>

      {/* Grid of projects from current semester */}
      <ProjectsGrid
        projects={getProjectsFromSemester(CURRENT_SEMESTER)}
        // showPMApplication
        showMatchingForm
      />

      <Typography level="h2" mt={5}>
        Previous Semesters
      </Typography>

      {/* Previous semesters show up in same order as PREVIOUS_SEMESTERS list */}
      <List marker="disc" sx={{ m: 0 }} size="sm">
        {PREVIOUS_SEMESTERS.map((semester, idx) => (
          <ListItem key={idx}>
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
    </>
  );
}
