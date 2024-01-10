"use client";
import { Breadcrumbs, Button, Link, Stack, Typography } from "@mui/joy";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();
  return (
    <Stack>
      <Breadcrumbs
        aria-label="breadcrumbs"
        separator={<Typography level="h1" color='neutral'>/</Typography>}
        sx={{ p: 0 }}
      >
        {[{ displayName: "Projects", url: "/projects" }].map((page, idx) => (
          <Typography level="h1">
            <Link component={NextLink} href={page.url} passHref color="neutral">
              {page.displayName}
            </Link>
          </Typography>
        ))}
        <Typography level="h1">Old</Typography>
      </Breadcrumbs>

      <Typography>
        <Link component={NextLink} href="old/2023-fall">
          Fall 2023
        </Link>
      </Typography>
    </Stack>
  );
}
