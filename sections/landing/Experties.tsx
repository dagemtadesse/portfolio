"use client";

import { ExpertiesCard } from "../../components/cards/ExpertiesCard";
import { Heading } from "../../components/Heading";

import { UxDesign } from "../../components/icons/ux-design";
import { WebDevelopment } from "../../components/icons/web-development";
import { MobileDevelopment } from "../../components/icons/mobile-development";
import { Grid } from "@mui/material";

export const Expertise = () => {
  return (
    <>
      <Heading>My Expertise</Heading>

      <Grid
        container
        spacing={3}
        mt={2}
        className="grid grid-cols-4 lg:grid-cols-12 mt-8 gap-4 items-stretch"
      >
        <Grid item xs={12} lg={4}>
          <ExpertiesCard
            image={<WebDevelopment />}
            description="I'm well-versed in modern front-end frameworks like React and Angular, and I love diving into full-stack development."
            title="Web App Development"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ExpertiesCard
            image={<UxDesign />}
            description="I have a natural eye for design and I'm really comfortable using tools like Figma and Adobe XD. "
            title="UI/UX design"
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <ExpertiesCard
            image={<MobileDevelopment />}
            description="I craft visually appealing mobile apps utilizing cross-platform frameworks such as Flutter and React Native."
            title="Mobile App Development"
          />
        </Grid>
      </Grid>
    </>
  );
};
