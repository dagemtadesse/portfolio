import { useState } from "react";
import { animated, useSpring } from "react-spring";
import { Waypoint } from "react-waypoint";
import MemoLeft from "../icons/Left";
import MemoRight from "../icons/Right";

const caseStudy = [
  {
    category: "mobile app design",
    projectTitle: "Lore ipsum dolor",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, ut.Voluptate reiciendis laboriosam iure at, praesentium quo tempora unde repudiandae nemo ratione, odit fugit sint consectetur eius, estdolores. Eum?",
  },
];

const CaseStudies = () => {
  const [index, setIndex] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const current = caseStudy[index];

  const imageAnimation = useSpring({
    to: { transform: "translateY(0%)" },
    from: {
      transform: "translateY(100%)",
    },
  });

  return (
    <>
      <header className="py-7 flex justify-between items-center">
        <h1 className="text-2xl">Case studies</h1>

        <div className="flex items-center mt-2 gap-5">
          <button className="flex items-center">
            <MemoLeft className="text-3xl text-gray-500 hover:text-gray-700" />
          </button>

          <span className="text-xl font-light">1 / 3</span>

          <button className="flex items-center">
            <MemoRight className="text-3xl text-gray-500 hover:text-gray-700" />
          </button>
        </div>
      </header>

      <div className="">
        <div className="max-w-[50%]">
          <h1 className="text-3xl">{current.projectTitle}</h1>

          <div className="border-b-4 border-white my-5 w-20 rounded-full"></div>

          <p className="text-lg font-light">{current.description}</p>
          <button className="my-8 text-blue-500 font-medium">
            See the details
          </button>
        </div>

        <Waypoint
          onEnter={() => setIsInView(true)}
          onLeave={() => setIsInView(false)}
        >
          <animated.div  style={imageAnimation}>
            <img src="/showcase_1.png" className="block mx-auto"/>
          </animated.div>
        </Waypoint>
      </div>
    </>
  );
};

export default CaseStudies;
