"use client";

import { Heading } from "../../components/Heading";
import { EXPERIENCES } from "../../components/data";
import { Box, Card, CardContent, Chip, Stack, Typography } from "@mui/material";

export const ExperienceSection = ({ id }: { id: number }) => {
  return (
    <Box
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="experience"
      sx={{ scrollMarginTop: 64 }}
    >
      <Box sx={{ mb: 3 }}>
        <Heading>Work History</Heading>
      </Box>
      <Stack>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceTimeLine {...exp} key={"exp" + index} />
        ))}
      </Stack>
    </Box>
  );
};

const ExperienceTimeLine = ({
  duration,
  title,
  techs,
}: {
  duration: string;
  title: string;
  techs: string[];
}) => {
  return (
    <Card sx={{ display: "flex", position: "relative" }}>
      <Box sx={{ width: 16, position: "relative" }}>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 7,
            height: "100%",
            width: "2px",
            background: "#fff",
          }}
        />
        <Box
          sx={{
            width: 16,
            height: 16,
            mt: 2,
            bgcolor: "background.paper",
            border: "2px solid #fff",
            borderRadius: "50%",
            position: "relative",
          }}
        />
      </Box>
      <CardContent>
        <Typography
          textTransform="uppercase"
          variant="body2"
          fontWeight={"medium"}
          color="text.secondary"
          gutterBottom
        >
          {duration}
        </Typography>
        <Typography fontWeight={"medium"}>{title}</Typography>
        <Stack flexWrap={"wrap"} direction="row" mt={1} gap={1}>
          {techs.map((tech, index) => (
            <Chip key={`${title}${index}`} label={tech} />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};
