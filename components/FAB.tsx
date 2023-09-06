import classNames from "classnames";
import { useState } from "react";
import { ChevronsDown } from "react-feather";

export const FAB = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <button
      className={classNames(
        "border border-customBlack rounded-full p-2 mx-auto block animate-bounce hover:bg-black hover:bg-opacity-5",
        { "animate-pulse-animation": isActive }
      )}
      onAnimationEnd={(e) =>
        e.animationName == "pulse-animation" && setIsActive(false)
      }
      onClick={() => {
        setIsActive(true);
      }}
    >
      <ChevronsDown className="text-3xl stroke-1" size={28} />
    </button>
  );
};
