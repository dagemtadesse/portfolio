import { motion } from "framer-motion";
import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { container, slideToLeft, slideToRight } from "../_components/animations";
import AvatarIcon from "../_components/icons/AvatarIcon";
import Container from "../_components/layout/container";
import { Pages } from "./_app";

const About = ({
  setCurrentPage,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) => {
  useEffect(() => setCurrentPage("About"));

  return (
    <motion.div
      className=""
      variants={container}
      whileInView="visible"
      initial="hidden"
    >
      <Head>
        <title>About Me | Dagem Tadesse</title>
      </Head>

      <Container navHeight={84}>
        <motion.div
          className="basis-[33.333%] flex justify-center"
          variants={slideToRight}
        >
          <AvatarIcon />
        </motion.div>

        <motion.div className="md:basis-[66.666%]" variants={slideToLeft}>
          <h1 className="text-3xl font-bold">About.</h1>
          <p className="mt-4 leading-7 text-normal font-light max-w-[658px] ">
            I am a creative and enthusiastic software engineer, fascinated with
            front-end development and the web in general. I am well-versed in
            agile development and responsive design. I love trying new
            technologies and try new stuff.
          </p>
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default About;
