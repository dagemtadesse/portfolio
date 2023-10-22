"use client";
import { usePathname } from "next/navigation";
import { Container } from "../Container";

export const CommingSoonBanner = () => {
  const path = usePathname();

  const showBanner = path.startsWith("/case-study");
  return showBanner ? (
    <div className="bg-primary text-white py-3 z-50 text-center text-sm sticky top-0">
      <Container>
        <p>
          "This webpage's content is currently going through an 'Lorem Ipsum'
          identity crisis - it's still trying to find itself!"
        </p>
      </Container>
    </div>
  ) : null;
};
