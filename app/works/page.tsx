import { Container } from "@mui/material";
import { Works } from "../../sections/landing/Works";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <Container sx={{ py: 2 }}>
        <Works />
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "My works | Dagem Tadesse",
};
