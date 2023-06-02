import { motion } from "framer-motion";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { bounce, container, item, slideToLeft } from "../_components/animations";

import Hero from "../_components/icons/Hero";
import Container from "../_components/layout/container";
import Carousel from "../_components/portfolio/Carousel";
import CaseStudies from "../_components/portfolio/CaseStudies";
import services from "../_components/portfolio/services";
import Socials from "../_components/portfolio/Socials";
import ServiceCard from "../_components/skill/Service";

import { Pages } from "./_app";

export default function Home({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) {
  useEffect(() => setCurrentPage("Home"), []);

  return (
    <>
      <Head>
        <title>Dagem Tadesse</title>
      </Head>

      <Container navHeight={84}>
        <motion.div
          className="flex w-full"
          whileInView="visible"
          initial="hidden"
          variants={container}
        >
          <motion.div className="md:basis-[40%] flex flex-col justify-center md:shrink-0 items-center">
            <div className="max-w-[460px] mt-6 md:mt-0">
              <motion.p
                variants={slideToLeft}
                className="font-normal text-2xl leading-6 tracking-wider"
              >
                Hi there,
              </motion.p>

              <motion.p
                variants={slideToLeft}
                className="font-bold uppercase text-2xl md:text-3xl mt-2 tracking-widest"
              >
                I'm dagem tadesse
              </motion.p>

              <motion.p
                variants={slideToLeft}
                className="text-lg font-light md:mt-3 mt-2"
              >
                Passionate frontend engineer and a student. Responsive design +
                React + TailwindCSS expert
              </motion.p>

              <motion.div variants={slideToLeft} className="my-6">
                <Socials />
              </motion.div>

              <motion.a
                variants={slideToLeft}
                target="_blank"
                href="/files/Resume 2.0.pdf"
                download
                className="bg-white rounded-sm color text-darkBlue py-3 px-6 mt-4 inline-block"
              >
                Download CV
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="md:basis-[60%] place-content-center hidden md:block"
            variants={bounce}
          >
            <Hero />
          </motion.div>

        </motion.div>
        <Carousel/>
      </Container>
      {/* </div> */}

      <Container>
        <div className="w-full ">
          <h1 className="text-2xl">Expert In</h1>
          <motion.div
            className="flex flex-col md:flex-row gap-12 md:mt-16 mt-12"
            variants={container}
            whileInView="visible"
            initial="hidden"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="basis-[33.33%]"
                variants={item}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>

      <Container className="0">
        <div className="w-full h-full">
          <CaseStudies />
        </div>
      </Container>
    </>
  );
}
