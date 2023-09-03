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
      className={classNames("flex items-center gap-6 text-lg ", {
        [`${layoutStyle}`]: true,
      })}
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <motion.li variants={fadeIn}>
        <a href="mailto:dagem.seyfu@gmail.com">
          <Mail className={iconStyle} />
        </a>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link
          href="https://www.linkedin.com/in/dagem-tadesse-s/"
          target="_blank"
        >
          <Linkedin className={iconStyle} />
        </Link>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link href="https://twitter.com/dagemstadesse" target="_blank">
          <Twitter className={iconStyle} />
        </Link>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link href="https://github.com/dagemtadesse" target="_blank">
          <GitHub className={iconStyle} />
        </Link>
      </motion.li>
    </motion.ul>
  );
};
