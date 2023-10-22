import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";

export const NavMenu = ({
  children,
  href,
  handleClick
}: {
  children: ReactNode;
  handleClick: () => void;
  href: string;
}) => {
  const path = usePathname();
  const active = path.startsWith(href);

  return (
    <li className="group">
      <Link href={href} className="uppercase text-customBlack dark:text-white" onClick={handleClick}>
        {children}
      </Link>
      <span
        className={classNames(
          "group-hover:w-6 border-b border-white h-[1px] block  transition-all duration-300",
          { "w-0": !active, "w-6": active }
        )}
      ></span>
    </li>
  );
};
