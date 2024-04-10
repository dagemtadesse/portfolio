"use client";

import { InfoCard } from "../../components/cards/InfoCards";
import { Heading } from "../../components/Heading";
import { Cap } from "../../components/icons/cap";
import { Cert } from "../../components/icons/cert";
import { Box, Stack, Typography } from "@mui/material";

export const BackgroundInfoSection = ({ id }: { id: number }) => {
  return (
    <Box
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="background"
      sx={{ scrollMarginTop: 64 }}
    >
      <Heading>Education and Background</Heading>

      <Typography>
        As a software engineer, I am driven by creativity and enthusiasm,
        particularly when it comes to front-end development and the web in
        general. I also dabble with mobile app development and find great joy in
        exploring UI/UX design. I possess a genuine passion for exploring new
        technologies, constantly seeking opportunities to expand my horizons and
        embrace innovative approaches.
      </Typography>

      <Stack gap={2} mt={3}>
        <InfoCard
          title="Addis Ababa University"
          description={`Bachelorof Science in Software Engineering and Computing
               Technology Software Engineering Stream`}
          date="October 2019 - July 2024"
          icon={<Cap />}
        />
        <InfoCard
          title="Addis Ababa University"
          description={`Bachelorof Science in Software Engineering and Computing
               Technology Software Engineering Stream`}
          date="October 2019 - July 2024"
          icon={<Cert />}
        />
      </Stack>
    </Box>
  );
};
