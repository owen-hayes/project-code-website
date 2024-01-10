import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";

export interface BioCardProps {
  name: string;
  initials: string;
  role?: string;
  photoURL?: string;
  linkedInURL?: string;
}

export default function BioCard({
  name,
  initials,
  photoURL,
  role,
  linkedInURL,
}: BioCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: "100%",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar src={photoURL} sx={{ "--Avatar-size": "4rem" }}>
          {initials}
        </Avatar>
        <Typography level="title-lg" sx={{ mt: 1 }}>
          {name}
        </Typography>
        {role && (
          <Typography level="title-md" mt={0} lineHeight={1.2}>
            {role}
          </Typography>
        )}
      </CardContent>

      {linkedInURL && (
        <CardOverflow
          sx={{ bgcolor: "background.level1", py: 1, alignItems: "center" }}
        >
          {linkedInURL && (
            <Box
              sx={{
                display: "flex",
                gap: 2,
                // mt: 2,
                "& > button": { borderRadius: "2rem" },
              }}
            >
              <IconButton
                size="sm"
                variant="plain"
                color="neutral"
                component="a"
                href={linkedInURL}
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          )}
        </CardOverflow>
      )}
    </Card>
  );
}
