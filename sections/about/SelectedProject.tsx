"use client";

import { useState } from "react";
import classNames from "classnames";

import { motion } from "framer-motion";
import { WorkCard } from "../../components/cards/WorkCard";
import { Heading } from "../../components/Heading";
import { AnimatePresence } from "framer-motion";
import { WORKS } from "../../components/data";
import { container } from "../../components/animations";

export const SelectedProjectsSection = ({ id }: { id: number }) => {
  const works = WORKS.map((work) => work.items).flat();

  const [currentPage, setCurrentPage] = useState(0);

  return (
    <motion.div
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="projects"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <div className="mb-4 lg:hidden">
        <Heading>Selected Projects</Heading>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          exit={{ left: 100, opacity: 0 }}
          animate={{ left: 0, opacity: 1 }}
          initial={{ left: -100, opacity: 0 }}
          key={works[currentPage].id}
        >
          <WorkCard {...works[currentPage]} />
        </motion.div>
      </AnimatePresence>
      <div className="mt-4">
        <Paginator
          pageCount={works.length}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      </div>
    </motion.div>
  );
};

const Paginator = ({
  pageCount,
  currentPage,
  paginate,
}: {
  pageCount: number;
  currentPage: number;
  paginate: (pageNum: number) => void;
}) => {
  return (
    <ul className="flex gap-4 justify-center cursor-pointer items-center min-h-[24px]">
      {new Array(pageCount).fill(0).map((page, index) => (
        <li
          onClick={() => paginate(index)}
          className={classNames(
            "border-2 border-white transition-all duration-300",
            {
              "p-0": index != currentPage,
              "p-1": index == currentPage,
            }
          )}
        >
          <div className=" bg-white w-3 h-3 m-0"></div>
        </li>
      ))}
    </ul>
  );
};
