import { ReactNode } from "react";
import Image from "next/image";
import { Tag } from "../button/Tag";
import { Globe, GitHub } from "react-feather";

export type WorkCardProps = {
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  codeLink?: string;
  demoLink?: string;
  caseStudyLink?: string;
};

export const WorkCard = ({
  title,
  thumbnail,
  description,
  tags,
  codeLink,
  demoLink,
  caseStudyLink,
}: WorkCardProps) => {
  return (
    <div className="border border-divider rounded">
      <div className="h-[320px] border-b border-divider relative overflow-hidden rounded">
        <Image
          src={thumbnail}
          alt="picture"
          fill
          className="hover:scale-105 transition-all duration-300 object-cover object-top rounded"
        />
      </div>
      <div className="px-4 pt-4 pb-6">
        <h4 className="text-base font-medium text-white text-opacity-100">{title}</h4>
        <p className="text-sm mt-4 text-white text-opacity-75">{description}</p>
        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag, index) => (
            <Tag key={`${title}-${index}`}>{tag}</Tag>
          ))}
        </div>

        <div className="flex gap-6 mt-6">
          {codeLink && (
            <CardButton
              href={codeLink}
              icon={<GitHub className="stroke-1" size={20} />}
            >
              View Code
            </CardButton>
          )}
          {demoLink && (
            <CardButton
              href={demoLink}
              icon={<Globe className="stroke-1" size={20} />}
            >
              View Demo
            </CardButton>
          )}
          {caseStudyLink && (
            <CardButton
              href={caseStudyLink}
              icon={<Globe className="stroke-1" size={20} />}
            >
              Case study
            </CardButton>
          )}
        </div>
      </div>
    </div>
  );
};

const CardButton = ({
  children,
  icon,
  href,
}: {
  children: ReactNode;
  icon: ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className="flex gap-2 items-center border border-gray-500  text-sm py-1 p-3 hover:bg-white hover:bg-opacity-20 transition-colors duration-300 ease-in-out active:bg-opacity-30 rounded"
    >
      <span>{children}</span>
      {icon}
    </a>
  );
};
