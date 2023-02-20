import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";
import AvatarIcon from "../components/icons/AvatarIcon";
import Container from "../components/layout/container";
import { Pages } from "./_app";

const About = ({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) => {
  useEffect(() => setCurrentPage("About"));

  const textAnimRef = useSpringRef();
  const imageAnimRef = useSpringRef();

  const textAnimation = useSpring({
    from: { opacity: 0, scale: 0.75 },
    to: { opacity: 1, scale: 1 },
    ref: textAnimRef,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, x: -25 },
    to: { opacity: 1, x: 0 },
    ref: imageAnimRef,
  });

  useChain([imageAnimRef, textAnimRef, ...animationRefs]);

  return (
    <div className="">
      <Head>
        <title>About Me | Dagem Tadesse</title>
      </Head>

      <Container navHeight={84}>
        <animated.div
          className="basis-[33.333%] flex justify-center"
          style={imageAnimation}
        >
          <AvatarIcon />
        </animated.div>

        <animated.div
          className="basis-[66.666%]"
          style={textAnimation}
        >
          <h1 className="text-3xl font-bold">About.</h1>
          <p className="mt-4 leading-7 text-normal font-light max-w-[658px] ">
            I am a creative and enthusiastic software engineer, fascinated with
            front-end development and the web in general. I am well-versed in
            agile development and responsive design. I love trying new
            technologies and try new stuff.
          </p>
        </animated.div>
      </Container>
    </div>
  );
};

export default About;
