import classNames from "classnames";
import { ReactNode } from "react";

type ButtonProps = {
  variant: "filled" | "outlined";
  startIcon?: ReactNode;
  children: ReactNode;
};
export const Button = ({ variant, children, startIcon }: ButtonProps) => {
  const style = classNames("py-4 px-8 flex items-center gap-4 uppercase font-medium justify-center", {
    "border border-customBlack": variant == "outlined",
    "bg-customBlack text-white": variant == "filled",
  });

  return (
    <button className={style}>
      {startIcon}
      {children}
    </button>
  );
};
