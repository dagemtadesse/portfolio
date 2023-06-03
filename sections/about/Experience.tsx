import { forwardRef } from "react";
import { Tag } from "../../components/button/Tag";

const experiences = [
  {
    title: "Full-stack engineer at Super consult PLC",
    duration: "July 2022 to Present",
    techs: [
      "Angular",
      ".Net",
      "AngularMaterial",
      "UI_Deisgn",
      "TypeScript",
      "JavaScript",
      "Requirement_engineering",
    ],
  },
  {
    title: "Full-stack engineer at Super consult PLC",
    duration: "July 2022 to Present",
    techs: [
      "React",
      "Next.js",
      "TailwindCSS",
      "MUI",
      "TypeScript",
      "JavaScript",
      "Redux",
    ],
  },
];

export const ExperienceSection = ({ id }: { id: number }) => {
  return (
    <div data-section-id={id} className="scroll-mt-24 scroll-target" id="experience">
      <ul>
        {experiences.map((exp) => (
          <ExperienceTimeLine {...exp} />
        ))}
      </ul>
    </div>
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
    <li className="flex gap-4">
      <div className="relative  w-4">
        <div className="bg-customBlack w-4 h-4 mt-4"></div>
        <div className="w-1 h-full bg-customBlack absolute left-1/2 -translate-x-1/2 top-0"></div>
      </div>
      <div className="pt-4 pb-6">
        <h4 className="uppercase text-sm">{duration}</h4>
        <h3 className="text-customBlack font-medium mt-2">{title}</h3>
        <div className="mt-4 flex gap-4 flex-wrap">
          {techs.map((tech, index) => (
            <Tag key={`${title}${index}`}>{tech}</Tag>
          ))}
        </div>
      </div>
    </li>
  );
};
