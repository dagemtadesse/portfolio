import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu} from "react-feather"
import { Container } from "./Container";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="py-[15px] border-b border-lighterGrey fixed w-full bg-white z-40">
        <Container className="flex justify-between items-center">
          <Link href="/" className="flex items-center text-lg gap-6">
            <Image src="/v3/logo.svg" width={34} height={34} alt="Logo" />
            <section className="font-medium">Dagem</section>
          </Link>

          <ul className="gap-6 hidden lg:flex">
            <NavMenu href="/about">about</NavMenu>
            <NavMenu href="/works">work</NavMenu>
            <NavMenu href="/case-study">case studies</NavMenu>
          </ul>

          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <Menu className="stroke-1 text-2xl"/>
          </button>
        </Container>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="bg-black bg-opacity-40 fixed top-0 bottom-0 left-0 right-0 z-50 pointer"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.ul
              className="gap-8 py-8 px-4 bg-white flex flex-col"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: -300 }}
              animate={{ y: 0, }}
              exit={{ y: -300 }}
            >
              <NavMenu href="/about">about</NavMenu>
              <NavMenu href="/works">work</NavMenu>
              <NavMenu href="/case-study">case studies</NavMenu>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
