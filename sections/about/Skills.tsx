"use client";

import { motion } from "framer-motion";

import { Heading } from "../../components/Heading";
import {  growHorizontal, container } from "../../components/animations";

export const SkillsSection = ({ id }: { id: number }) => {
  return (
    <motion.div
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="skills"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="mb-4 lg:hidden">
        <Heading>Skills and Proficiency</Heading>
      </div>
      <ul className="py-8 gap-8 flex flex-col">
        <Skill name="JavaScript & TypeScript" level="expert" />
        <Skill name="Node.js" level="advanced" />
        <Skill name="React & Next.js" level="advanced" />
        <Skill name="TailwindCSS" level="expert" />
        <Skill name="MUI" level="advanced" />
        <Skill name="Angular" level="advanced" />
        <Skill name=".NET" level="competent" />
      </ul>
    </motion.div>
  );
};

const SkillLevels = {
  expert: 99,
  advanced: 80,
  competent: 65,
} as const;

const Skill = ({ name, level }: { name: string; level: keyof typeof SkillLevels }) => {
  return (
    <li>
      <div className="flex justify-between text-customBlack target">
        <h4 className="font-medium ">{name}</h4>
        <p className="uppercase font-light text-sm">{level}</p>
      </div>
      <div className="border border-customBlack mt-1">
        <motion.div variants={growHorizontal}>
          <div
            className="bg-customBlack h-2"
            style={{ width: `${SkillLevels[level]}%` }}
          ></div>
        </motion.div>
      </div>
    </li>
  );
};
