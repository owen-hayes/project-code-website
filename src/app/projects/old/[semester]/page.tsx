"use client";
import { Breadcrumbs, Link, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";
import ProjectsGrid from "../../_components/ProjectsGrid";
import { getProjectsFromSemester, prettyPrintSemester } from "../../projects";

export default function Page({ params }: { params: { semester: string } }) {
  return (
    <Stack>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={
          <Typography level="h1" color="neutral">
            /
          </Typography>
        }
        sx={{ p: 0, mb: 1 }}
      >
        {[{ displayName: "Projects", url: "/projects" }].map((page, idx) => (
          <Typography level="h1" key={idx}>
            <Link component={NextLink} href={page.url} passHref color="neutral">
              {page.displayName}
            </Link>
          </Typography>
        ))}

        {/* Heading with semester as specified in url */}
        <Typography level="h1">{prettyPrintSemester(params.semester)}</Typography>
      </Breadcrumbs>

      {/* Get projects grid from semester as specified in url */}
      <ProjectsGrid projects={getProjectsFromSemester(params.semester)} />
    </Stack>
  );
}
