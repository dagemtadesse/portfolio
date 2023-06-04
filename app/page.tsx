import { Bio } from "../sections/landing/Bio";
import { Experties } from "../sections/landing/Experties";
import { Works } from "../sections/landing/Works";
import { HeroSection } from "../sections/landing/Hero";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <HeroSection />
      <Bio />
      <Experties />
      <Works />
    </>
  );
}

export const metadata : Metadata = {
  title: "Home | Dagem Tadesse"
}
