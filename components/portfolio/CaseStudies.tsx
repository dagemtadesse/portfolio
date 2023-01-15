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
    <div className="">
      <h1 className="text-2xl">Case studies</h1>

      <div className="flex flex-col md:flex-row gap-8 mt-16">
        <div className="basis-[50%] overflow-hidden">
          <Waypoint
            onEnter={() => setIsInView(true)}
            onLeave={() => setIsInView(false)}
          >
            <animated.div
              className=" w-full h-full rounded-xl"
              style={imageAnimation}
            >
              <img src="/showcase_1.png" />
            </animated.div>
          </Waypoint>
        </div>
        <div className="basis-[40%]">
          <h2 className="uppercase text-lg font-medium text-gray-500">
            {current.category}
          </h2>

          <div className="flex items-center mt-2">
            <h1 className="text-3xl">{current.projectTitle}</h1>
            <button className="flex items-center ml-12 mr-3">
              <MemoLeft className="text-3xl text-gray-500 hover:text-gray-700" />
            </button>

            <button className="flex items-center">
              <MemoRight className="text-3xl text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="border-b-4 border-gray-500 my-8 w-20 rounded-full"></div>
          <p className="text-lg font-light">{current.description}</p>
          <button className="mt-12 text-blue-500 font-medium">
            See the details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
