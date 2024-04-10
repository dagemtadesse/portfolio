import { ReactNode } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { Box, Link, Typography } from "@mui/material";

export const NavMenu = ({
  children,
  href,
  handleClick,
}: {
  children: ReactNode;
  handleClick: () => void;
  href: string;
}) => {
  const path = usePathname();
  const active = path.startsWith(href);

  return (
    <Link
      component={NextLink}
      href={href}
      className="group"
      onClick={handleClick}
      underline="none"
      color="secondary"
      sx={{
        "&:hover span": { width: 24 },
      }}
    >
      <Typography textTransform={"uppercase"} fontWeight={'medium'}>{children}</Typography>
      <Box
        component="span"
        sx={{
          display: "block",
          transition: "all ease-in-out 300ms",
          height: "1px",
          borderBottomColor: "secondary.main",
          borderBottomWidth: 1,
          borderBottomStyle: "solid",
          width: active ? 24 : 0,
        }}
      />
    </Link>
  );
};
