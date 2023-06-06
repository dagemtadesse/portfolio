"use client";

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
        As a software engineer, I am driven by creativity and enthusiasm,
        particularly when it comes to front-end development and the web in
        general. I also dabble with mobile app development and find great joy in
        exploring UI/UX design. I possess a genuine passion for exploring new
        technologies, constantly seeking opportunities to expand my horizons and
        embrace innovative approaches.
      </p>

      <ul className="mt-12 flex flex-col gap-4">
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
