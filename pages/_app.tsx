import "../styles/global.css";
import Link from "next/link";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { animated, useSpring, useSpringRef } from "react-spring";

import Nav from "../components/header/Nav";
import Footer from "../components/layout/Footer";

export type Pages = "Home" | "About" | "Portfolio";

export default function App({ Component, pageProps }: AppProps) {
  const [isShown, setIsShown] = useState(false);
  const [currentPage, setCurrentPage] = useState<Pages>("Home");
  const [yPostion, setYPosition] = useState(0);

  const skillsBtnAnimRef = useSpringRef();
  const socialsAnimRef = useSpringRef();
  const sideBarAnimRef = useSpringRef();

  const props = useSpring({
    config: { tension: 200 },
    from: { y: 0 },
    to: { y: isShown ? -yPostion : 0 },
  });

  useEffect(() => {
    setYPosition(
      document.querySelector("#skills_contianer")?.clientHeight || 0
    );
  });

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

      <Component
        {...pageProps}
        setCurrentPage={setCurrentPage}
        animationRefs={[socialsAnimRef, skillsBtnAnimRef, sideBarAnimRef]}
      />

      <Footer/>
    </>
  );
}
