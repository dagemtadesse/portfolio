import classNames from "classnames";
import { ReactNode, useState } from "react";

type ButtonProps = {
  variant: "filled" | "outlined";
  onClick?: () => void;
  startIcon?: ReactNode;
  children: ReactNode;
};
export const Button = ({
  onClick,
  variant,
  children,
  startIcon,
}: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const style = classNames(
    "uppercase font-medium before:absolute before:inset-0 relative",
    {
      "border border-customBlack hover:before:bg-black hover:before:bg-opacity-5 active:before:bg-opacity-10":
        variant == "outlined",
      "bg-customBlack text-white hover:before:bg-white hover:before:bg-opacity-10  active:before:bg-black active:before:bg-opacity-20":
        variant == "filled",
      "animate-pulse-animation": isActive,
    }
  );

  return (
    <button
      className={style}
      onAnimationEnd={(e) =>
        e.animationName == "pulse-animation" && setIsActive(false)
      }
      onClick={() => {
        setIsActive(true);
        onClick?.();
      }}
    >
      <div className="py-4 px-8 flex items-center gap-4 justify-center relative">
        {startIcon}
        {children}
      </div>
    </button>
  );
};
