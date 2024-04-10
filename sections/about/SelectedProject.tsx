"use client";

import { useState } from "react";

import { WorkCard } from "../../components/cards/WorkCard";
import { Heading } from "../../components/Heading";
import { WORKS } from "../../components/data";
import { Box, Pagination } from "@mui/material";

export const SelectedProjectsSection = ({ id }: { id: number }) => {
  const works = WORKS.map((work) => work.items).flat();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Box
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="projects"
      sx={{ scrollMarginTop: 64 }}
    >
      <Heading>Selected Projects</Heading>

      <Box mt={3} key={works[currentPage]?.id}>
        <WorkCard {...works[currentPage - 1]} />
      </Box>

      <Pagination
        count={works.length}
        size="small"
        sx={{ mt: 3 }}
        onChange={(_, page) => setCurrentPage(page)}
      />
    </Box>
  );
};
