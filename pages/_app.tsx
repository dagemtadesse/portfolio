import "../styles/global.css";
import Link from "next/link";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import Nav from "../components/header/Nav";
import Footer from "../components/layout/Footer";

export type Pages = "Home" | "About" | "Portfolio";

export default function App({ Component, pageProps }: AppProps) {
  const [currentPage, setCurrentPage] = useState<Pages>("Home");

  return (
    <>
      <nav className="md:flex justify-between items-center py-7">
        <div className="flex justify-between px-5 md:px-10">
          <Link href="/" className="font-bold text-lg ">
            Dagem.
          </Link>
        </div>

        <Nav currentPage={currentPage} key={currentPage} />
      </nav>

      <Component {...pageProps} setCurrentPage={setCurrentPage} />

      <Footer />
    </>
  );
}
