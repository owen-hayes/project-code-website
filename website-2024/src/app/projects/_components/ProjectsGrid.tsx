import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/joy";
import { Project } from "../all-projects";
import ProjectCard from "./ProjectCard";
import LaunchIcon from "@mui/icons-material/Launch";

export interface ProjectsGridProps {
  projects: Project[];
  showPMApplication?: boolean;
}

export default function ProjectsGrid({
  projects,
  showPMApplication,
}: ProjectsGridProps) {
  return (
    <Grid container spacing={3}>
      {showPMApplication && (
        <Grid xs={12} sm={6} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography level="h3">Want to lead a project?</Typography>
              <Typography level='body-lg'>
                Spring 2024 Project Manager applications are open!
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="md"
                // startDecorator={<FeedIcon />}
                endDecorator={<LaunchIcon />}
                component="a"
                href="https://forms.gle/X6nvij6nT17H7nTd7"
                target="_blank"
              >
                Apply
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}

      {projects.map((project) => (
        <Grid xs={12} sm={6} md={4}>
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
