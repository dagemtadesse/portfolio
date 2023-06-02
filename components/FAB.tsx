import Image from "next/image";

export const FAB = () => {
  return (
    <button className="border border-customBlack rounded-full p-4 mx-auto block">
      <Image
        src="/v3/icons/chevrons-down.svg"
        alt="scroll down"
        height={32}
        width={32}
      />
    </button>
  );
};
