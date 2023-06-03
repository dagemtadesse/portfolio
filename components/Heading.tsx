import { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="text-xl text-customBlack lg:text-2xl uppercase font-semibold">
      {children} <span className="block w-10 h-0.5 bg-customBlack"></span>
    </h1>
  );
};
