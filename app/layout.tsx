import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import { Socials } from "../components/Socials";

// import "../styles/index.css";
import { Header } from "../components/common/Header";
import { SnackBarProvider } from "../components/modals/SnackBar";
import { Metadata } from "next";
import { CommingSoonBanner } from "../components/modals/CommingSoonBanner";
import { Theme } from "../components/Theme";
import { Box, Container, Stack, Typography } from "@mui/material";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth dark">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className=" ">
        <Theme>
          <Header />
          <Stack component={"main"} sx={{ minHeight: "100vh" }}>
            <Box component="main" sx={{ flexGrow: 1, mt: "65px" }}>
              <SnackBarProvider>{children}</SnackBarProvider>
            </Box>

            <footer>
              <Container>
                <Stack
                  direction={{ xs: "column", md: "row" }}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  py={2}
                  gap={2}
                >
                  <Typography variant="body2">Copyright © 2023 </Typography>
                  <Stack direction={"row"}>
                    <Socials direction="row" />
                  </Stack>
                </Stack>
              </Container>
            </footer>
          </Stack>
        </Theme>
        <div id="modal-contianer" className=""></div>
        <Analytics />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Dagem Tadesse",
  description:
    "Meet Me - Dagem Tadesse: Software Engineer and UI/UX Enthusiast. Discover my dynamic portfolio showcasing the intersection of code and design expertise.",
};
