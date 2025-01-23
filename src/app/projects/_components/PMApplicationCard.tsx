import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/joy";

export default function PMApplicationCard() {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Typography level="h3">Want to lead a project?</Typography>
        <Typography level="body-md">
          Project Manager applications for Spring 2025 are open!
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="md"
          endDecorator={<LaunchIcon />}
          component="a"
          href="https://forms.gle/mTK3YuLhqfrGGsad6"
          target="_blank"
          // disabled
        >
          Apply
        </Button>
      </CardActions>
    </Card>
  );
}
