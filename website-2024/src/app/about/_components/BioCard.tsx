import * as React from "react";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import ButtonGroup from "@mui/joy/ButtonGroup";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import CardActions from "@mui/joy/CardActions";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
        // width: 300,
        height: "100%",
        maxWidth: "100%",
        // boxShadow: "s",
      }}
    >
      <CardContent sx={{ alignItems: "center", textAlign: "center" }}>
        <Avatar
          // src="https://mui.com/static/images/avatar/1.jpg"
          src={photoURL}
          sx={{ "--Avatar-size": "4rem", "--Avatar-ringSize": "11px" }}
        >
          {initials}
        </Avatar>
        {/* <Chip
          size="sm"
          variant="soft"
          color="primary"
          sx={{
            // mt: -1,
            mb: 1,
            border: "3px solid",
            borderColor: "background.surface",
          }}
        >
          President
        </Chip> */}
        <Typography level="title-lg" sx={{ mt: 1 }}>
          {name}
        </Typography>
        {role && (
          <Typography level="title-md" mt={0} lineHeight={1.2}>
            {role}
          </Typography>
        )}
        {/* <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
          Hello, this is my bio and I am a PRO member of MUI. I am a developer
          and I love to code.
        </Typography> */}
      </CardContent>
      {linkedInURL && (
        <CardOverflow
          sx={{ bgcolor: "background.level1", py: 1, alignItems: "center" }}
        >
          {/* <CardActions buttonFlex="1"> */}
          {/* <ButtonGroup
            variant="outlined"
            sx={{ bgcolor: "background.surface" }}
          > */}
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
          {/* <Button>Message</Button>
            <Button>Connect</Button> */}
          {/* </ButtonGroup> */}
          {/* </CardActions> */}
        </CardOverflow>
      )}
    </Card>
  );
}
