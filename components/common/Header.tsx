"use client";

import NextLink from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "react-feather";
import { NavMenu } from "../NavMenu";
import { Logo } from "../logo";
import {
  AppBar,
  Container,
  IconButton,
  Link,
  Modal,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = (
    <>
      <NavMenu href="/about" handleClick={() => setIsOpen(false)}>
        about
      </NavMenu>
      <NavMenu href="/works" handleClick={() => setIsOpen(false)}>
        Portfolio
      </NavMenu>
    </>
  );

  return (
    <>
      <AppBar elevation={0}>
        <Container disableGutters>
          <Toolbar
            sx={{ justifyContent: "space-between" }}
            className="py-[15px] border-b dark:border-divider  dark:bg-background dark:bg-opacity-90 backdrop-blur-sm"
          >
            <Link component={NextLink} href="/" underline="none">
              <Stack direction="row" alignItems="center" gap={1.5}>
                <Logo />
                <Typography component="span" fontWeight={"bold"}>
                  &lt;Dagem/&gt;
                </Typography>
              </Stack>
            </Link>

            <Stack
              direction="row"
              gap={3}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menuItems}
            </Stack>

            <IconButton
              onClick={() => setIsOpen(true)}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Menu className="" strokeWidth={1} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      {isOpen && (
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Paper>
            <Stack
              gap={4}
              py={4}
              px={2}
              sx={{
                borderBottomColor: "divider",
                borderBottomStyle: "solid",
                borderBottomWidth: 1,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {menuItems}
            </Stack>
          </Paper>
        </Modal>
      )}
    </>
  );
};
