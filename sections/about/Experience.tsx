"use client";
import { motion } from "framer-motion";

import { Heading } from "../../components/Heading";
import { Tag } from "../../components/button/Tag";
import { fadeIn, container} from "../../components/animations";
import { EXPERIENCES } from "../../components/data";

export const ExperienceSection = ({ id }: { id: number }) => {
  return (
    <motion.div
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="experience"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <div className="mb-4 lg:hidden">
        <Heading>Work History</Heading>
      </div>
      <ul>
        {EXPERIENCES.map((exp, index) => (
          <ExperienceTimeLine {...exp} key={"exp"+index} />
        ))}
      </ul>
    </motion.div>
  );
};

const ExperienceTimeLine = ({
  duration,
  title,
  techs,
}: {
  duration: string;
  title: string;
  techs: string[];
}) => {
  return (
    <motion.li className="flex gap-4" variants={fadeIn}>
      <div className="relative  w-4">
        <div className="bg-white w-4 h-4 mt-4"></div>
        <div className="w-1 h-full bg-white absolute left-1/2 -translate-x-1/2 top-0"></div>
      </div>
      <div className="pt-4 pb-6">
        <h4 className="uppercase text-sm">{duration}</h4>
        <h3 className="font-medium mt-2 text-white text-opacity-100">{title}</h3>
        <div className="mt-4 flex gap-4 flex-wrap">
          {techs.map((tech, index) => (
            <Tag key={`${title}${index}`}>{tech}</Tag>
          ))}
        </div>
      </div>
    </motion.li>
  );
};
