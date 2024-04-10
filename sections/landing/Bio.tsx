"use client";

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { Heading } from "../../components/Heading";

export const Bio = () => {
  const theme = useTheme();
  return (
    <Card
      id="bio"
      sx={{
        bgcolor: "rgba(255,255,255,0.05)",
        border: '1px solid rgba(255,255,255,0.1)'
      }}
    >
      <CardContent>
        <Stack gap={2} direction={"row"}>
          <Avatar src="/v3/dagem.png" alt="Dagem Tadesse's portrait" />
          <Box>
            <Heading>About me</Heading>
            <Typography mt={2}>
              I am a software engineer, driven by creativity and enthusiasm,
              particularly when it comes to front-end development and the web in
              general. I also dabble in mobile app development and find great
              joy in exploring UI/UX design. I possess a genuine passion for
              exploring new technologies, constantly seeking opportunities to
              expand my horizons and embrace innovative approaches.
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};
