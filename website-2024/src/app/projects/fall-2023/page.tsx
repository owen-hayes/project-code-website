"use client";
import { Breadcrumbs, Button, Grid, Link, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import ProjectCard from "../_components/ProjectCard";
import ProjectsGrid from "../_components/ProjectsGrid";
import { getProjectsFromSemester } from "../all-projects";

export default function Page() {
  const pathname = usePathname();
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
        <Typography level="h1">Fall 2023</Typography>
      </Breadcrumbs>

      <ProjectsGrid projects={getProjectsFromSemester("fall-2023")} />

      {/* <Grid container spacing={3} mt={0.5}>
        <Grid xs={12} sm={6} md={4}>
        <ProjectCard
            title="Insecurities in AI-Generated Code"
            projectManagers={[
              { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
              { name: "Litao Li", email: "lli205@illinois.edu" },
            ]}
            areas={["AI"]}
            emoji="🪲"
            id="ai-insecurities"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <ProjectCard
            title="Insecurities in AI-Generated Code"
            projectManagers={[
              { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
              { name: "Litao Li", email: "lli205@illinois.edu" },
            ]}
            areas={["AI"]}
            emoji="🪲"
            id="ai-insecurities"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <ProjectCard
            title="Insecurities in AI-Generated Code"
            projectManagers={[
              { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
              { name: "Litao Li", email: "lli205@illinois.edu" },
            ]}
            areas={["AI"]}
            emoji="🪲"
            id="ai-insecurities"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <ProjectCard
            title="Insecurities in AI-Generated Code"
            projectManagers={[
              { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
              { name: "Litao Li", email: "lli205@illinois.edu" },
            ]}
            areas={["AI"]}
            emoji="🪲"
            id="ai-insecurities"
          />
        </Grid>
        <Grid xs={12} sm={6} md={4}>
        <ProjectCard
            title="Insecurities in AI-Generated Code"
            projectManagers={[
              { name: "Jo Mohan", email: "jomohan2@illinois.edu" },
              { name: "Litao Li", email: "lli205@illinois.edu" },
            ]}
            areas={["AI"]}
            emoji="🪲"
            id="ai-insecurities"
          />
        </Grid>
      </Grid> */}
    </Stack>
  );
}
