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
        title: "IP Tracker App",
        description: `Next.js and Tailwind CSS powered web application for tracking IP addresses, utilizing the ipapi.com's API.`,
        tags: ["React", "Next.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/ip-tracker.png",
        codeLink: "https://github.com/dagemtadesse/ip-tracker",
        demoLink: "https://ip-tracker-navy-nine.vercel.app/",
      },
      {
        id: "wa-2",
        title: "Gaming Service form",
        description: `Dynamic Multi-step Gaming Service form built with Next.js and Material-UI, employing the Context API for efficient state management.`,
        tags: ["React", "Next.js", "MUI", "Context API"],
        thumbnail: "/v3/thumbnails/reactive-forms.png",
        codeLink: "https://github.com/dagemtadesse/react-multi-step-form",
        demoLink: "https://react-multi-step-form-mu.vercel.app/",
      },
      {
        id: "wa-3",
        title: "Manage Landing Page",
        description: `A landing page built using Next.js and Material-UI (MUI).`,
        tags: ["React", "MUI", "Next.js", "Responsive"],
        thumbnail: "/v3/thumbnails/manage-landing.png",
        codeLink: "https://github.com/dagemtadesse/manage-landing-page",
        demoLink: "https://manage-landing-page-ra9lr5rez-dagemtadesse.vercel.app/",
      },
      {
        id: "wa-4",
        title: "Interactive Comments",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum semper commodo. Fusce massa justo, consectetur eget nisi et, volutpat lacinia justo.`,
        tags: ["React", "Node.js", "TailwindCSS"],
        thumbnail: "/v3/thumbnails/interactive-comments.png",
        codeLink: "https://github.com/dagemtadesse/interactive-comments",
        demoLink: "https://interactive-comments-silk.vercel.app/",
      },
    ],
  },
  {
    group: "UI/UX Design",
    items: [
      {
        id: "ui-1",
        title: "A Landing webpage design For Kemer PLC",
        description: `A high-fidelity landing page prototype designed in Figma using auto layout and smart animations.`,
        tags: ["Figma", "Smart Animation", "Figma Components", "Auto Layout"],
        thumbnail: "/v3/thumbnails/kemer-landing.png",
        demoLink: "https://www.figma.com/proto/lIrJTy96yVgqLzb1W53Lik/KEMER?type=design&node-id=1-2&t=IxU1tSGptLC8WtbT-1&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=41%3A104&mode=design",
      },
      {
        id: "ui-2",
        title: "Food Ordering App",
        description: `Food Ordering App designed with Figma, starting from wireframes and progressing to the final prototype.`,
        tags: ["Figma", "Smart Animation", "Figma Components", "Auto Layout", "Wireframe", "Hifi-Prototype"],
        thumbnail: "/v3/thumbnails/food-ordering.png",
        demoLink: "https://www.figma.com/proto/vevHkSD8nctgb9LLRJYp8V/food-ordering?type=design&node-id=688-2160&t=YAOIhvEpPOoWbilh-1&scaling=min-zoom&page-id=65%3A2&starting-point-node-id=688%3A2160&show-proto-sidebar=1&mode=design",
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
      "RxJs"
    ],
  },
  {
    title: "Frontend engineer at Kemer PLC",
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
