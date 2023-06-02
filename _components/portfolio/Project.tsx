import { motion } from "framer-motion";
import { slideToLeft } from "../animations";

const Project = ({
  title,
  description,
  link,
  index,
}: {
  index: number;
  title: string;
  link: string;
  description: string;
}) => {
  const isRepo = link.includes("github");

  return (
    <motion.div
      className="bg-white w-full shrink-0 md:min-w-[335px] max-w-[335px] px-6 py-5"
      id={"project_" + index}
      variants={slideToLeft}
    >
      <h1 className="text-[128px] text-darkBlue text-center">{index + 1}</h1>
      <h2 className="text-xl text-black mt-5">{title}</h2>
      <p
        className="text-darkBlue mt-4 text-sm overflow-hidden whitespace-pre-wrap line-clamp-3"
      
      >
        {description}
      </p>
      <div className="flex gap-4 mt-5">
        <a href={link} target="_blank">
          {!isRepo ? (
            <img src="/icons/glob.svg" />
          ) : (
            <img src="/icons/git.svg" />
          )}
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
