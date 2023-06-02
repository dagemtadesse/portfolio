"use client";

import { ReactNode } from "react";

import { FooterSocialIcon } from "../components/FooterSocialIcon";
import { Container } from "../components/Container";

import "../styles/index.css";
import { Header } from "../components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
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
      </head>
      <body className="font-ibmplex text-customBlack">
        <Header />
        <div className="flex flex-col min-h-screen">
          <main className="grow mt-[64px]">{children}</main>

          <footer className="border-t border-lightGrey">
            <Container className="flex justify-between items-center py-2">
              <p className="font-light text-base">Copyright © 2023 </p>
              <ul className="flex items-center gap-6">
                <FooterSocialIcon
                  src="/v3/icons/gmail.svg"
                  alt="gmail account"
                />
                <FooterSocialIcon
                  src="/v3/icons/linkedin.svg"
                  alt="LinkedIn profile"
                />
                <FooterSocialIcon
                  src="/v3/icons/twitter.svg"
                  alt="Twitter profile"
                />
              </ul>
            </Container>
          </footer>
        </div>
      </body>
    </html>
  );
}
