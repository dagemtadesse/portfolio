import Image from "next/image";
import { ReactNode } from "react";

type ExpertiesCardPops = {
  image: ReactNode;
  title: string;
  description: string;
};

export const ExpertiesCard = ({
  image,
  title,
  description,
}: ExpertiesCardPops) => {
  return (
    <div className="border border-divider h-full rounded">
      <div className="py-12 border-b border-customBlack px-6 bg-[url('/v3/icons/circuit-boad.svg')]">
        {image}
      </div>
      <div className="px-6 pt-6 pb-8">
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-base text-white text-opacity-75 mt-6">{description}</p>
      </div>
    </div>
  );
};
