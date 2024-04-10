"use client";
import { AnimatePresence, motion } from "framer-motion";
import { MessageSquare, Download } from "react-feather";

import { Socials } from "../../components/Socials";
import { FAB } from "../../components/FAB";
import { useEffect, useState } from "react";
import { ContactForm } from "../../components/modals/ContactForm";
import { Box, Button, Stack, Typography, alpha, useTheme } from "@mui/material";

export const HeroSection = () => {
  const [showContact, setShowContact] = useState(false);
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "calc(100vh-64px)",
        py: 8,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <GlowEffect />
      <Stack justifyContent={"center"} gap={1} position={"relative"}>
        <Box sx={{ textAlign: { xs: "center", md: "start", mb: 1 } }}>
          <Typography variant="h6" textTransform={"uppercase"} gutterBottom>
            Hi, I’m Dagem Tadesse
          </Typography>

          <Stack
            alignItems="center"
            gap={4}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Typography
              component="h1"
              variant={"h2"}
              fontWeight={500}
              fontSize={{ xs: "10.5vw", sm: '7.5vw', md: "6vw", lg: "5vw" }}
              textTransform={"uppercase"}
            >
              your friendly neighborhood extraordinaire software Engineer
            </Typography>

            <Stack
              direction={{ xs: "row", md: "column" }}
              alignItems={"center"}
              gap={2}
            >
              <Socials direction="column" />
            </Stack>
          </Stack>

          <Stack
            direction={{ xs: "column", md: "row" }}
            sx={{ mt: 3 }}
            gap={1.5}
          >
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<MessageSquare size={18} />}
              onClick={() => setShowContact(true)}
              size="large"
            >
              Chat with me
            </Button>

            <Button
              LinkComponent={"a"}
              href="/fiels/Resume 2.0.pdf"
              download={"Dagem-Tadesse-Resume"}
              startIcon={<Download size={18} />}
              size="large"
              variant="contained"
            >
              Download Resume
            </Button>
          </Stack>
        </Box>

        <Box
          sx={{ display: { xs: "hidden", lg: "block" }, mx: "auto", mt: 4 }}
          component="a"
          href="#bio"
        >
          <FAB />
        </Box>
      </Stack>

      <AnimatePresence>
        {showContact && <ContactForm onClose={() => setShowContact(false)} />}
      </AnimatePresence>
    </Box>
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
          className="whitespace-nowrap block relative leading-none bg-background text-white"
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

const GlowEffect = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        background: 'url("/blob.svg")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "55% 50%",
        "&:after": {
          position: "absolute",
          inset: 0,
          bgcolor: alpha(theme.palette.background.default, 0.6),
          content: '""',
          backdropFilter: "blur(115px)",
        },
      }}
    ></Box>
  );
};
