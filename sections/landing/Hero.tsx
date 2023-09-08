"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Download } from "react-feather";

import { Container } from "../../components/Container";
import { Socials } from "../../components/Socials";
import { Button } from "../../components/Button";
import { FAB } from "../../components/FAB";
import { useEffect, useState } from "react";
import { Modal } from "../../components/modals/Modal";
import { ContactForm } from "../../components/modals/ContactForm";

export const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <Container className="lg:pt-24 lg:pb-12 py-12  min-h-[calc(100vh-64px)] flex flex-col justify-center gap-8">
      <div className="text-center md:text-start mb-4">
        <section className="font-medium uppercase text-xl lg:text-2xl">
          Hi, I’m Dagem Tadesse
        </section>

        <div className="flex items-center flex-col md:flex-row gap-8">
          <h1 className="text-4xl lg:text-[56px] uppercase font-medium grow leading-normal text-darkerGrey">
            your friendly neighborhood extraordinaire <AnimatedText /> <br />
            Engineer
          </h1>

          <Socials variant="sm" layoutStyle="md:flex-col flex-row" />
        </div>

        <div className="lg:mt-6 flex gap-6 flex-col md:flex-row mt-16 justify-center md:justify-start">
          <Button
            variant="outlined"
            startIcon={<MessageSquare size={18} />}
            onClick={() => setShowContact(true)}
          >
            Chat with me
          </Button>
          <a href="/fiels/Resume 2.0.pdf" download={"Dagem-Tadesse-Resume"}>
            <Button variant="filled" startIcon={<Download size={18} />} fullWidth>
              Download Resume
            </Button>
          </a>
        </div>
      </div>
      <div className="hidden lg:block">
        <a href="#bio">
          <FAB />
        </a>
      </div>

      <AnimatePresence>
        {showContact && (
          <Modal onClose={() => setShowContact(false)}>
            <ContactForm onClose={() => setShowContact(false)} />
          </Modal>
        )}
      </AnimatePresence>
    </Container>
  );
};

const AnimatedText = () => {
  const texts = ["UI / UX", "Software"];
  const [currentIndex, setCurrentPage] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrentPage((val) => (val + 1) % texts.length),
      3500
    );
    return () => clearInterval(timer);
  });

  return (
    <div className="inline-block  overflow-hidden  align-bottom mb-[14px] lg:h-[56px]  relative">
      <AnimatePresence mode="wait">
        <motion.span
          className="whitespace-nowrap block relative leading-none bg-white"
          key={`animated-${currentIndex}`}
          initial={{ y: "50%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          {texts[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};
