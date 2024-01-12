"use client";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { IconButton, Link, Typography } from "@mui/joy";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Drawer from "@mui/joy/Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import NextLink from "next/link";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import { NAV_LINKS } from "./TopBar";

export default function NavDrawer() {
  const [open, setOpen] = React.useState(false);

  const thing = CalendarMonthIcon;
  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <Button variant="outlined" color="neutral" onClick={toggleDrawer(true)}>
        Open drawer
      </Button> */}

      <IconButton
        size="lg"
        onClick={toggleDrawer(true)}
        sx={{
          display: { xs: "flex", sm: "none" },
          height: 20,
          // backgroundColor: "red",
          alignSelf: "center",
        }}
      >
        <MenuIcon sx={{ color: "text.primary" }} />
      </IconButton>

      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
        anchor="right"
        sx={{ "--Drawer-transitionDuration": "0.2s" }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
          sx={{ pt: 1 }}
        >
          <List sx={{ display: "flex" }}>
            {/* Close button */}
            <IconButton
              size="lg"
              onClick={toggleDrawer(false)}
              sx={{
                height: 20,
                marginRight: 2,
                // backgroundColor: "red",
                alignSelf: "flex-end",
              }}
            >
              <CloseIcon sx={{ color: "text.primary" }} />
            </IconButton>

            {/* Links to pages */}
            {NAV_LINKS.map((page, idx) => (
              <ListItem key={idx}>
                <ListItemButton
                  component={NextLink}
                  href={page.href}
                  sx={{ py: 2 }}
                  passHref
                >
                  <Typography
                    level="h4"
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      // color: "primary.400",
                    }}
                  >
                    {React.createElement(page.icon, {
                      sx: { mr: 1, color: "primary.400" },
                    })}
                    <Typography sx={{ color: "text.primary" }}>
                      {page.title}
                    </Typography>
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
            {/* <Box
              sx={{
                backgroundColor: "red",
                position: "absolute",
                right: 0,
                marginRight: 2,
              }}
            >
 
            </Box> */}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
