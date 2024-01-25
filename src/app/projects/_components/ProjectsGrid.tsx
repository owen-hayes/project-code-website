import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/joy";
import { Project } from "../projects";
import ProjectCard from "./ProjectCard";
import LaunchIcon from "@mui/icons-material/Launch";
import PMApplicationCard from "./PMApplicationCard";

export interface ProjectsGridProps {
  projects: Project[];
  showPMApplication?: boolean;
  showMatchingForm?: boolean;
}

export default function ProjectsGrid({
  projects,
  showPMApplication,
  showMatchingForm,
}: ProjectsGridProps) {
  return (
    <Grid container spacing={3}>
      {/* Show info box about PM application when specified to be shown */}
      {showPMApplication && (
        <Grid xs={12} sm={6} md={4}>
          <PMApplicationCard />
        </Grid>
      )}

      {/* Show info box about matching form when specified to be shown */}
      {showMatchingForm && (
        <Grid xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography level="h3">Want to join a project?</Typography>
              <Typography level="body-lg">
                The project matching form for Spring 2024 is now open!
              </Typography>
            </CardContent>

            <CardActions>
              <Button
                size="md"
                endDecorator={<LaunchIcon />}
                component="a"
                href="https://forms.gle/LWqt4qW6stpBS9aY7"
                target="_blank"
                // disabled
              >
                Join a project
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}

      {projects
        // Sort alphabetically by title
        .sort((a, b) => (a.title < b.title ? -1 : 1))

        // Map each project to a grid item with a project card inside
        .map((project, idx) => (
          <Grid xs={12} sm={6} md={4} key={idx}>
            <ProjectCard
              title={project.title}
              projectManagers={project.projectManagers}
              areas={project.areas}
              emoji={project.emoji}
              id={project.id}
            />
          </Grid>
        ))}
    </Grid>
  );
}
