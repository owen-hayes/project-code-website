"use client";
import "@fontsource/inter";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { Box, Link, Typography } from "@mui/joy";
import NextLink from "next/link";
import "../globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import InfoIcon from "@mui/icons-material/Info";
import Image from "next/image";
import React from "react";
import NavDrawer from "./NavDrawer";

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
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: 1,
      }}
    >
      {/* Logo */}
      <Link
        component={NextLink}
        href="/"
        style={{ WebkitUserSelect: "none" }} // Disable select text in image on Safari
        passHref
      >
        <Image
          src="/project-code.svg"
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
        }}
      >
        {NAV_LINKS.map((link, idx) => (
          <Typography
            key={idx}
            level="h4"
            sx={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <Link component={NextLink} href={link.href} passHref>
              {React.createElement(link.icon, {
                sx: { mr: 1 },
              })}
              <Typography sx={{ color: "text.primary" }}>
                {link.title}
              </Typography>
            </Link>
          </Typography>
        ))}
      </Box>

      {/* Nav Drawer only shown on mobile */}
      <NavDrawer />
    </Box>
  );
}
