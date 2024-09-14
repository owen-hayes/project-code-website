"use client";
import { Grid, Link, Stack, Typography } from "@mui/joy";
import PMApplicationCard from "../projects/_components/PMApplicationCard";
import BioCard from "./_components/BioCard";
import { EXEC } from "./_people/exec";
import { PROJECT_MANAGERS } from "./_people/project-managers";

export default function Page() {
  return (
    <Stack>
      <Typography mt={3} mb={2} level="h1">About us</Typography>

      <Typography level="body-lg">
        Project: Code was founded in 2019 to provide UIUC students of all
        academic backgrounds an opportunity to learn and develop their skills
        across a variety of Computer Science (CS) areas / domains. In addition
        to offering projects for students to contribute to, we also host résumé
        reviews as well as networking and company events from organizations like
        Uber and SIG to help students prepare for their careers.
      </Typography>

      <Typography level="body-lg" mt={2}>
        Each semester, we offer a variety of projects for students to contribute
        to. In the past, these projects have focused on domains of CS like web
        development, app development, data visualization, data science, hardware
        engineering, machine learning, artificial intelligence, virtual reality,
        and game development. Each project is led by a Project Manager (PM){" "}
        {/* (TODO: Link to new PM page to explain and have link to form)  */}
        who has experience working with a certain area of CS.
      </Typography>

      <Typography level="body-lg" mt={2}>
        In the first few weeks of the semester, we ask students to pick the
        project they are most interested in working on. Then, we match people to
        project groups based on their preferences and past experience.{" "}
        <Typography fontStyle="italic">
          Due to the large number of applicants and a limited number of Project
          Managers, we are usually unable to match everyone to a group. The best
          way to increase your chances of joining a group is to clearly state
          and demonstrate your interest in the Project Matching Form.
        </Typography>
      </Typography>

      <Typography level="body-lg" mt={2}>
        Throughout the semester, students meet weekly with their project group
        to work towards the final goal of the project. Project members present
        their progress to the rest of the organization halfway through the
        semester and also give a final presentation about their project at the
        end of the semester!
      </Typography>

      {/* <Divider sx={{ my: 3 }} /> */}

      <Typography level="h2" mt={3} mb={2}>
        Exec Board
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {EXEC.map((member) => (
          <Grid xs={6} sm={4} md={3} lg={2.4}>
            <BioCard
              name={member.name}
              initials={member.initials}
              role={member.role}
              linkedInURL={member.linkedInURL}
              photoURL={member.photoURL}
            />
          </Grid>
        ))}
      </Grid>

      <Typography level="h2" mt={5} mb={2}>
        Project Managers
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {PROJECT_MANAGERS
          // Sort alphabetically by name
          .sort((a, b) => (a.name < b.name ? -1 : 1))

          // Map each PM to a BioCard
          .map((pm) => (
            <Grid xs={6} sm={4} md={3} lg={2.4}>
              <BioCard
                name={pm.name}
                initials={pm.initials}
                role={pm.role}
                linkedInURL={pm.linkedInURL}
                photoURL={pm.photoURL}
              />
            </Grid>
          ))}

        {/* Update PMApplicationCard as necessary */}
        {/* <Grid xs={12} sm={6} md={6} lg={4}>
          <PMApplicationCard />
        </Grid> */}
      </Grid>

      <Typography level="h2" mt={5} mb={1}>
        Contact
      </Typography>
      <Typography>
        For general inquiries, please contact us at{" "}
        <Link href="mailto:project.code.uiuc@gmail.com">
          project.code.uiuc@gmail.com
        </Link>
        .
      </Typography>
    </Stack>
  );
}
