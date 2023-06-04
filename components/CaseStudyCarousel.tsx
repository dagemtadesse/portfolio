"use client";

import { useState, useEffect } from "react";
import classNames from "classnames";
import Image from "next/image";
import { ArrowRight } from "react-feather";
import Link from "next/link";

export const CaseStudyCarouselItem = ({
  active,
  selector,
  id,
}: {
  active: number;
  id: number;
  selector: (id: number) => void;
}) => {
  const isActive = active == id;
  const [isSm, setIsSm] = useState(false);

  useEffect(() => {
    const listener = () => {
      setIsSm(window.matchMedia("(max-width: 1024px)").matches);
    };

    listener();
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  });

  return (
    <div
      className={classNames(
        "border border-customBlack relative h-full lg:basis-[100px] overflow-hidden basis-auto cursor-pointer ease-out transition-all duration-300 group grow shrink-0 ",
        {
          "lg:grow": isActive,
          "lg:grow-0": !isActive,
        }
      )}
      onClick={() => selector(id)}
    >
      <Image
        src="/v3/picture/web-dev-1.jpeg"
        alt="picture"
        fill
        className="group-hover:scale-105 transition-all duration-200 ease-linear object-cover"
      />
      <div className="h-full relative z-10 bg-opacity-25 text-white flex flex-col justify-end py-5 px-6 bg-gradient-to-b from-[rgba(0,0,0,0.25)] to-[rgba(0,0,0,0.85)] hover:from-[rgba(0,0,0,0.15)] hover:to-[rgba(0,0,0,0.65)] duration-300 transition-color ease-linear">
        <h4
          className={classNames("text-lg font-medium mt-32 ", {
            "lg:hidden": !isActive,
          })}
        >
          Lorem ipsum dolor sit amet
        </h4>
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
          <p className={classNames("text-sm mt-4", { "lg:hidden": !isActive })}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            augue lacus, bibendum eget bibendum sit amet, viverra nec lacus. Ut
            faucibus lorem sed porta sodales.
          </p>
          <Link href="/case-study/1">
            <button
              className={classNames(
                "bg-white text-customBlack px-4 py-2 mt-6 whitespace-nowrap flex gap-4 items-center  transition-all duration-300 ease-in-out hover:pr-2 hover:gap-6 hover:bg-[#eee]",
                {
                  "lg:w-full text-center justify-center": !isActive,
                  "justify-between": isActive,
                }
              )}
            >
              {isActive || isSm ? "view more" : id}
              <div className={classNames({ "lg:hidden": !isActive })}>
                <ArrowRight />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export const CaseStudyCarousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <div className="flex gap-4 lg:h-[450px] flex-col lg:flex-row shrink-0 grow">
      <CaseStudyCarouselItem
        active={currentItem}
        selector={setCurrentItem}
        id={0}
      />
      <CaseStudyCarouselItem
        active={currentItem}
        selector={setCurrentItem}
        id={1}
      />
      <CaseStudyCarouselItem
        active={currentItem}
        selector={setCurrentItem}
        id={2}
      />
    </div>
  );
};
