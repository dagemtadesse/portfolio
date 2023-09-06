"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { Twitter, GitHub, Mail, Linkedin } from "react-feather";

import { container, fadeIn } from "./animations";
import { IconButton } from "./button/IconButton";

export const Socials = ({
  variant,
  layoutStyle,
}: {
  variant: "sm" | "lg";
  layoutStyle?: string;
}) => {
  const iconStyle = classNames({
    "stroke-1 text-base": variant == "sm",
  });
  return (
    <motion.ul
      className={classNames("flex items-center gap-4 text-lg ", {
        [`${layoutStyle}`]: true,
      })}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <motion.li variants={fadeIn}>
        <IconButton link="mailto:dagem.seyfu@gmail.com">
          <Mail className={iconStyle} />
        </IconButton>
      </motion.li>
      <motion.li variants={fadeIn}>
        <IconButton link="https://www.linkedin.com/in/dagem-tadesse-s/">
          <Linkedin className={iconStyle} />
        </IconButton>
      </motion.li>
      <motion.li variants={fadeIn}>
        <IconButton link="https://twitter.com/dagemstadesse">
          <Twitter className={iconStyle} />
        </IconButton>
      </motion.li>
      <motion.li variants={fadeIn}>
        <IconButton link="https://github.com/dagemtadesse">
          <GitHub className={iconStyle} />
        </IconButton>
      </motion.li>
    </motion.ul>
  );
};
