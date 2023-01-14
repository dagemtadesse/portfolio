import Head from "next/head";
import { Dispatch, SetStateAction, useEffect } from "react";
import { animated, useChain, useSpring, useSpringRef } from "react-spring";
import Hero from "../components/icons/Hero";
import MemoLeft from "../components/icons/Left";
import MemoRight from "../components/icons/Right";
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

  useChain([textAnimRef, imageAnimRef, ...animationRefs]);

  return (
    <>
      <Head>
        <title>Dagem Tadesse</title>
      </Head>
      {/* social */}
      <div className="snap-end flex flex-col md:flex-row md:min-h-[calc(100vh-84px)] justify-start md:items-center md:px-10 px-5 pb-[80px] gap-12 md:gap-4">
        <animated.div
          className="basis-[40%] flex flex-col"
          style={textAnimation}
        >
          <div className="max-w-[460px] mt-6 md:mt-0">
            <p className="font-normal text-2xl leading-6 tracking-wider">
              Hi there,
            </p>
            <p className="font-bold uppercase text-3xl mt-2 tracking-widest">
              I'm dagem tadesse
            </p>
            <p className="text-lg font-light md:mt-3 mt-1">
              Passionate frontend engineer and a student. Responsive design +
              React + TailwindCSS expert
            </p>
          </div>
        </animated.div>
        <animated.div
          className="md:basis-[60%] grid place-content-center"
          style={imageAnimation}
        >
          <Hero />
        </animated.div>
      </div>
      <div className="w-full snap-start min-h-screen md:px-10 px-5 py-10 flex items-center">
        <div className="w-full ">
          <h1 className="text-2xl px-8">Expert In</h1>
          <div className="flex gap-6 mt-16">
            <ServiceCard
              title="Responsive Web Design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cupiditate similique tenetur repellendus labore,"
              image="/responsive.svg"
            />

            <ServiceCard
              title="UI/UX Design"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cupiditate similique tenetur repellendus labore,"
              image="/design.svg"
            />

            <ServiceCard
              title="Reactive Web sites"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda cupiditate similique tenetur repellendus labore,"
              image="/react.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-full snap-start min-h-screen md:px-10 px-5 py-10 flex items-center">
        <div className="flex px-8 gap-2">
          <div className="">
            <h1 className="text-2xl">Case studies</h1>

            <div className="flex gap-8 mt-16">
              <div className="bg-red-500 basis-[50%] h-[400px]"></div>
              <div className="basis-[40%]">
                <h2 className="uppercase text-xl font-medium text-gray-500">
                  mobile app design
                </h2>

                <div className="flex items-center mt-2">
                  <h1 className="text-3xl">Lore ipsum dolor</h1>
                  <button className="flex items-center ml-12 mr-3">
                    <MemoLeft className="text-3xl text-gray-500 hover:text-gray-700" />
                  </button>

                  <button className="flex items-center">
                    <MemoRight className="text-3xl text-gray-500 hover:text-gray-700" />
                  </button>
                </div>
                
                <div className="border-b-4 border-gray-500 my-8 w-20 rounded-full"></div>
                <p className="text-lg font-light">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nemo, ut. Voluptate reiciendis laboriosam iure at, praesentium
                  quo tempora unde repudiandae nemo ratione, odit fugit sint
                  consectetur eius, est dolores. Eum?
                </p>
                <button className="mt-12 text-blue-500 font-medium">See the details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
