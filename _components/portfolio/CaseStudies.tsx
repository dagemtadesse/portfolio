import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { projects } from "../../_pages/portfolio";
import { opacity, scaledDownOpacity } from "../animations";
import MemoLeft from "../icons/Left";
import MemoRight from "../icons/Right";

import { Git, Globe2 } from "react-bootstrap-icons";

const CaseStudies = () => {
  const wrapper = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const [isSticky, setIsSticky] = useState(false);

  const current = projects.at(index)!;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (wrapper.current) {
        const bound = wrapper.current.getBoundingClientRect();
        if (bound?.top < 0) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    });
  }, [wrapper.current]);

  const showNext = () => setIndex((index) => (index + 1) % projects.length);
  const showPrev = () =>
    setIndex((index) =>
      index != 0 ? (index - 1) % projects.length : projects.length - 1
    );

  useEffect(() => console.log(index));
  return (
    <div ref={wrapper}>
      <header
        className={classNames("transition-all duration-300 ease-in-out", {
          "fixed top-0 w-full left-0 right-0 bg-darkBlue bg-opacity-90":
            isSticky,
        })}
      >
        <div
          className={classNames(
            "max-w-[1360px] flex justify-between items-center py-4",
            { "px-[40px] mx-auto relative z-10": isSticky }
          )}
        >
          <h1 className="text-2xl">Case studies</h1>

          <div className="flex items-center mt-2 gap-5">
            <button className="flex items-center" onClick={showPrev}>
              <MemoLeft className="text-3xl text-gray-500 hover:text-gray-700" />
            </button>

            <span className="text-xl font-light">
              {index + 1} / {projects.length}
            </span>

            <button className="flex items-center" onClick={showNext}>
              <MemoRight className="text-3xl text-gray-500 hover:text-gray-700" />
            </button>
          </div>
        </div>
      </header>

      <div className="">
        <AnimatePresence custom={""} mode="wait">
          <motion.div
            className="lg:max-w-[50%]"
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            variants={opacity}
            key={"caseStudy_text" + index}
          >
            <h1 className="text-3xl">{current.title}</h1>

            <div className="border-b-4 border-white my-5 w-20 rounded-full"></div>

            <p className="font-light">{current.description}</p>
            <div className="mt-6 mb-4 flex gap-4 font-light">
              <a
                href={current.repoLink}
                target="_blank"
                className=" bg-white bg-opacity-5 hover:bg-opacity-10 py-1 px-4 rounded-sm flex gap-4 items-center"
              >
                Code
                <span>
                  <Git size={16}/>
                </span>
              </a>

              <a
                href={current.link}
                target="_blank"
                className=" bg-white bg-opacity-5 hover:bg-opacity-10  py-1 px-4 rounded-sm flex gap-4 items-center"
              >
                Visit Demo <span><Globe2/></span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <div className="flex gap-6 justify-center items-center flex-wrap">
            {current.showcases &&
              current.showcases.map((item) => (
                <motion.img
                  key={item}
                  src={item}
                  className="block mx-auto basis-[100%]"
                  initial={"hidden"}
                  animate={"visible"}
                  exit={"hidden"}
                  variants={scaledDownOpacity}
                />
              ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudies;
