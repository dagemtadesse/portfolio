import Image from "next/image";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export const Bio = () => {
  return (
    <div className="bg-ligthestGrey py-12 scroll-mt-16" id="bio">
      <Container className="flex flex-col lg:flex-row items-center gap-8">
        <div className="w-40 h-40 relative shrink-0 before:bg-[#D9D9D9] before:w-full before:h-full before:-ml-3 before:block before:mt-3">
          <Image
            src="/v3/picture/portrait.jpeg"
            fill
            alt="Dagem Tadesse's portrait"
            className="border-2 border-customBlack object-cover"
          />
        </div>
        <div className="">
          <div className="grid place-items-center lg:place-items-start">
            <Heading>About me</Heading>
          </div>
          <p className="text-base text-darkerGrey mt-8 text-center lg:text-start">
            I am software engineer, driven by creativity and enthusiasm,
            particularly when it comes to front-end development and the web in
            general. I also dabble in mobile app development and find great
            joy in exploring UI/UX design. I possess a genuine passion for
            exploring new technologies, constantly seeking opportunities to
            expand my horizons and embrace innovative approaches.
          </p>
        </div>
      </Container>
    </div>
  );
};
