import classNames from "classnames";
import { ReactNode, useState } from "react";

type ButtonProps = {
  variant: "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  startIcon?: ReactNode;
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  disable?: boolean;
  fullWidth?: boolean;
};

export const Button = ({
  onClick,
  variant,
  size = "md",
  disable,
  children,
  startIcon,
  type,
  fullWidth
}: ButtonProps) => {
  const [isActive, setIsActive] = useState(false);

  const style = classNames(
    "uppercase font-medium before:absolute before:inset-0 relative rounded",
    {
      "hover:before:bg-black hover:before:bg-opacity-5 active:before:bg-opacity-10 border border-divider":
        variant == "outlined",
      "bg-primary text-white active:before:bg-black active:before:bg-opacity-20":
        variant == "filled",
      "animate-pulse-animation": isActive,
      "before:bg-white before:bg-opacity-50": variant == "filled" && disable,
      "hover:before:bg-white hover:before:bg-opacity-10": variant == "filled" && !disable,
      "w-full": fullWidth
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
      type={type}
      disabled={disable}
    >
      <div
        className={classNames(
          "px-8 flex items-center gap-4 justify-center relative",
          { "py-4": size == "md", "py-2": size == "sm" }
        )}
      >
        {startIcon}
        {children}
      </div>
    </button>
  );
};
