import { ReactNode } from "react";
import Image from "next/image";
import { Tag } from "../button/Tag";
import { Globe, GitHub } from "react-feather";
import Link from "next/link";

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
    <div className="border border-customBlack">
      <div className="h-[320px] border-b border-customBlack relative overflow-hidden">
        <Image
          src={thumbnail}
          alt="picture"
          fill
          className="hover:scale-105 transition-all duration-300 object-cover object-top"
        />
      </div>
      <div className="px-4 pt-4 pb-6">
        <h4 className="text-base font-medium text-darkerGrey">{title}</h4>
        <p className="text-sm mt-4 text-darkerGrey">{description}</p>
        <div className="flex gap-4 mt-4">
          {tags.map((tag, index) => (
            <Tag key={`${title}-${index}`}>{tag}</Tag>
          ))}
        </div>

        <div className="flex gap-6 mt-6">
          {codeLink && (
            <CardButton href={codeLink} icon={<GitHub className="stroke-1" size={20} />}>
              View Code
            </CardButton>
          )}
          {demoLink && (
            <CardButton href={demoLink} icon={<Globe className="stroke-1" size={20}/>}>
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
    <Link href={href}>
      <button className="flex gap-2 items-center py-1 border border-gray-500 p-3 text-sm">
        <span>{children}</span>
        {icon}
      </button>
    </Link>
  );
};
