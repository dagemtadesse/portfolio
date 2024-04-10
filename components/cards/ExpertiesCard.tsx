import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { ReactNode } from "react";

type ExpertiesCardPops = {
  image: ReactNode;
  title: string;
  description: string;
};

export const ExpertiesCard = ({
  image,
  title,
  description,
}: ExpertiesCardPops) => {
  return (
    <Card variant="outlined" sx={{height: '100%', py: 3, px: 2}}>
      <CardMedia sx={{ p: 2 }}>{image}</CardMedia>

      <CardContent>
        <Typography
          component={"h2"}
          className="font-medium text-xl"
          variant="subtitle2"
          mb={2}
        >
          {title}
        </Typography>
        <Typography
          component={"p"}
          className="text-base text-white text-opacity-75 mt-6"
          variant="body2"
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
