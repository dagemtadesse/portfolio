import { forwardRef } from "react";

export const SkillsSection = ({ id }: { id: number }) => {
  return (
    <div data-section-id={id} className="scroll-mt-24 scroll-target" id="skills">
      <ul className="py-8 gap-8 flex flex-col">
        <Skill name="JavaScript" level="expert" />
        <Skill name="TypeScript" level="expert" />
        <Skill name="Node.js" level="advanced" />
        <Skill name="Next.js" level="advanced" />
        <Skill name="Angular" level="competent" />
      </ul>
    </div>
  );
};

type SkillLevel = { [m: string]: number };
const SkillLevels: SkillLevel = {
  expert: 99,
  advanced: 80,
  competent: 65,
};

const Skill = ({ name, level }: { name: string; level: keyof SkillLevel }) => {
  return (
    <li>
      <div className="flex justify-between text-customBlack target">
        <h4 className="font-medium ">{name}</h4>
        <p className="uppercase font-light text-sm">{level}</p>
      </div>
      <div className="border border-customBlack mt-1">
        <div
          className="bg-customBlack h-2"
          style={{ width: `${SkillLevels[level]}%` }}
        ></div>
      </div>
    </li>
  );
};
