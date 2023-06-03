import Image from "next/image";

export const InfoCard = ({
  title,
  description,
  date,
  icon,
}: {
  title: string;
  description: string;
  date: string;
  icon: string;
}) => {
  return (
    <li className="flex border border-customBlack p-4 gap-4 items-start ">
      <Image src={icon} alt="." height={32} width={32} />
      <div>
        <h2 className="font-medium leading-none text-customBlack">{title}</h2>
        <p className="text-[15px] mt-4">{description}</p>
        <p className="font-light text-sm mt-3">{date}</p>
      </div>
    </li>
  );
};
