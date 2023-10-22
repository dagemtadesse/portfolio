"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";

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
    <>
      <ul className="hidden lg:flex flex-col gap-6 my-10">
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
      </ul>
    </>
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
    <li>
      <a href={`#${target}`} className="flex gap-4 items-center cursor-pointer">
        <div
          className={classNames(
            "h-2  bg-white transition-all duration-200 ease-in",
            {
              " w-12": active,
              " w-2": !active,
            }
          )}
        ></div>
        <h3
          className={classNames(
            "transition-all duration-200 ease-in text-white",
            {
              "text-opacity-100 text-lg font-medium": active,
              "text-opacity-75": !active,
            }
          )}
        >
          {children}
        </h3>
      </a>
    </li>
  );
};
