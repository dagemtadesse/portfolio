"use client";

import { motion } from "framer-motion";
import { Container } from "../../components/Container";
import { ExpertiesCard } from "../../components/cards/ExpertiesCard";
import { Heading } from "../../components/Heading";

import { container, slideUp } from "../../components/animations";

export const Experties = () => {
  return (
    <Container className="my-24">
      <div className="grid place-items-center">
        <Heading>My Experties</Heading>
      </div>

      <motion.div
        className="grid grid-cols-4 lg:grid-cols-12 mt-8 gap-4"
        variants={container}
        initial={"hidden"}
        whileInView={"show"}
        viewport={{ once: true }}
      >
        <motion.div className="col-span-4" variants={slideUp}>
          <ExpertiesCard
            image="/v3/icons/web-development.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="Web App Development"
          />
        </motion.div>
        <motion.div className="col-span-4" variants={slideUp}>
          <ExpertiesCard
            image="/v3/icons/ux-design.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="UI/UX design"
          />
        </motion.div>
        <motion.div className="col-span-4" variants={slideUp}>
          <ExpertiesCard
            image="/v3/icons/mobile-development.svg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, "
            title="Mobile App Development"
          />
        </motion.div>
      </motion.div>
    </Container>
  );
};
