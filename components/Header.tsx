"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "react-feather";
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";
import { CommingSoonBanner } from "./modals/CommingSoonBanner";
import { usePathname, useRouter } from "next/navigation";
import { Logo } from "./logo";

export const Header = () => {
  const path = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const showBanner = path.startsWith("/case-study");

  const menuItems = (
    <>
      <NavMenu href="/about" handleClick={() => setIsOpen(false)}>
        about
      </NavMenu>
      <NavMenu href="/works" handleClick={() => setIsOpen(false)}>
        work
      </NavMenu>
      <NavMenu href="/case-study" handleClick={() => setIsOpen(false)}>
        case studies
      </NavMenu>
    </>
  );

  return (
    <header className="fixed w-full z-40">
      <nav className="py-[15px] border-b dark:border-divider  dark:bg-background dark:bg-opacity-90 backdrop-blur-sm">
        <Container className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-lg gap-6">
            <Logo />
            <section className="font-medium dark:text-white">&lt;Dagem/&gt;</section>
          </Link>

          <ul className="gap-6 hidden lg:flex">{menuItems}</ul>

          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu className="stroke-1 text-2xl" />
          </button>
        </Container>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black bg-opacity-40 absolute top-0 bottom-0 left-0 right-0 z-50 pointer"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="gap-8 py-8 px-4 bg-background border-divider border flex flex-col"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -300 }}
              animate={{ y: 0 }}
              exit={{ y: -300 }}
            >
              {menuItems}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
