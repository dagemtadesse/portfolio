import Image from "next/image";

import { fadeIn } from "../animations";
import { ReactNode } from "react";
import { Card, CardContent, Typography } from "@mui/material";

export const InfoCard = ({
  title,
  description,
  date,
  icon,
}: {
  title: string;
  description: string;
  date: string;
  icon: ReactNode;
}) => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ display: "flex", gap: 4 }}>
        {icon}
        <div>
          <Typography fontWeight="medium">{title}</Typography>
          <Typography
            gutterBottom
            variant="body1"
            color="text.secondary"
            mt={2}
            className="text-[15px] mt-4"
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            className="font-light text-sm mt-3"
          >
            {date}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
