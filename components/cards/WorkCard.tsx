import { ReactNode } from "react";
import { Globe, GitHub } from "react-feather";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";

export type WorkCardProps = {
  title: string;
  thumbnail: string;
  description: string;
  tags: string[];
  codeLink?: string;
  demoLink?: string;
  caseStudyLink?: string;
};

export const WorkCard = ({
  title,
  thumbnail,
  description,
  tags,
  codeLink,
  demoLink,
  caseStudyLink,
}: WorkCardProps) => {
  return (
    <Card variant="outlined" sx={{ position: "relative", height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ position: "relative", height: 320 }}
        component={"img"}
        image={thumbnail}
        alt="picture"
      />

      <CardContent sx={{ position: "relative", flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="subtitle2" fontWeight={"medium"}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        <Box sx={{flexGrow: 1}}/>

        <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={2}>
          {tags.map((tag, index) => (
            <Chip variant="outlined" key={`${title}-${index}`} label={tag} />
          ))}
        </Stack>

        <Stack direction={"row"} gap={1.5} mt={2}>
          {codeLink && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href={codeLink}
              startIcon={<GitHub size={20} />}
            >
              View Code
            </Button>
          )}
          {demoLink && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href={demoLink}
              startIcon={<Globe size={20} />}
            >
              View Demo
            </Button>
          )}
          {caseStudyLink && (
            <Button
              variant="contained"
              color="secondary"
              size="small"
              href={caseStudyLink}
              startIcon={<Globe size={20} />}
            >
              Case study
            </Button>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
