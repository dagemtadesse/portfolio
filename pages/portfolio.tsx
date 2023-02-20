import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { useChain, useSpringRef, useTrail } from "react-spring";
import Container from "../components/layout/container";
import PortfolioData from "../components/portfolio/PortfolioData";
import Project from "../components/portfolio/Project";
import SkillsSlider from "../components/skill/SkillsSlider";
import { Pages } from "./_app";

const Portfolio = ({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) => {
  useEffect(() => {
    setCurrentPage("Portfolio");
  });

  const bttnAnimationRef = useSpringRef();

  useChain([...animationRefs, bttnAnimationRef]);

  const trail = useTrail(PortfolioData.length, {
    from: { opacity: 0, x: 50 },
    opacity: 1,
    x: 0,
  });

  return (
    <>
      <Head>
        <title>portfolio | Dagem Tadesse</title>
      </Head>

      <Container navHeight={84} className="bg-green" sm>
        <div className="flex gap-6 w-full justify-between">
          <div className="">
            <object data="/icons/education.svg" height="32px" />
            <div className="bg-white rounded-full  h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Education</h2>
            <p className="font-normal mt-3">Addis Ababa University</p>
            <p className="font-light mt-2">
              Bachelorof Science in Software Engineering and Computing
              TechnologySoftware Engineering Stream
            </p>
            <p className="italic font-light text-sm mt-2">
              October 2019 - July 2024
            </p>
          </div>

          <div className="">
            <object data="/icons/work.svg" height="32px" />
            <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Experience</h2>
            <p className="font-normal mt-2">
              Junior front-end engineer at kemer Habesha
            </p>
            <p className="font-light mt-2">
              Bachelorof Science in Software Engineering and Computing
              TechnologySoftware Engineering Stream
            </p>
            <p className="italic font-light text-sm mt-1">
              July 2022 to Present
            </p>
          </div>

          <div className="">
            <object data="/icons/awards.svg" height="32px" />
            <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Awards & Certifications</h2>
            <p className="font-normal mt-2">description</p>
            <p className="font-light mt-2">
              Bachelorof Science in Software Engineering and Computing
              TechnologySoftware Engineering Stream
            </p>
            <p className="italic font-light text-sm mt-2">time</p>
          </div>
        </div>
      </Container>

      <Container sm className="">
        <div className="w-full">
          <object data="/icons/skills.svg" height="32px" />
          <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
          <h2 className="font-medium text-base">My skills</h2>

          <div className="flex w-full mt-8 gap-12">
            <div className="w-1/2 flex flex-col gap-3">
              <SkillsSlider
                title="Dart and Flutter"
                amount={75}
                text="Experience"
              />
              <SkillsSlider
                title="UI/UX Design (Figma and Adobe XD)"
                amount={75}
                text="Experience"
              />
              <SkillsSlider
                title="REST API, GraphQL  And  Database(Postgresql and Mongo)"
                amount={75}
                text="Experience"
              />
              <SkillsSlider title="Git" amount={75} text="Experience" />
            </div>
            <div className="w-1/2 flex flex-col gap-3">
              <SkillsSlider
                title="HTML 5 / CSS 3"
                amount={75}
                text="Experience"
              />
              <SkillsSlider title="Python" amount={75} text="Experience" />
              <SkillsSlider
                title="JavaScript and TypeScript"
                amount={75}
                text="Experience"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container className="bg-white bg-opacity-10" sm>
        <div className="flex items-center gap-8 flex-nowrap overflow-x-auto">
          <div className="w-1/2 flex flex-col ">
            <h1 className="text-4xl">Featured Projects</h1>
            <p className="font-light mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, sequi!
            </p>
          </div>

          <Project />
          <Project />
        </div>
      </Container>
    </>
  );
};
export default Portfolio;
