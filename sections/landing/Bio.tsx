import Image from "next/image";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export const Bio = () => {
  return (
    <Container>
      <div
        className="bg-primary bg-opacity-10 px-6 py-10 scroll-mt-16 flex flex-col lg:flex-row items-center gap-8 rounded-lg"
        id="bio"
      >
        <div className="">
          <div className="grid place-items-center lg:place-items-start">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 relative shrink-0">
                <Image
                  src="/v3/dagem.png"
                  fill
                  alt="Dagem Tadesse's portrait"
                  className="object-cover rounded-full"
                />
              </div>
              <Heading>About me</Heading>
            </div>
          </div>
          <p className="text-base  mt-8 text-center lg:text-start text-opacity-75">
            I am a software engineer, driven by creativity and enthusiasm,
            particularly when it comes to front-end development and the web in
            general. I also dabble in mobile app development and find great joy
            in exploring UI/UX design. I possess a genuine passion for exploring
            new technologies, constantly seeking opportunities to expand my
            horizons and embrace innovative approaches.
          </p>
        </div>
      </div>
    </Container>
  );
};
