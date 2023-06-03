"use client";

import { Bio } from "../sections/landing/Bio";
import { Experties } from "../sections/landing/Experties";
import { Works } from "../sections/landing/Works";
import { HeroSection } from "../sections/landing/Hero";

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
