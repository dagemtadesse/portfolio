import { motion } from "framer-motion";
import { wrap } from "module";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { container, item, slideToRight } from "../components/animations";
import Container from "../components/layout/container";
import Project from "../components/portfolio/Project";
import SkillsSlider from "../components/skill/SkillsSlider";
import { Pages } from "./_app";

export const projects = [
  {
    title: "Food Ordering App",
    description:
      "As part of the Google UI/UX certificate program, I conducted interviews, created empathy maps and user personas, created Wireframes, conducted usability studies and developed HI-FI prototype.",
    link: "https://www.figma.com/proto/vevHkSD8nctgb9LLRJYp8V/Untitled?node-id=68%3A7&scaling=scale-down&page-id=65%3A2&starting-point-node-id=68%3A7",
    showcases: [
      "/showcases/Mobile-dark (1).png",
      "/showcases/Mobile-dark (2).png",
      "/showcases/Mobile-dark.png",
    ],
  },

  {
    title: "World Medical Card Clone",
    description:
      "A clone of world medical card web app, which stores medical information to be available any where in any language.",
    link: "https://github.com/dagemtadesse/alpaca",
  },

  {
    title: "Customer Reviews app",
    description:
      "Utilized TypeScript, Express.js, and PostgreSQL to create a restful API. Flutter is used to create the cross-platform mobile app.",
    link: "https://github.com/dagemtadesse/alpaca",
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
      const container = wrapperRef.current;
      const nextProject = container.querySelector(`#project_${currentProject}`);
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
          <motion.div
            className="shrink-0 md:basis-[33.333%] max-w-full"
            variants={slideToRight}
          >
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

          <motion.div
            className="shrink-0 md:basis-[33.333%] max-w-full"
            variants={slideToRight}
          >
            <object data="/icons/work.svg" height="32px" />
            <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Experience</h2>
            <p className="font-normal mt-2">
              Junior front-end engineer at kemer Habesha
            </p>
            <p className="font-light mt-2">
              Partake in static landing pages and reactive dashboard using
              react, next.js, tailwindcss, material UI, and TypeScript.
            </p>
            <p className="italic font-light text-sm mt-1">
              July 2022 to Present
            </p>
          </motion.div>

          <motion.div
            className="shrink-0 md:basis-[33.333%] max-w-full"
            variants={slideToRight}
          >
            <object data="/icons/awards.svg" height="32px" />
            <div className="bg-white rounded-full h-[2px] mb-5 mt-2 max-w-[4rem]" />
            <h2 className="font-medium text-base">Awards & Certifications</h2>
            <p className="font-normal mt-2">Google UI/UX certificate</p>
            <p className="font-light mt-2">
              A certificate program comprising foundations of User experience
              design, conducting UX research, building Wireframes and
              low-fidelity prototypes, creating HI-FI designs and prototypes,
              and responsive web design.
            </p>
            <p className="italic font-light text-sm mt-2">
              2022 September 6 - December 27
            </p>
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
                title="JavaScript and TypeScript"
                amount={100}
                text="Expert"
              />
              <SkillsSlider
                title="React.js and Next.js"
                amount={100}
                text="Expert"
              />
              <SkillsSlider title="TailwindCSS" amount={100} text="Expert" />
              <SkillsSlider
                title="REST API, GraphQL  And  Database(Postgresql and Mongo)"
                amount={75}
                text="Experienced"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <SkillsSlider
                title="UI/UX Design (Figma and Adobe XD)"
                amount={75}
                text="Experienced"
              />
              <SkillsSlider title="Python" amount={75} text="Experience" />
              <SkillsSlider title="Git" amount={75} text="Experienced" />
              <SkillsSlider
                title="Dart and Flutter"
                amount={50}
                text="Advanced"
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
          <div className="w-full grow-1 shrink-0 md:w-[45%] flex flex-col ">
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
              link={project.link}
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
