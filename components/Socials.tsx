"use client"

import { motion } from "framer-motion";
import Link from "next/link";
import classNames from "classnames";
import { Twitter, GitHub, Mail, Linkedin } from "react-feather";

import { container, fadeIn } from "./animations";

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
        <Link href="">
          <Mail className={iconStyle} />
        </Link>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link href="">
          <Linkedin className={iconStyle} />
        </Link>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link href="">
          <Twitter className={iconStyle} />
        </Link>
      </motion.li>
      <motion.li variants={fadeIn}>
        <Link href="">
          <GitHub className={iconStyle} />
        </Link>
      </motion.li>
    </motion.ul>
  );
};
