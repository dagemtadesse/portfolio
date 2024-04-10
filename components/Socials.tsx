"use client";

import { Twitter, GitHub, Mail, Linkedin } from "react-feather";

import { IconButton, Stack } from "@mui/material";

export const Socials = ({
  direction = "row",
}: {
  direction: "row" | "column";
}) => {
  const iconStyles = {
    strokeWidth: 1,
  };
  return (
    <>
      <IconButton href="mailto:dagem.seyfu@gmail.com">
        <Mail {...iconStyles} />
      </IconButton>

      <IconButton href="https://www.linkedin.com/in/dagem-tadesse-s/">
        <Linkedin {...iconStyles} />
      </IconButton>

      <IconButton href="https://twitter.com/dagemstadesse">
        <Twitter {...iconStyles} />
      </IconButton>

      <IconButton LinkComponent={"a"} href="https://github.com/dagemtadesse">
        <GitHub {...iconStyles} />
      </IconButton>
    </>
  );
};
