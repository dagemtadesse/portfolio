import { Metadata } from "next";
import Image from "next/image";
import { CaseStudyCarousel } from "../../components/CaseStudyCarousel";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export default function Page() {
  return (
    <div className="py-8">
      <Container>
        <div className="mb-8">
          <Heading>Case studies</Heading>
        </div>

        <div className="mt-12">
          <CaseStudyCarousel />
        </div>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Case studies | Dagem Tadesse",
};
