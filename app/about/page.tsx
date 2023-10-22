import { Metadata } from "next";

import { Container } from "../../components/Container";
import { BackgroundInfoSection } from "../../sections/about/BackgroundInfo";
import { SkillsSection } from "../../sections/about/Skills";
import { ExperienceSection } from "../../sections/about/Experience";
import { SelectedProjectsSection } from "../../sections/about/SelectedProject";
import { Socials } from "../../components/Socials";
import { ContentMenu } from "../../sections/about/ContentMenu";

export default function Page() {
  return (
    <Container className="grid grid-cols-12 justify-between items-start ">
      <div className="col-span-12 lg:col-span-6 lg:sticky top-[64px] ">
        <div className="w-[83.33%] bg-yelow-400 lg:h-[calc(100vh-64px)] py-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl uppercase font-medium">Dagem Tadesse</h1>
            <h2 className="text-xl text-white text-opacity-75  mt-2 ">
              Full-stack Software engineer & UI designer
            </h2>
            <p className="text-white text-opacity-75 mt-6">
              I build accessible, inclusive products and digital experiences for
              the web.
            </p>
          </div>

          <ContentMenu />

          <div className="hidden lg:flex gap-6">
            <Socials variant="lg" />
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-6 text-base flex flex-col gap-24 py-8 text-white text-opacity-75">
        <BackgroundInfoSection id={0} />
        <SkillsSection id={1} />
        <ExperienceSection id={2} />
        <SelectedProjectsSection id={3} />
      </div>
    </Container>
  );
}

export const metadata: Metadata = {
  title: "About | Dagem Tadesse",
};
