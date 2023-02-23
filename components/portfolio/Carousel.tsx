const skills = [
  { title: "TypeScript", icon: "/icons/typescript.svg" },
  { title: "JavaScript", icon: "/icons/javascript.svg" },
  { title: "Node.js", icon: "/icons/nodejs.svg" },
  { title: "React.js", icon: "/icons/react.svg" },
  { title: "Next.js", icon: "/icons/nextjs.svg" },
  { title: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
  { title: "Figma", icon: "/icons/figma.svg" },
  { title: "GraphQL", icon: "/icons/graphql.svg" },
  { title: "Git", icon: "/icons/gitlg.svg" },
  { title: "Flutter", icon: "/icons/flutter.svg" },
  { title: "Firebase", icon: "/icons/firebase.svg" },
];
const Carousel = () => {
  return (
    <div className="w-full self-end md:-mb-10 px-0 overflow-scroll basis-[100%] flex">
      {[1,2].map((item) => (
        <div
          className="flex py-6 gap-12 animate-marquee min-w-full w-auto basis-auto pr-12 shrink-0"
          key={"wrapper" + item}
        >
          {skills.map((skill) => (
            <div className="flex gap-6 items-center text-[#ADB5BD] hover:text-white">
              <object data={skill.icon} />{" "}
              <span className="font-light text-lg ">
                <span>{skill.title}</span>
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
