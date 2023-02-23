import { motion } from "framer-motion";
import { slideToLeft } from "../animations";

const Project = ({
  title,
  description,
  index,
}: {
  index: number;
  title: string;
  description: string;
}) => {
  return (
    <motion.div
      className="bg-white w-full shrink-0 md:min-w-[335px] max-w-[335px] px-6 py-5"
      id={"project_" + index}
      variants={slideToLeft}
    >
      <h1 className="text-[128px] text-darkBlue text-center">{index + 1}</h1>
      <h2 className="text-xl text-black mt-5">{title}</h2>
      <p className="text-darkBlue mt-4 text-sm">{description}</p>
      <div className="flex gap-4 mt-5">
        <a href="#">
          <object data="/icons/glob.svg"></object>
        </a>

        <a href="#">
          <object data="/icons/git.svg"></object>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
