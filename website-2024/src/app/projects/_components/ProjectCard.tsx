import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Link,
  Typography,
} from "@mui/joy";

import NextLink from "next/link";

import MailIcon from "@mui/icons-material/Mail";
import { ProjectManager } from "../projects";

export interface ProjectCardProps {
  title: string;
  emoji?: string;
  projectManagers: ProjectManager[];
  areas: string[];
  id: string;
}

/**
 * Card that displays project information.
 */
export default function ProjectCard({
  title,
  emoji,
  projectManagers,
  areas,
  id,
}: ProjectCardProps) {
  return (
    <Card sx={{ gap: 0, height: "100%" }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid xs={9} sm={8}>
            <Typography level="title-lg" sx={{ mt: 0, fontSize: "xl" }}>
              {title}
            </Typography>
          </Grid>

          {/* Spacer where avatar could fit to prevent title from overlapping */}
          {emoji && (
            <Grid
              xs={3}
              sm={4}
              sx={{ display: "flex" }}
              justifyContent="flex-end"
              alignItems="center"
            ></Grid>
          )}
        </Grid>

        {emoji && (
          <Avatar
            sx={{
              "--Avatar-size": "3rem",
              position: "absolute",
              right: "1rem",
              top: "1rem",
            }}
          >
            {emoji}
          </Avatar>
        )}

        <Grid container spacing={0.5} mt={0.5}>
          {areas.map((area, idx) => (
            <Grid key={idx}>
              <Chip variant="outlined" sx={{ fontSize: "md" }}>
                {area}
              </Chip>
            </Grid>
          ))}
        </Grid>

        <Typography level="title-md" mt={1}>
          Led by <PMLinkList projectManagers={projectManagers} />
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="solid"
          component={NextLink}
          href={`/projects/${id}`}
          passHref
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

/**
 * Renders a list of project managers with email links.
 */
export function PMLinkList({
  projectManagers: projectManagers,
}: {
  projectManagers: ProjectManager[];
}) {
  function PMLink({ pm }: { pm: ProjectManager }) {
    return pm.email ? (
      <Link
        href={`mailto:${pm.email}`}
        endDecorator={<MailIcon fontSize="inherit" />}
      >
        {" "}
        {pm.name}
      </Link>
    ) : (
      pm.name
    );
  }

  if (projectManagers.length === 0) {
    return null;
  }

  if (projectManagers.length === 1) {
    return <PMLink pm={projectManagers[0]} />;
  }

  if (projectManagers.length === 2) {
    return (
      <>
        <PMLink pm={projectManagers[0]} /> and{" "}
        <PMLink pm={projectManagers[1]} />
      </>
    );
  }

  return (
    <>
      {projectManagers.map((pm, index) => (
        <>
          <PMLink pm={pm} />
          {index < projectManagers.length - 2
            ? ", "
            : index === projectManagers.length - 2
            ? " and "
            : ""}
        </>
      ))}
    </>
  );
}
