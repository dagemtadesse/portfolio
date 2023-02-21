import { motion } from "framer-motion";
import { slideToLeft } from "../animations";

const Project = () => {
  return (
    <motion.div className="bg-white min-w-[335px] max-w-[335px] px-6 py-5" variants={slideToLeft}>
      <h1 className="text-[128px] text-darkBlue text-center">1</h1>
      <h2 className="text-xl text-black mt-5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        voluptatem!
      </h2>
      <p className="text-darkBlue mt-4 text-sm">
        Tristique vitae amet at vitae ac. Elit nibh molestie lorem maecenas
        augue amet leo faucibus non.
      </p>
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
