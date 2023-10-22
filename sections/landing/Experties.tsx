"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/Container";
import { ExpertiesCard } from "../../components/cards/ExpertiesCard";
import { Heading } from "../../components/Heading";

import { container, slideUp } from "../../components/animations";
import { UxDesign } from "../../components/icons/ux-design";
import { WebDevelopment } from "../../components/icons/web-development";
import { MobileDevelopment } from "../../components/icons/mobile-development";

export const Experties = () => {
  return (
    <Container className="my-24">
      <div className="">
        <Heading>My Experties</Heading>
      </div>

      <motion.div
        className="grid grid-cols-4 lg:grid-cols-12 mt-8 gap-4 items-stretch"
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <motion.div className="col-span-4" variants={slideUp}>
          <ExpertiesCard
            image={<WebDevelopment/>}
            description="I'm well-versed in modern front-end frameworks like React and Angular, and I love diving into full-stack development."
            title="Web App Development"
          />
        </motion.div>
        <motion.div className="col-span-4 " variants={slideUp}>
          <ExpertiesCard
            image={<UxDesign/>}
            description="I have a natural eye for design and I'm really comfortable using tools like Figma and Adobe XD. "
            title="UI/UX design"
          />
        </motion.div>
        <motion.div className="col-span-4" variants={slideUp}>
          <ExpertiesCard
            image={<MobileDevelopment/>}
            description="I craft visually appealing mobile apps utilizing cross-platform frameworks such as Flutter and React Native."
            title="Mobile App Development"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
