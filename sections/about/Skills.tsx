"use client";

import { Heading } from "../../components/Heading";
import { Box, LinearProgress, Stack, Typography } from "@mui/material";

export const SkillsSection = ({ id }: { id: number }) => {
  return (
    <Box
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="skills"
      sx={{ scrollMarginTop: 64 }}
    >
      <Heading>Skills and Proficiency</Heading>

      <Stack gap={2} mt={3}>
        <Skill name="JavaScript & TypeScript" level="expert" />
        <Skill name="Node.js" level="advanced" />
        <Skill name="React & Next.js" level="advanced" />
        <Skill name="TailwindCSS" level="expert" />
        <Skill name="MUI" level="advanced" />
        <Skill name="Angular" level="advanced" />
        <Skill name=".NET" level="competent" />
      </Stack>
    </Box>
  );
};

const SkillLevels = {
  expert: 99,
  advanced: 80,
  competent: 65,
} as const;

const Skill = ({
  name,
  level,
}: {
  name: string;
  level: keyof typeof SkillLevels;
}) => {
  return (
    <Box>
      <Stack direction="row" justifyContent={"space-between"} mb={1}>
        <Typography fontWeight={"medium"}>{name}</Typography>
        <Typography variant="body2" textTransform="uppercase">
          {level}
        </Typography>
      </Stack>
      <LinearProgress
        value={SkillLevels[level]}
        variant="determinate"
        sx={{ height: 8 }}
      />
    </Box>
  );
};
