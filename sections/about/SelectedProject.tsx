"use client";

import { useState } from "react";
import classNames from "classnames";
import { WorkCard } from "../../components/cards/WorkCard";

export const SelectedProjectsSection = ({ id }: { id: number }) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="projects"
    >
      <WorkCard />
      <div className="mt-4">
        <Paginator
          pageCount={3}
          currentPage={currentPage}
          paginate={setCurrentPage}
        />
      </div>
    </div>
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
            "border-2 border-customBlack transition-all duration-300",
            {
              "p-0": index != currentPage,
              "p-1": index == currentPage,
            }
          )}
        >
          <div className=" bg-customBlack w-3 h-3 m-0"></div>
        </li>
      ))}
    </ul>
  );
};
