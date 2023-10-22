import Image from "next/image";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export const Bio = () => {
  return (
    <Container>
      <div className="bg-white p-12 scroll-mt-16 flex flex-col lg:flex-row items-center gap-8 rounded-2xl" id="bio">
        <div className="w-40 h-40 relative shrink-0 before:bg-[#D9D9D9] before:w-full before:h-full before:-ml-3 before:block before:mt-3">
          <Image
            src="/v3/dagem.png"
            fill
            alt="Dagem Tadesse's portrait"
            className="border-2 border-customBlack object-cover"
          />
        </div>
        <div className="text-black">
          <div className="grid place-items-center lg:place-items-start">
            <Heading colorClass="bg-black">About me</Heading>
          </div>
          <p className="text-base  mt-8 text-center lg:text-start">
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
