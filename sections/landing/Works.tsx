import Image from "next/image";
import { ArrowDown } from "react-feather";

import { WorkCard } from "../../components/cards/WorkCard";
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

export const RowHeader = ({ children }: { children: string }) => {
  return (
    <div className="flex gap-4 items-center">
      <h3 className="text-lg uppercase">{children}</h3>
      <ArrowDown size={16} className="stroke-1"/>
    </div>
  );
};
