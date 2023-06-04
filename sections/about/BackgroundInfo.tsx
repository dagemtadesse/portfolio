"use client"

import { InfoCard } from "../../components/cards/InfoCards";
import { Heading } from "../../components/Heading";
import { motion } from "framer-motion";
import { container } from "../../components/animations";

export const BackgroundInfoSection = ({ id }: { id: number }) => {
  return (
    <motion.div
      data-section-id={id}
      className="scroll-mt-24 scroll-target"
      id="background"
      variants={container}
      initial={"hidden"}
      whileInView={"show"}
      viewport={{ once: true }}
    >
      <div className="mb-4 lg:hidden">
        <Heading>Education and Background</Heading>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        condimentum semper commodo. Fusce massa justo, consectetur eget nisi et,
        volutpat lacinia justo. Nullam faucibus, neque eget dictum venenatis,
        neque libero venenatis ex, quis finibus leo neque vel orci. Nam
        tristique bibendum quam vulputate vestibulum.
      </p>

      <ul
        className="mt-12 flex flex-col gap-4"
      >
        <InfoCard
          title="Addis Ababa University"
          description={`Bachelorof Science in Software Engineering and Computing
               TechnologySoftware Engineering Strea`}
          date="October 2019 - July 2024"
          icon="/v3/icons/cap.svg"
        />
        <InfoCard
          title="Addis Ababa University"
          description={`Bachelorof Science in Software Engineering and Computing
               TechnologySoftware Engineering Strea`}
          date="October 2019 - July 2024"
          icon="/v3/icons/cert.svg"
        />
      </ul>
    </motion.div>
  );
};
