import AwardsIcon from "../icons/AwardsIcon";
import BookIcon from "../icons/BookIcon";
import ProjectIcon from "../icons/ProjectIcon";
import WorkIcon from "../icons/WorkIcon";

const PortfolioData = [
  {
    icon: <BookIcon />,
    title: "education",
    items: [
      {
        date: "October 2019 - July 2024",
        title: "Addis Ababa University",
        extra: "Software Engineering Stream",
        description:
          "Bachelorof Science in Software Engineering and Computing Technology",
      },
    ],
  },
  {
    icon: <WorkIcon />,
    title: "work experience",
    items: [
      {
        date: "October 2019 - now",
        title: "Addis Ababa University",
        description:
          "Bachelorof Science in Software Engineering and Computing Technology",
      },
    ],
  },
  {
    icon: <ProjectIcon />,
    title: "Projects",
    items: [
      {
        date: "Nov 22 - Dec 3, 2022 to Present",
        title: "Food Ordering App - UI Design",
        tags: ["Figma"],
        link: "gitrepo",
        description:
          "As part of the Google UI/UX certificate program, I conducted interviews, created empathy maps and user personas, created Wireframes, conducted usability studies and developed HI-FI prototype.",
      },
      {
        date: "October 2019 - July 2024",
        title: "World Medical Card Clone",
        tags: ["TailwindCSS", "React.js", "TypeScript"],
        link: "gitrepo",
        description:
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,",
      },
      {
        date: "December 2022 to Present",
        title: "Customer Reviews app",
        tags: ["TypeScript", "PostgresSQL", "Flutter"],
        link: "gitrepo",
        description:
          "Utilized TypeScript, Express.js, and PostgreSQL to create a restful API. Flutter is used to create the cross-platform mobile app.",
      },
    ],
  },
  {
    icon: <AwardsIcon />,
    title: "Awards",
    items: [
      {
        date: "2022 September 6 - December 27",
        title: "Google UI/UX certificate",
        description:
          "A certificate program comprising foundations of User experience design, conducting UX research, building Wireframes and low-fidelity prototypes, creating HI-FI designs and prototypes, and responsive web design.",
      },
    ],
  },
];

export default PortfolioData;
