"use client";
import { Grid, Link, List, ListItem, Stack, Typography } from "@mui/joy";
import { usePathname } from "next/navigation";
import ProjectCard from "./_components/ProjectCard";

import NextLink from "next/link";
import { getProjectsFromSemester } from "./all-projects";
import ProjectsGrid from "./_components/ProjectsGrid";

export default function Page() {
  const pathname = usePathname();
  return (
    <Stack>
      {/* <Typography>Projects</Typography> */}
      <Typography level="h1" mb={1}>
        Projects
      </Typography>
      <Typography level="h2" mb={1}>
        Spring 2024
      </Typography>
      {/* <Breadcrumbs
        aria-label="breadcrumbs"
        separator="—"
        sx={{ pl: 0, "--Icon-fontSize": "60px" }}
      >
        {pathname.split("/").map((thing) => (
          <Typography>{thing}</Typography>
        ))}
        {["Projects", "2023-2024"].map((item: string) => (
          <Typography level="h1">
            <Link key={item} color="neutral" href="#basics">
              {item}
            </Link>
          </Typography>
        ))}
        <Typography level="h1">Fall 2023</Typography>
      </Breadcrumbs> */}
      <ProjectsGrid
        projects={getProjectsFromSemester("spring-2024")}
        showPMApplication
      />

      <Typography level="h2" mt={5}>
        Previous Semesters
      </Typography>
      <List marker="disc" sx={{ m: 0 }} size="sm">
        <ListItem>
          <Link component={NextLink} href="projects/fall-2023">
            Fall 2023
          </Link>
        </ListItem>
        <ListItem>
          <Link component={NextLink} href="projects/spring-2022">
            Spring 2022
          </Link>
        </ListItem>
      </List>
    </Stack>
  );
}
