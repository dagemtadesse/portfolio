import React from "react";
import { ReactNode } from "react";
import { Mail } from "react-feather";

export const IconButton = ({
  children,
  link,
}: {
  children: ReactNode;
  link?: string;
}) => {
  const Wrapper = !!link ? "a" : React.Fragment;
  const wrapperProps = !!link ? { target: "_blank", href: link } : {};

  return (
    <Wrapper {...wrapperProps}>
      <button className="rounded-full aspect-square p-3 block bg-transparent hover:bg-white hover:bg-opacity-30 transition-colors duration-300 ease-in-out active:bg-gray-200">
        {children}
      </button>
    </Wrapper>
  );
};
