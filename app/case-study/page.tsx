import { Metadata } from "next";
import Image from "next/image";
import { CaseStudyCarousel } from "../../components/CaseStudyCarousel";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";

export default function Page() {
  return (
    <div className="py-8">
      <Container>
        <div className="mb-8">
          <Heading>Case studies</Heading>
        </div>

        {/* <div className="border border-customBlack flex flex-col lg:flex-row relative">
          <div className="h-32 relative border-b lg:border-r lg:border-b-0 border-customBlack overflow-hidden min-w-[320px] lg:h-[200px]">
            <Image
              src="/v3/picture/web-dev-1.jpeg"
              alt="picture"
              fill
              className="hover:scale-105 transition-all duration-300 object-cover"
            />
          </div>
          <div className="py-5 px-6">
            <h4 className="text-base font-medium text-darkerGrey">
              Lorem ipsum dolor sit amet
            </h4>
            <p className="text-sm mt-4 text-darkerGrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              augue lacus, bibendum eget bibendum sit amet, viverra nec lacus.
              Ut faucibus lorem sed porta sodales.
            </p>
            <button className="border border-customBlack px-4 py-2 mt-6">
              view more
            </button>
          </div>
        </div> */}

        <div className="mt-12">
          <CaseStudyCarousel />
        </div>
      </Container>
    </div>
  );
}

export const metadata: Metadata = {
  title: "case studies | Dagem Tadesse",
};
