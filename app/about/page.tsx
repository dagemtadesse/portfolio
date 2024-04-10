import { Metadata } from "next";

import { BackgroundInfoSection } from "../../sections/about/BackgroundInfo";
import { SkillsSection } from "../../sections/about/Skills";
import { ExperienceSection } from "../../sections/about/Experience";
import { SelectedProjectsSection } from "../../sections/about/SelectedProject";
import { Socials } from "../../components/Socials";
import { ContentMenu } from "../../sections/about/ContentMenu";
import { Container, Grid, Stack, Typography } from "@mui/material";

export default function Page() {
  return (
    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} md={5}>
          <Stack
            justifyContent="space-between"
            sx={{ top: 64, position: "sticky", py: 4, gap: 4 }}
            position={"sticky"}
            className="w-[83.33%] bg-yelow-400 lg:h-[calc(100vh-64px)] py-8 flex flex-col justify-between"
          >
            <div>
              <Typography
                component={"h1"}
                fontWeight={"medium"}
                textTransform={"uppercase"}
                gutterBottom
                variant="h5"
              >
                Dagem Tadesse
              </Typography>
              <Typography component={"h1"} variant="body1">
                Full-stack Software engineer & UI designer
              </Typography>
              <Typography
                component={"p"}
                variant="body1"
                color="text.secondary"
                mt={3}
              >
                I build accessible, inclusive products and digital experiences
                for the web.
              </Typography>
            </div>

            <ContentMenu />

            <Stack direction="row" gap={2}>
              <Socials direction="row" />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Stack gap={5} py={2}>
            <BackgroundInfoSection id={0} />
            <SkillsSection id={1} />
            <ExperienceSection id={2} />
            <SelectedProjectsSection id={3} />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "About | Dagem Tadesse",
};
