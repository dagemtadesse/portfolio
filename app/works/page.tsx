import { Container } from "../../components/Container";
import { WorkCard } from "../../components/cards/WorkCard";
import { Heading } from "../../components/Heading";
import { RowHeader } from "../../sections/landing/Works";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <Container className="my-8">
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
      </Container>
    </>
  );
}

export const metadata : Metadata = {
  title: "My works | Dagem Tadesse"
}