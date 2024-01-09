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
import NavDrawer from "./NavDrawer";
import TopBar from "./TopBar";
import Footer from "./Footer";
config.autoAddCss = false;

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Project: Code",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html lang="en">
    //   <head>
    //     <meta name="viewport" content="initial-scale=1, width=device-width" />
    //   </head>
    //   <CssVarsProvider theme={extendTheme({typography: {}})}>

    //     {children}
    //   </CssVarsProvider>
    // </html>
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <Box
            sx={{
              maxWidth: 1150,
              marginX: "auto",
              // paddingX: {sm: 5, lg: 0},
              paddingX: { xs: 2.5, sm: 3, lg: 0 },
            }}
            id="page-container"
          >
            <TopBar />

            <Box
              id="content-wrap"
              // sx={
              //   {
              //     // backgroundColor: 'red'
              //   }
              // }
            >
              {children}
            </Box>

            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
} // app/layout.tsx
// export default function RootLayout() {
//   const { children } = props;
//   return (
//     <html lang="en">
//       <body>
//         <ThemeRegistry options={{ key: 'joy' }}>{children}</ThemeRegistry>
//       </body>
//     </html>
//   );
// }
