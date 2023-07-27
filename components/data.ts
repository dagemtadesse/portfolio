export const WORKS: {
  group: string;
  items: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    tags: string[];
    codeLink?: string;
    demoLink?: string;
    caseStudyLink?: string;
  }[];
}[] = [
  {
    group: "Web app Development",
    items: [
      {
        id: "wa-1",
        title: "Lorem ipsum dolor sit amet",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, consectetur eget nisi et, volutpat lacinia justo.`,
        tags: ["React", "Node.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/kemer-landing.png",
        codeLink: "a",
        demoLink: "a",
      },
    ],
  },
  {
    group: "Mobile App Development",
    items: [
      {
        id: "ma-1",
        title: "Lorem ipsum dolor sit amet",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, consectetur eget nisi et, volutpat lacinia justo.`,
        tags: ["React", "Node.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/kemer-landing.png",
        codeLink: "a",
        demoLink: "a",
      },
    ],
  },
  {
    group: "UI/UX Design",
    items: [
      {
        id: "ui-1",
        title: "A Landing webpage design For Kemer PLC",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, consectetur eget nisi et, volutpat lacinia justo.`,
        tags: ["React", "Node.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/kemer-landing.png",
        codeLink: "a",
        demoLink: "a",
      },
      {
        id: "ui-2",
        title: "Food Ordering App",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, consectetur eget nisi et, volutpat lacinia justo.`,
        tags: ["React", "Node.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/food-ordering.png",
        codeLink: "a",
        demoLink: "a",
      },
    ],
  },
];

export const EXPERIENCES = [
  {
    title: "Full-stack engineer at Super consult PLC",
    duration: "July 2022 to Present",
    techs: [
      "Angular",
      ".Net",
      "AngularMaterial",
      "UI_Deisgn",
      "TypeScript",
      "JavaScript",
      "Requirement_engineering",
    ],
  },
  {
    title: "Full-stack engineer at Super consult PLC",
    duration: "July 2022 to Present",
    techs: [
      "React",
      "Next.js",
      "TailwindCSS",
      "MUI",
      "TypeScript",
      "JavaScript",
      "Redux",
    ],
  },
];

export const CASE_STUDIES = [
  {
    title: "Lorem ipsum dolor sit amet",
    thumbnail: "/v3/picture/web-dev-1.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    augue lacus, bibendum eget bibendum sit amet, viverra nec lacus. Ut
    faucibus lorem sed porta sodales.`,
    id: "cs-0",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    thumbnail: "/v3/picture/web-dev-1.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    augue lacus, bibendum eget bibendum sit amet, viverra nec lacus. Ut
    faucibus lorem sed porta sodales.`,
    id: "cs-1",
  },
  {
    title: "Lorem ipsum dolor sit amet",
    thumbnail: "/v3/picture/web-dev-1.jpeg",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
    augue lacus, bibendum eget bibendum sit amet, viverra nec lacus. Ut
    faucibus lorem sed porta sodales.`,
    id: "cs-2",
  },
];
