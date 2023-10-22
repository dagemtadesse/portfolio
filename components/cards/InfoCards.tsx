import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "../animations";
import { ReactNode } from "react";

export const InfoCard = ({
  title,
  description,
  date,
  icon,
}: {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
}) => {
  return (
    <motion.li className="flex border border-divider p-4 gap-4 items-start" variants={fadeIn}>
      {icon}
      <div>
        <h2 className="font-medium leading-none text-white text-opacity-100">{title}</h2>
        <p className="text-[15px] mt-4">{description}</p>
        <p className="font-light text-sm mt-3">{date}</p>
      </div>
    </motion.li>
  );
};
