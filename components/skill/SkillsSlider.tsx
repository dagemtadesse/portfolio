import { motion } from "framer-motion";
import { growHorizontal, opacity } from "../animations";

const SkillsSlider = ({
  title,
  amount,
  text,
}: {
  title: string;
  amount: number;
  text: string;
}) => {
  return (
    <div>
      <div>{title}</div>
      <div
        className="flex w-full items-center gap-6 mt-1"
      >
        <div className="bg-opacity-10 bg-white rounded-full h-[6px] grow">
          <motion.div
            variants={growHorizontal}
            transition={{ duration: 1 }}
            className="h-full rounded-full overflow-hidden"
          >
            <div
              className="bg-white h-full rounded-full"
              style={{ width: `${amount}%` }}
            />
          </motion.div>
        </div>

        <motion.span variants={opacity}>{text}</motion.span>
      </div>
    </div>
  );
};

export default SkillsSlider;
