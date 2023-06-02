import Image from "next/image";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export const Bio = () => {
  return (
    <div className="bg-ligthestGrey py-8">
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            condimentum semper commodo. Fusce massa justo, consectetur eget nisi
            et, volutpat lacinia justo. Nullam faucibus, neque eget dictum
            venenatis, neque libero venenatis ex, quis finibus leo neque vel
            orci.r
          </p>
        </div>
      </Container>
    </div>
  );
};
