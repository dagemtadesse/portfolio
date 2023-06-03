import { ReactNode } from "react";
import { Twitter, GitHub, Mail, Linkedin } from "react-feather";
import Link from "next/link";
import classNames from "classnames";

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
    <ul
      className={classNames("flex items-center gap-6 text-lg ", {
        [`${layoutStyle}`]: true,
      })}
    >
      <li>
        <Link href="">
          <Mail className={iconStyle} />
        </Link>
      </li>
      <li>
        <Link href="">
          <Linkedin className={iconStyle} />
        </Link>
      </li>
      <li>
        <Link href="">
          <Twitter className={iconStyle} />
        </Link>
      </li>
      <li>
        <Link href="">
          <GitHub className={iconStyle} />
        </Link>
      </li>
    </ul>
  );
};
