import { ReactNode } from "react";

export const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="max-w-[1076px] mx-auto px-4 sm:px-6">
      <div className={className || ""}>{children}</div>
    </div>
  );
};
