// "use client";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import LaunchIcon from "@mui/icons-material/Launch";
import { Card, CardContent, Chip, Divider, Grid, Typography } from "@mui/joy";

import { MEETINGS } from "../meetings";

export default function MeetingsAndEvents() {
  return (
    <>
      <Typography level="h2">Meetings and Events</Typography>

      {/* Chip buttons to subscribe to Apple/Google calendar feed */}
      <Grid container spacing={0.5}>
        {/* Grid item with chip button for Google Calendar subscription */}
        <Grid>
          <Chip
            variant="outlined"
            startDecorator={<AppleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                // Make it a link
                component: "a",

                /*
                    Format for iOS subscription link to Google Calendar is:
                    "webcal://calendar.google.com/calendar/ical/[CALENDAR ID]/public/basic.ics"
  
                    Calendar ID can be found in:
                    Google Calendar settings > [Calendar Name] > Integrate calendar
                  */
                href: "webcal://calendar.google.com/calendar/ical/h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com/public/basic.ics",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            Subscribe to Apple Calendar
          </Chip>
        </Grid>

        {/* Grid item with chip button for Google Calendar subscription */}
        <Grid>
          <Chip
            variant="outlined"
            startDecorator={<GoogleIcon />}
            endDecorator={<LaunchIcon />}
            slotProps={{
              action: {
                component: "a",

                /*
                    Format for Google Calendar subscription:
                    "https://calendar.google.com/calendar/render?cid=[CALENDAR ID]"
  
                    Calendar ID can be found in:
                    Google Calendar settings > [Calendar Name] > Integrate calendar
                  */
                href: "https://calendar.google.com/calendar/render?cid=h9el7b7k8413uo9m49f1h7brpc@group.calendar.google.com",
              },
            }}
            sx={{ fontWeight: 600, fontSize: "md" }}
          >
            Subscribe to Google Calendar
          </Chip>
        </Grid>
      </Grid>

      {/* Grid for meetings */}
      <Grid container spacing={2} alignItems="stretch" mt={1}>
        {MEETINGS.map((meeting, idx) => (
          // Take full width on mobile, half width (6/12) on "sm", and third width (4/12) on "md"+
          <Grid xs={12} sm={6} md={4} key={idx}>
            {/* Height expands to match adjacent card if necessary */}
            <Card variant="soft" sx={{ height: "100%" }}>
              <CardContent>
                {/* Always show title */}
                <Typography level="title-lg">{meeting.title}</Typography>

                {/* Only show date if it exists */}
                {meeting.date && meeting.date !== "" && (
                  <Typography level="title-md">{meeting.date}</Typography>
                )}

                {/* Only show location if it exists */}
                {meeting.location && meeting.location !== "" && (
                  <Chip
                    variant="solid"
                    color="primary"
                    endDecorator={<LaunchIcon />}
                    slotProps={{
                      action: {
                        component: "a",
                        href: meeting.locationLink,
                      },
                    }}
                    sx={{ fontWeight: 600, fontSize: "md", mb: 1.5 }}
                  >
                    {meeting.location}
                  </Chip>
                )}

                <Divider sx={{ mt: 0.5, mb: 1 }} />

                {/* Only show description if it exists */}
                {meeting.description !== "" && (
                  <Typography>{meeting.description}</Typography>
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
