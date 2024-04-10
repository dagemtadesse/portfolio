"use client";

import { ArrowDown } from "react-feather";

import { WorkCard, WorkCardProps } from "../../components/cards/WorkCard";
import { WORKS } from "../../components/data";
import { Heading } from "../../components/Heading";
import { Button, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

export const Works = ({ maxItems }: { maxItems?: number }) => {
  return (
    <>
      <Heading>My Works</Heading>

      <Grid container spacing={3}>
        {WORKS.map((work, index) => (
          <CardColumn
            title={work.group}
            items={work.items.slice(0, maxItems)}
            vertical={Boolean(maxItems)}
            key={"work_card" + index}
          />
        ))}
      </Grid>

      {maxItems && (
        <Stack alignItems={"center"}>
          <Button
            component={Link}
            variant="outlined"
            color="secondary"
            href="/works"
            sx={{ mt: 1.5 }}
          >
            View Project Archive
          </Button>
        </Stack>
      )}
    </>
  );
};

export const RowHeader = ({ children }: { children: string }) => {
  return (
    <Stack direction="row" alignItems="center" gap={1}>
      <Typography
        variant="subtitle1"
        textTransform={"uppercase"}
        fontWeight={"medium"}
      >
        {children}
      </Typography>
      <ArrowDown size={16} strokeWidth={1} />
    </Stack>
  );
};

export const CardColumn = ({
  title,
  items,
  vertical,
}: {
  title: string;
  items: WorkCardProps[];
  vertical: boolean;
}) => {
  return (
    <Grid item xs={12} md={vertical ? 6 : 12} lg={vertical ? 4 : 12}>
      <Grid container spacing={1.5}>
        <Grid item xs={12}>
          <RowHeader>{title}</RowHeader>
        </Grid>
        {items.map((item, index) => (
          <Grid item xs={12} md={vertical ? 12 : 6} lg={vertical ? 12 : 4}>
            <WorkCard {...item} key={`${title}-${index}`} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
