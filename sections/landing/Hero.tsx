import Image from "next/image";

import { Container } from "../../components/Container";
import { FooterSocialIcon } from "../../components/FooterSocialIcon";
import { Button } from "../../components/Button";
import { FAB } from "../../components/FAB";

export const HeroSection = () => {
  return (
    <Container className="lg:pt-32 lg:pb-8 py-12  min-h-[calc(100vh-64px)] flex flex-col justify-between">
      <div className="text-center lg:text-start mb-4">
        <section className="font-medium uppercase text-xl lg:text-2xl">
          Hi, I’m Dagem Tadesse
        </section>

        <div className="flex items-center flex-col lg:flex-row gap-4 mt-4">
          <h1 className="text-4xl lg:text-[56px] uppercase font-light grow leading-normal">
            your friendly neighborhood UX designer extraordinaire! 🎉
          </h1>

          <ul className="flex gap-4 shrink-0 flex-row lg:flex-col">
            <FooterSocialIcon src="/v3/icons/gmail.svg" alt="gmail account" />
            <FooterSocialIcon
              src="/v3/icons/linkedin.svg"
              alt="LinkedIn profile"
            />
            <FooterSocialIcon
              src="/v3/icons/twitter.svg"
              alt="Twitter profile"
            />
          </ul>
        </div>

        <div className="lg:mt-6 flex gap-6 flex-col lg:flex-row mt-16">
          <Button
            variant="outlined"
            startIcon={
              <Image
                src="/v3/icons/chat.svg"
                height={18}
                width={18}
                alt="Chat Icon"
              />
            }
          >
            Chat with me
          </Button>
          <Button
            variant="filled"
            startIcon={
              <Image
                src="/v3/icons/download.svg"
                height={18}
                width={18}
                alt="Chat Icon"
              />
            }
          >
            Download Resume
          </Button>
        </div>
      </div>
      <div className="hidden lg:block">
        <FAB />
      </div>
    </Container>
  );
};
