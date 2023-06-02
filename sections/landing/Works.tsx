import Image from "next/image";
import { ReactNode } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export const Works = () => {
  return (
    <Container className="my-12">
      <Heading>My Works</Heading>
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-4 mt-8 text-cu">
        <div className="col-span-4">
          <RowHeader>Web app Development</RowHeader>

          <div className="flex flex-col gap-4 mt-4">
            <WorkCard />
          </div>
        </div>
        <div className="col-span-4">
          <RowHeader>Mobile App Development</RowHeader>
          <div className="flex flex-col gap-4 mt-4">
            <WorkCard />
          </div>
        </div>
        <div className="col-span-4">
          <RowHeader>UI/UX Designt</RowHeader>
          <div className="flex flex-col gap-4 mt-4">
            <WorkCard />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <button className="border border-darkerGrey hover:border-customBlack hover:font-medium px-4 py-2">
          View Poject Archieve
        </button>
      </div>
    </Container>
  );
};

const RowHeader = ({ children }: { children: string }) => {
  return (
    <div className="flex gap-4">
      <h3 className="text-lg uppercase">{children}</h3>
      <Image src="/v3/icons/arrow-right.svg" alt="." width={16} height={16} />
    </div>
  );
};

const WorkCard = () => {
  return (
    <div className="border border-customBlack">
      <div className="h-[320px] border-b border-customBlack relative overflow-hidden">
        <Image
          src="/v3/picture/web-dev-1.jpeg"
          alt="picture"
          fill
          className="hover:scale-105 transition-all duration-300"
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

const Tag = ({ children }: { children: string }) => {
  return (
    <span className="whitespacen-no-wrap text-sm text-darkerGrey hover:text-customBlack">
      #{children}
    </span>
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
