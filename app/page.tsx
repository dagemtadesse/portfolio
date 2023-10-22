import { Bio } from "../sections/landing/Bio";
import { Experties } from "../sections/landing/Experties";
import { Works } from "../sections/landing/Works";
import { HeroSection } from "../sections/landing/Hero";
import { Metadata } from "next";
import { Container } from "../components/Container";

export default function Page() {

  return (
    <>
      <HeroSection />
      <Bio />
      <Experties />
      <Container className="my-24">
        <Works maxItems={2} />
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "Home | Dagem Tadesse",
};
