"use client";

import classNames from "classnames";
import { useEffect, useState } from "react";
import { GitHub, Twitter, Mail, Linkedin } from "react-feather";

import { Container } from "../../components/Container";
import { BackgroundInfoSection } from "../../sections/about/BackgroundInfo";
import { SkillsSection } from "../../sections/about/Skills";
import { ExperienceSection } from "../../sections/about/Experience";
import { SelectedProjectsSection } from "../../sections/about/SelectedProject";
import { Socials } from "../../components/Socials";

export default function Page() {
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
    <Container className="grid grid-cols-12 justify-between items-start ">
      <div className="col-span-12 lg:col-span-6 lg:sticky top-[64px] ">
        <div className="w-[83.33%] bg-yelow-400 lg:h-[calc(100vh-64px)] py-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl uppercase font-medium">Dagem Tadesse</h1>
            <h2 className="text-xl text-darkerGrey  mt-2 ">
              Full-stack Software engineer & UI designer
            </h2>
            <p className="text-darkerGrey mt-6">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>

          <ul className="hidden lg:flex flex-col gap-6 my-10">
            <ContentMenu active={+activeMenu == 0} target={"background"}>
              Education and Background
            </ContentMenu>
            <ContentMenu active={+activeMenu == 1} target={"skills"}>
              Skills and Proficiency
            </ContentMenu>
            <ContentMenu active={+activeMenu == 2} target={"experience"}>
              Work History
            </ContentMenu>
            <ContentMenu active={+activeMenu == 3} target={"projects"}>
              Selected Projects
            </ContentMenu>
          </ul>

          <div className="hidden lg:flex gap-6">
            <Socials variant="lg"/>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 text-darkerGrey text-base flex flex-col gap-12 py-8">
        <BackgroundInfoSection id={0} />
        <SkillsSection id={1} />
        <ExperienceSection id={2} />
        <SelectedProjectsSection id={3} />
      </div>
    </Container>
  );
}

const ContentMenu = ({
  children,
  active,
  target,
}: {
  children: string;
  active?: boolean;
  target: string;
}) => {
  return (
    <li>
      <a href={`#${target}`} className="flex gap-4 items-center cursor-pointer">
        <div
          className={classNames(
            "h-2  bg-customBlack transition-all duration-200 ease-in",
            {
              "w-12": active,
              "w-2": !active,
            }
          )}
        ></div>
        <h3
          className={classNames("transition-all duration-200 ease-in", {
            " text-customBlack text-lg font-medium": active,
            "text-darkerGrey": !active,
          })}
        >
          {children}
        </h3>
      </a>
    </li>
  );
};
