import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-14">
      <div className={`max-w-[1920px] ${className}`}>{children}</div>
    </div>
  );
};
