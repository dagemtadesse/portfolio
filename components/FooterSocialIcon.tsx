import Link from "next/link";
import Image from "next/image";

export const FooterSocialIcon = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <li>
      <Link href="#">
        <Image src={src} width={20} height={20} alt={alt} />
      </Link>
    </li>
  );
};
