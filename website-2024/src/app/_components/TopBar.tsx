"use client";
import "@fontsource/inter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { Box, Link, Typography } from "@mui/joy";
import NextLink from "next/link";
import "../globals.css";
import { useTheme } from "@mui/joy/styles";

import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import NavDrawer from "./NavDrawer";
import InfoIcon from '@mui/icons-material/Info';
import React from "react";

export const NAV_LINKS = [
  {
    href: "/about",
    title: "About",
    icon: InfoIcon,
  },
  {
    href: "/projects",
    title: "Projects",
    icon: DeveloperBoardIcon,
  },
];

export default function TopBar() {
  const theme = useTheme(); // The runtime theme.
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // maxWidth: 1150,
        // marginX: 'auto',
        // paddingX: {xs: 1.5, sm: 3, lg: 0},
        paddingY: 1,
      }}
    >
      {/* Logo */}
      <Link
        component={NextLink}
        href="/"
        style={{ WebkitUserSelect: "none" }} // Disable select text in image on Safari
      >
        <Image
          src="project-code.svg"
          alt="Project: Code logo"
          width={100}
          height={100}
        />
      </Link>

      {/* Area for links */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 10,
          color: "pageLink.primary",
        }}
      >
        {NAV_LINKS.map((link) => (
          <Typography
            level="h4"
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Link component={NextLink} href={link.href}>
              {React.createElement(link.icon, {
                sx: { mr: 1 },
              })}
              <Typography sx={{ color: "text.primary" }}>{link.title}</Typography>
            </Link>
          </Typography>
        ))}

        {/* <Typography
          level="h4"
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link component={NextLink} href="/calendar">
            <CalendarMonthIcon sx={{ mr: 1 }} />
            <Typography sx={{ color: "text.primary" }}>Calendar</Typography>
          </Link>
        </Typography>

        <Typography
          level="h4"
          sx={{
            alignItems: "center",
            display: "flex",
          }}
        >
          <Link component={NextLink} href="/projects">
            <DeveloperBoardIcon sx={{ mr: 1 }} />
            <Typography sx={{ color: "text.primary" }}>Projects</Typography>
          </Link>
        </Typography> */}
      </Box>

      <NavDrawer />
    </Box>
  );
}
