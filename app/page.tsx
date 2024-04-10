import { Bio } from "../sections/landing/Bio";
import { Expertise } from "../sections/landing/Experties";
import { Works } from "../sections/landing/Works";
import { HeroSection } from "../sections/landing/Hero";
import { Metadata } from "next";
import { Container, Stack } from "@mui/material";

export default function Page() {
  return (
    <Stack gap={8}>
      <Container>
        <HeroSection />
      </Container>
      <Container>
        <Bio />
      </Container>
      <Container>
        <Expertise />
      </Container>
      <Container>
        <Works maxItems={2} />
      </Container>
    </Stack>
  );
}

export const metadata: Metadata = {
  title: "Home | Dagem Tadesse",
};
