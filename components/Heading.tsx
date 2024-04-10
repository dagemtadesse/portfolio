import { Box, Typography } from "@mui/material";
import { ReactNode } from "react";

export const Heading = ({
  children,
  colorClass,
}: {
  children: ReactNode;
  colorClass?: string;
}) => {
  return (
    <Typography variant="h5" gutterBottom fontWeight="medium">
      {children}{" "}
      <Box component="span" sx={{ width: 20, height: 2, bgcolor: "#fff" }} />
    </Typography>
  );
};
