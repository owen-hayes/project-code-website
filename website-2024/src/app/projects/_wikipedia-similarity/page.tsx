"use client";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Sheet,
  Stack,
  Typography,
} from "@mui/joy";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";
import LaunchIcon from "@mui/icons-material/Launch";

export default function Page() {
  const router = useRouter();
  return (
    <>
      {/* <Typography level="h1">Wikipedia Similarity Applications</Typography>
      <Grid container spacing={0.5}>
        {["Data Viz"].map((area) => (
          <Grid>
            <Chip variant="outlined">{area}</Chip>
          </Grid>
        ))}
      </Grid>
      <Typography level="title-lg" mt={1} mb={3}>
        Led by Saket
      </Typography> */}
      <Sheet sx={{ backgroundColor: "background.body" }}>
        <Grid container spacing={1}>
          <Grid xs={9} sm={8}>
            <Typography level="h1" sx={{ mt: 0 }}>
              Wikipedia Similarity Applications
            </Typography>
            {/* <Grid container xs={12} bgcolor={"green"} spacing={0.5} mt={0.5}>
            {areas.map((area) => (
              <Grid>
                <Chip variant="outlined">{area}</Chip>
              </Grid>
            ))}
          </Grid> */}
          </Grid>

          {/* Spacer where avatar could fit to prevent title from overlapping */}
          <Grid
            xs={3}
            sm={4}
            sx={{ display: "flex" }}
            justifyContent="flex-end"
            alignItems="center"
          >
            {/* <Avatar sx={{ "--Avatar-size": "5rem" }}>📊</Avatar> */}
          </Grid>
        </Grid>

        <Avatar
          sx={{
            "--Avatar-size": "5rem",
            position: "absolute",
            right: "0rem",
            top: "0rem",
          }}
        >
          📊
        </Avatar>
        <Grid container spacing={0.5} mt={0}>
          <Grid>
            <Chip variant="outlined" color="primary">
              Started Fall 2023
            </Chip>
          </Grid>
          {["Data Viz"].map(
            (area) => (
              <Grid>
                <Chip variant="outlined">{area}</Chip>
              </Grid>
            )
          )}
        </Grid>

        <Typography level="title-lg" mt={2}>
          Led by Saket Pochiraju
        </Typography>
        <Typography level="title-md">
          Contributors: Seraphina Shadowdancer, Orion Thunderheart, Luna
          Starwhisper, Zephyr Frostblade, Isabella Moonfire, Xander
          Stormwatcher, Aria Emberflame, Magnus Silverthorn, Nyx Nightshade, and
          Evander Wildheart
        </Typography>
      </Sheet>

      <Button sx={{ mt: 2, mr: 1 }} endDecorator={<LaunchIcon />}>
        View Project
      </Button>
      <Button variant="outlined" endDecorator={<LaunchIcon />}>
        Source Code
      </Button>

      {/* <Typography level="h2">Description</Typography> */}
      <Typography mt={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor
        et purus vel interdum. Maecenas at neque nec mi vestibulum euismod.
        Vivamus pulvinar, augue eget suscipit pellentesque, nibh justo
        condimentum enim, quis efficitur dolor nibh non mauris. Quisque
        hendrerit magna et ligula scelerisque, finibus eleifend orci tempus.
        Maecenas tempus ultrices dictum. Aenean lacinia lacus neque, eget
        vehicula tortor placerat sed. Aliquam sagittis mi ac congue hendrerit.{" "}
      </Typography>
    </>
  );
}
