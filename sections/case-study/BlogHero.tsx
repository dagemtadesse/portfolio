import Image from "next/image";
import { Container } from "../../components/Container";

export const BlogHero = () => {
  return (
    <>
      <Container className="py-12 lg:py-32">
        <h1 className="font-semibold lg:text-[56px]  text-[32px] uppercase lg:max-w-[500px]">
          Lorem ipsum dolor sit amet
        </h1>
        <div className="mt-8 flex justify-between flex-col lg:flex-row gap-4">
          <p className="max-w-[500px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat elementum lacus nec maximus. Etiam{" "}
          </p>
          <div className="lg:text-right text-sm">
            <p>Dagem Tadesse</p>
            <p className="mt-2">Updated: September 16, 2022</p>
          </div>
        </div>
      </Container>
      <Container className="relative w-full h-[500px]">
        <Image
          src="/v3/picture/web-dev-1.jpeg"
          alt="picture"
          fill
          className="object-cover"
        />
      </Container>
    </>
  );
};
