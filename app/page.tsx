import { Container } from "../components/Container";
import { FooterSocialIcon } from "../components/FooterSocialIcon";
import { Button } from "../components/Button";
import Image from "next/image";
import { FAB } from "../components/FAB";

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
