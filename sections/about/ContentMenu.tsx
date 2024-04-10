"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import { Box, List, ListItem, ListItemButton, Typography } from "@mui/material";

export const ContentMenu = () => {
  const [visiblityRatio, setVisibilityRatio] = useState({});

  useEffect(() => {
    const options = {
      threshold: 0.55,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      let ratios: { [key: string]: number } = {};

      entries.forEach((entry) => {
        const id = entry.target.getAttribute("data-section-id");
        const ratio = entry.intersectionRatio;

        if (id) ratios[id] = ratio;
      });

      setVisibilityRatio((val) => {
        return { ...val, ...ratios };
      });
    }, options);

    document.querySelectorAll(".scroll-target").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const [activeMenu, _] = Object.entries<number>(visiblityRatio)
    .sort(([key1, val1], [key2, val2]) => val2 - val1)
    .at(0) || ["0", 0];

  return (
    <List
      sx={{
        gap: 3,
        my: 3,
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
      }}
    >
      <ContentMenuItem active={+activeMenu == 0} target={"background"}>
        Education and Background
      </ContentMenuItem>
      <ContentMenuItem active={+activeMenu == 1} target={"skills"}>
        Skills and Proficiency
      </ContentMenuItem>
      <ContentMenuItem active={+activeMenu == 2} target={"experience"}>
        Work History
      </ContentMenuItem>
      <ContentMenuItem active={+activeMenu == 3} target={"projects"}>
        Selected Projects
      </ContentMenuItem>
    </List>
  );
};

const ContentMenuItem = ({
  children,
  active,
  target,
}: {
  children: string;
  active?: boolean;
  target: string;
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton
        href={`#${target}`}
        sx={{ display: "flex", gap: 2, alignItems: "center" }}
      >
        <Box
          sx={{
            height: 8,
            bgcolor: "#fff",
            transition: "all 300 ease-in",
            width: active ? 48 : 8,
          }}
        />
        <Typography fontWeight={"medium"}>{children}</Typography>
      </ListItemButton>
    </ListItem>
  );
};
