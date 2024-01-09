"use client";
import { Box, Button, Typography, useColorScheme, useTheme } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Page() {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();

  return <Typography>Projects</Typography>;

  const [thing, setThing] = useState("purple");

  useEffect(() => {
    console.log(theme);
    setThing(theme.palette.mode === "dark" ? "white" : "purple");
  }, []);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // to avoid layout shift, render a placeholder button
    return <Button variant="outlined" color="neutral" sx={{ width: 120 }} />;
  }

  return (
    <Button
      variant="outlined"
      color="neutral"
      onClick={() => setMode(mode === "dark" ? "light" : "dark")}
    >
      {mode === "dark" ? "Turn light" : "Turn dark"}
    </Button>
  );

  // return (
  //   <Box>
  //     <Typography>hello</Typography>

  //     <Typography
  //       level="h4"
  //       sx={{ color: thing }}
  //     >
  //       Calendar
  //     </Typography>
  //   </Box>
  // );
}
