import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fontsource/inter";
import {
  Box,
  CssBaseline,
  CssVarsProvider,
  Link,
  Sheet,
  Typography,
  extendTheme,
} from "@mui/joy";
import ThemeRegistry from "./ThemeRegistry";
import NextLink from "next/link";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HomeIcon from "@mui/icons-material/Home";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Image from "next/image";
import NavDrawer from "./_components/NavDrawer";
import TopBar from "./_components/TopBar";
import Footer from "./_components/Footer";
config.autoAddCss = false;


export const metadata: Metadata = {
  title: "Project: Code",
  description:
    "Project: Code is a programming and Computer Science-based RSO at UIUC which allows students to pursue their interests in programming topics with group-based projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <Box
            sx={{
              maxWidth: "lg", // "lg" = 1200 px (https://mui.com/material-ui/customization/breakpoints/)
              marginX: "auto", // Center on page
              paddingX: { xs: 2.5, sm: 3 },
            }}
            id="page-container"
          >
            <TopBar />

            <Box id="content-wrap">{children}</Box>

            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
