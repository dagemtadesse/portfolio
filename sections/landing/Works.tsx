"use client";

import Link from "next/link";
import { ArrowDown } from "react-feather";
import { motion } from "framer-motion";

import { container, opacity } from "../../components/animations";
import { WorkCard, WorkCardProps } from "../../components/cards/WorkCard";
import { Container } from "../../components/Container";
import { WORKS } from "../../components/data";
import { Heading } from "../../components/Heading";

export const Works = ({ maxItems }: { maxItems?: number }) => {
  return (
    <Container className="">
      <Heading>My Works</Heading>

      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 mt-8">
        {WORKS.map((work) => (
          <CardColumn title={work.group} items={work.items.slice(0, maxItems)} />
        ))}
      </div>

      {maxItems && (
        <div className="flex justify-center mt-8">
          <Link href="/works">
            <button className="border border-darkerGrey hover:border-customBlack px-4 py-2">
              View Poject Archieve
            </button>
          </Link>
        </div>
      )}
    </Container>
  );
};

export const RowHeader = ({ children }: { children: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <h3 className="text-lg uppercase">{children}</h3>
      <ArrowDown size={16} className="stroke-1" />
    </div>
  );
};

export const CardColumn = ({
  title,
  items,
}: {
  title: string;
  items: WorkCardProps[];
}) => {
  return (
    <div className="col-span-4">
      <RowHeader>{title}</RowHeader>
      <motion.div
        className="flex flex-col gap-4 mt-4"
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        {items.map((item, index) => (
          <motion.div variants={opacity}>
            <WorkCard key={`${title}-index`} {...item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
