import { ReactNode } from "react";

export const Heading = ({ children, colorClass }: { children: ReactNode, colorClass?: string }) => {
  return (
    <h1 className="text-xl lg:text-2xl uppercase font-semibold">
      {children} <span className={`block w-10 h-0.5 ${colorClass || "bg-white"}`}></span>
    </h1>
  );
};
