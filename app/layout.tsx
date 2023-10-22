import { ReactNode } from "react";
import { Analytics } from '@vercel/analytics/react';

import { Socials } from "../components/Socials";
import { Container } from "../components/Container";

import "../styles/index.css";
import { Header } from "../components/Header";
import { SnackBarProvider } from "../components/modals/SnackBar";
import { Metadata } from "next";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.png"></link>
      </head>
      <body className="font-ibmplex text-white dark:bg-background">
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="grow mt-[64px]">
            <SnackBarProvider>{children}</SnackBarProvider>
          </main>

          <footer className="border-t border-divider">
            <Container className="flex justify-between items-center py-2">
              <p className="font-light text-sm">Copyright © 2023 </p>
              <Socials variant="sm" />
            </Container>
          </footer>
        </div>
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
