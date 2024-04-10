import { IconButton } from "@mui/material";
import classNames from "classnames";
import { useState } from "react";
import { ChevronsDown } from "react-feather";

export const FAB = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <IconButton
      sx={{ borderWidth: 1, borderColor: "divider", borderStyle: 'solid'}}
      className={classNames(
        "border border-divider rounded-full p-2 mx-auto block animate-bounce hover:bg-black hover:bg-opacity-5",
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
    </IconButton>
  );
};
