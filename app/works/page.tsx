import { Container } from "../../components/Container";
import { Works } from "../../sections/landing/Works";
import { Metadata } from "next";

export default function Page() {
  return (
    <>
      <Container className="my-8">
        <Works />
      </Container>
    </>
  );
}

export const metadata: Metadata = {
  title: "My works | Dagem Tadesse",
};
