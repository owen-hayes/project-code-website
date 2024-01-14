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

/**
 * Displays information about an individual, such as name, photo, role, and
 * LinkedIn profile.
 *
 * @component
 * @param {object} props - The properties of the BioCard component.
 * @param {string} props.name - The name of the individual (e.g., "Owen Hayes").
 * @param {string} props.initials - The initials of the individual (e.g., "OH").
 * @param {string} props.photoURL - The URL of the individual's photo (optional) (e.g., "/exec-photos/owen.jpg").
 * @param {string} props.role - The role of the individual (optional) (e.g., "President").
 * @param {string} props.linkedInURL - The URL of the individual's LinkedIn profile (optional).
 * @returns Element representing the BioCard.
 */
export default function BioCard({
  name,
  initials,
  photoURL,
  role,
  linkedInURL,
}: BioCardProps) {
  return (
    <Card
      // Take up as much vertical space as possible so it matches others in grid
      sx={{
        height: "100%",
        maxWidth: "100%",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        {/* Initials appear if photoURL is gone or broken */}
        <Avatar src={photoURL} sx={{ "--Avatar-size": "4rem" }}>
          {initials}
        </Avatar>

        {/* Full name */}
        <Typography level="title-lg" sx={{ mt: 1 }}>
          {name}
        </Typography>

        {/* Role appears if it exists */}
        {role && (
          <Typography level="title-md" mt={0} lineHeight={1.2}>
            {role}
          </Typography>
        )}
      </CardContent>

      {/*
        Overflow area only appears if URL is present. If extended with more
        URLs (e.g., email address), this should be changed so the overflow area
        appears if ANY of the links exists.
      */}
      {linkedInURL && (
        <CardOverflow
          sx={{ bgcolor: "background.level1", py: 1, alignItems: "center" }}
        >
          {/* Container for buttons */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
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
            {/* Put more IconButtons here */}
          </Box>
        </CardOverflow>
      )}
    </Card>
  );
}
