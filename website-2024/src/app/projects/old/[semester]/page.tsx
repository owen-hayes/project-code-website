"use client";
import { Breadcrumbs, Button, Grid, Link, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import ProjectCard from "../../_components/ProjectCard";
import ProjectsGrid from "../../_components/ProjectsGrid";
import { getProjectsFromSemester, prettyPrintSemester } from "../../all-projects";

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
          <Typography level="h1">
            <Link component={NextLink} href={page.url} passHref color="neutral">
              {page.displayName}
            </Link>
          </Typography>
        ))}
        <Typography level="h1">{prettyPrintSemester(params.semester)}</Typography>
      </Breadcrumbs>

      <ProjectsGrid projects={getProjectsFromSemester(params.semester)} />
    </Stack>
  );
}
