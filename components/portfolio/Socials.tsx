import { useEffect, useState } from "react";
import { animated, useSpring, useTrail } from "react-spring";
import { Pages } from "../../pages/_app";
import EmailIcon from "../icons/EmailIcon";
import LinkedInIcon from "../icons/LinkedIn";
import TwitterIcon from "../icons/TwitterIcon";
import DownloadButton from "./DownloadButton";

export const SOCIALS = [
  {
    icon: <EmailIcon />,
    handle: "dagem.seyfu@gmail.com",
    href: "mailto:dagem.seyfu@gmail.com",
  },
  {
    icon: <LinkedInIcon />,
    handle: "@dagem-tadesse-s",
    href: "https://www.linkedin.com/in/dagem-tadesse-s/",
  },
  {
    icon: <TwitterIcon />,
    handle: "@dagemstadesse",
    href: "https://twitter.com/dagemstadesse",
  },
];

const Socials = ({}: {}) => {
  // const trail = useTrail(SOCIALS.length, {
  //   config: { mass: 5, tension: 2000, friction: 200 },
  //   from: { opacity: 0 },
  //   to: { opacity: 1 },
  //   ref: animationRef,
  // });

  return (
    <div className="flex items-center gap-12 my-6">
      {SOCIALS.map((social, index) => (
        <Social {...social} key={index} />
      ))}
    </div>
  );
};

const Social = ({
  icon,
  href,
}: {
  icon: JSX.Element;
  handle: string;
  href: string;
}) => {
  return <a href={href} target="_blank">{icon}</a>;
};

export default Socials;
