export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 0.3,
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

export const slideUp = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
    sacel: 0.95,
  },
  show: {
    opacity: 1,
    scale: 1,
  },
};

export const opacity = {
  hidden: {
    opacity: 0.5,
  },
  show: {
    opacity: 1,
  },
};

export const growHorizontal = {
  hidden: { opacity: 0, width: 0 },
  show: {
    width: "100%",
    opacity: 1,
  },
};
