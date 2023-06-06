import Image from "next/image";

type ExpertiesCardPops = {
  image: string;
  title: string;
  description: string;
};

export const ExpertiesCard = ({
  image,
  title,
  description,
}: ExpertiesCardPops) => {
  return (
    <div className="border border-customBlack h-full">
      <div className="py-12 border-b border-customBlack px-6 bg-[url('/v3/icons/circuit-board.svg')]">
        <Image src={image} width={64} height={64} alt={title} />
      </div>
      <div className="px-6 pt-6 pb-8">
        <h2 className="font-medium text-xl">{title}</h2>
        <p className="text-base text-darkerGrey mt-6">{description}</p>
      </div>
    </div>
  );
};
