import classNames from "classnames";
import { ReactNode } from "react";

const Container = ({
  children,
  navHeight,
  className,
  sm,
  padding,
}: {
  children: ReactNode;
  navHeight?: number;
  className?: string;
  sm?: boolean;
  padding?: number;
}) => {
  
  const containerStyle = classNames(
    "flex items-center mx-auto px-[40px] max-w-[1360px] mx-auto relative flex-wrap",
    {
      "min-h-screen": !sm,
      "py-10": !padding,
    }
  );
  return (
    <div className={className}>
      <div
        className={containerStyle}
        style={{ minHeight: !sm ? `calc(100vh - ${navHeight}px)` : "auto",}}
      >
        {children}
      </div>
    </div>
  );
};

export default Container;
