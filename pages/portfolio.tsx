import { motion } from "framer-motion";
import { wrap } from "module";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { container, item, slideToRight } from "../components/animations";
import Container from "../components/layout/container";
import Project from "../components/portfolio/Project";
import SkillsSlider from "../components/skill/SkillsSlider";
import { Pages } from "./_app";

const projects = [
  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laborum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laborum.",
  },

  {
    title:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laborum.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, laborum.",
  },
];

const Portfolio = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentProject, setCurrentProject] = useState<number>(0);

  useEffect(() => {
    setCurrentPage("Portfolio");
  });

  const handleScrollTo = () => {
    if (wrapperRef.current) {
      console.log(currentProject);
      const container = wrapperRef.current;
      const nextProject = container.querySelector(`#project_${currentProject}`);
      console.log(nextProject);
      if (nextProject) nextProject.scrollIntoView();
      setCurrentProject((cur) => (cur + 1) % projects.length);
    }
  };

  return (
    <motion.div>
      <Head>
        <title>portfolio | Dagem Tadesse</title>
      </Head>

      <Container navHeight={84} className="bg-green" sm>
        <motion.div
          className="flex gap-6 w-full justify-between flex-wrap md:flex-nowrap"
          variants={container}
          whileInView="visible"
          initial="hidden"
        >
          <motion.div className="" variants={slideToRight}>
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
          </motion.div>

          <motion.div className="" variants={slideToRight}>
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
          </motion.div>

          <motion.div className="" variants={slideToRight}>
            <object data="/icons/awards.svg" height="32px" />
            <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Awards & Certifications</h2>
            <p className="font-normal mt-2">description</p>
            <p className="font-light mt-2">
              Bachelorof Science in Software Engineering and Computing
              TechnologySoftware Engineering Stream
            </p>
            <p className="italic font-light text-sm mt-2">time</p>
          </motion.div>
        </motion.div>
      </Container>

      <Container sm className="">
        <motion.div
          className="w-full"
          variants={container}
          whileInView="visible"
          initial="hidden"
        >
          <object data="/icons/skills.svg" height="32px" />
          <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
          <h2 className="font-medium text-base">My skills</h2>

          <div className="flex w-full mt-8 md:gap-12 gap:3 flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
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
            <div className="w-full md:w-1/2 flex flex-col gap-3">
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
        </motion.div>
      </Container>

      <Container className="bg-white bg-opacity-10" sm>
        <motion.div
          className="w-full flex items-center gap-8 flex-nowrap overflow-scroll scroll-smooth relative"
          variants={container}
          whileInView="visible"
          initial="hidden"
          ref={wrapperRef}
        >
          <div className="w-full grow-1 shrink-0 md:w-1/2 flex flex-col ">
            <h1 className="text-4xl">Featured Projects</h1>
            <p className="font-light mt-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Repudiandae, sequi!
            </p>
          </div>
          {projects.map((project, index) => (
            <Project
              key={"project" + index}
              index={index}
              title={project.title}
              description={project.description}
            />
          ))}
        </motion.div>
        <button
          className="absolute right-0 bg-darkBlue rounded-full mx-4 shadow-md p-2 bg-opacity-30 z-10 hover:bg-opacity-80"
          onClick={handleScrollTo}
        >
          <img src="/icons/right.svg" />
        </button>
      </Container>
    </motion.div>
  );
};
export default Portfolio;
