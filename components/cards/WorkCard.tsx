import { ReactNode } from "react";
import Image from "next/image";
import { Tag } from "../button/Tag";

export const WorkCard = () => {
  return (
    <div className="border border-customBlack">
      <div className="h-[320px] border-b border-customBlack relative overflow-hidden">
        <Image
          src="/v3/picture/web-dev-1.jpeg"
          alt="picture"
          fill
          className="hover:scale-105 transition-all duration-300 object-cover"
        />
      </div>
      <div className="px-4 pt-4 pb-6">
        <h4 className="text-base font-medium text-darkerGrey">
          Lorem ipsum dolor sit amet
        </h4>
        <p className="text-sm mt-4 text-darkerGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum semper commodo. Fusce massa justo, consectetur eget nisi
          et, volutpat lacinia justo.
        </p>
        <div className="flex gap-4 mt-4">
          <Tag>React</Tag>
          <Tag>Node.js</Tag>
          <Tag>React</Tag>
        </div>

        <div className="flex gap-6 mt-6">
          <CardButton icon="/v3/icons/git.svg">View Code</CardButton>
          <CardButton icon="/v3/icons/globe.svg">View Demo</CardButton>
        </div>
      </div>
    </div>
  );
};

const CardButton = ({
  children,
  icon,
}: {
  children: ReactNode;
  icon: string;
}) => {
  return (
    <button className="underline flex gap-2 items-center text-base py-1">
      <span>{children}</span>
      <Image src={icon} alt="." height={18} width={18} />
    </button>
  );
};
