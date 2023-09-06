"use client";

import { ReactNode } from "react";
import { Twitter, GitHub, Mail, Linkedin } from "react-feather";

import { Socials } from "../components/Socials";
import { Container } from "../components/Container";

import "../styles/index.css";
import { Header } from "../components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="scroll-smooth">
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
      <body className="font-ibmplex text-customBlack">
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="grow mt-[64px]">{children}</main>

          <footer className="border-t border-gray-200">
            <Container className="flex justify-between items-center py-2">
              <p className="font-light text-sm">Copyright © 2023 </p>
              <Socials variant="sm" />
            </Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
