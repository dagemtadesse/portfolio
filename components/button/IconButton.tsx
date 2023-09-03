import { Mail } from "react-feather";

export const IconButton = () => {
  return (
    <>
      <a
        href="mailto:dagem.seyfu@gmail.com"
        className="rounded-full before:aspect-square p-1 block bg-transparent"
      >
        <div className="relative">
          <Mail />
        </div>
      </a>
    </>
  );
};
