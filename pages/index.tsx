import Head from "next/head";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  animated,
  useChain,
  useSpring,
  useSpringRef,
  useTrail,
} from "react-spring";
import { Waypoint } from "react-waypoint";
import Hero from "../components/icons/Hero";
import MemoLeft from "../components/icons/Left";
import MemoRight from "../components/icons/Right";
import Container from "../components/layout/container";
import CaseStudies from "../components/portfolio/CaseStudies";
import services from "../components/portfolio/services";
import Socials from "../components/portfolio/Socials";
import ServiceCard from "../components/skill/Service";
import { Pages } from "./_app";

export default function Home({
  setCurrentPage,
  animationRefs,
}: {
  setCurrentPage: Dispatch<SetStateAction<Pages>>;
  animationRefs: any[];
}) {
  useEffect(() => setCurrentPage("Home"));
  const textAnimRef = useSpringRef();
  const imageAnimRef = useSpringRef();

  const [isCardsInview, setIsCardsInview] = useState(false);

  const textAnimation = useSpring({
    from: { opacity: 0, x: -48 },
    to: { opacity: 1, x: 0 },
    ref: textAnimRef,
  });

  const imageAnimation = useSpring({
    from: { opacity: 0, scale: 0.85 },
    to: { opacity: 1, scale: 1 },
    ref: imageAnimRef,
  });

  const cardTrail = useTrail(services.length, {
    from: { opacity: 0, y: 50 },
    opacity: isCardsInview ? 1 : 0,
    y: isCardsInview ? 0 : 50,
    delay: 100,
  });

  useChain([textAnimRef, imageAnimRef, ...animationRefs]);

  return (
    <>
      <Head>
        <title>Dagem Tadesse</title>
      </Head>
      {/* social */}
      <Container navHeight={84}>
        {/* <div className="snap-end flex flex-col md:flex-row md:min-h-[calc(100vh-84px)] justify-start md:items-center md:px-10 px-5 pb-[80px] gap-12 md:gap-4"> */}
        <animated.div
          className="basis-[40%] flex flex-col"
          style={textAnimation}
        >
          <div className="max-w-[460px] mt-6 md:mt-0">
            <p className="font-normal text-2xl leading-6 tracking-wider">
              Hi there,
            </p>
            <p className="font-bold uppercase text-2xl md:text-3xl mt-2 tracking-widest">
              I'm dagem tadesse
            </p>
            <p className="text-lg font-light md:mt-3 mt-2">
              Passionate frontend engineer and a student. Responsive design +
              React + TailwindCSS expert
            </p>
            <Socials />

            <a
              href="_blank"
              className="bg-white rounded-sm color text-darkBlue py-3 px-6 mt-4 inline-block"
            >
              Download CV
            </a>
          </div>
        </animated.div>

        <animated.div
          className="md:basis-[60%] grid place-content-center"
          style={imageAnimation}
        >
          <Hero />
        </animated.div>
      </Container>
      {/* </div> */}

      <Container>
        <Waypoint
          onEnter={() => setIsCardsInview(true)}
          onLeave={() => setIsCardsInview(false)}
        >
          <div className="w-full ">
            <h1 className="text-2xl">Expert In</h1>
            <div className="flex flex-col md:flex-row gap-12 md:mt-16">
              {cardTrail.map((animation, index) => (
                <animated.div
                  key={index}
                  style={animation}
                  className="basis-[33.33%]"
                >
                  <ServiceCard
                    title={services[index].title}
                    description={services[index].description}
                    image={services[index].image}
                  />
                </animated.div>
              ))}
            </div>
          </div>
        </Waypoint>
      </Container>

      <Container>
        <div className="w-full h-full ">
          <CaseStudies />
        </div>
      </Container>
    </>
  );
}
