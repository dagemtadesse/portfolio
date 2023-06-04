import Image from "next/image";
import { Container } from "../../components/Container";

export const BlogContent = () => {
  return (
    <Container className="py-12">
      <div className="flex flex-col gap-6 [&>h2+p]:mt-2 text-[15px] [&>h2]:my-4">
        {dummy.map((item) => {
          if (item.type == "paragraph") {
            return <p className="w-full lg:w-[83.33%] mx-auto leading-relaxed">{item.content}</p>;
          } else if (item.type == "imageSet") {
            return (
              <div className="flex lg:flex-row flex-col gap-4 my-12">
                {item.images?.map((image) => (
                  <div className="h-[500px] relative grow overflow-hidden border border-customBlack">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-all hover:scale-105 duration-300"
                    />
                  </div>
                ))}
              </div>
            );
          } else {
            return (
              <h2 className="font-medium text-xl w-full lg:w-[83.33%] mx-auto block">
                {item.content}
              </h2>
            );
          }
        })}
      </div>
    </Container>
  );
};

const dummy = [
  {
    type: "paragraph",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum lacus nec maximus. Etiam varius vitae diam quis pellentesque. Sed neque nisl, cursus non lorem sed, semper dignissim nisl. Etiam auctor lorem posuere, lacinia nunc in, gravida diam. Integer orci purus, tincidunt et tristique ut, lacinia a urna. Praesent eu mollis turpis, sed euismod nisl. 
    Vivamus massa lorem, cursus eget mi a, vulputate elementum lorem. Nam varius porttitor eros at feugiat.`,
  },
  {
    type: "paragraph",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum lacus nec maximus. Etiam varius vitae diam quis pellentesque. Sed neque nisl, cursus non lorem sed, semper dignissim nisl. Etiam auctor lorem posuere, lacinia nunc in, gravida diam. Integer orci purus, tincidunt et tristique ut, lacinia a urna. Praesent eu mollis turpis, sed euismod nisl. 
    Vivamus massa lorem, cursus eget mi a, vulputate elementum lorem. Nam varius porttitor eros at feugiat.`,
  },

  {
    type: "heading",
    content: `Lorem ipsum dolor sit amet`,
  },
  {
    type: "paragraph",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum lacus nec maximus. Etiam varius vitae diam quis pellentesque. Sed neque nisl, cursus non lorem sed, semper dignissim nisl. Etiam auctor lorem posuere, lacinia nunc in, gravida diam. Integer orci purus, tincidunt et tristique ut, lacinia a urna. Praesent eu mollis turpis, sed euismod nisl. 
    Vivamus massa lorem, cursus eget mi a, vulputate elementum lorem. Nam varius porttitor eros at feugiat.`,
  },
  {
    type: "paragraph",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum lacus nec maximus. Etiam varius vitae diam quis pellentesque. Sed neque nisl, cursus non lorem sed, semper dignissim nisl. Etiam auctor lorem posuere, lacinia nunc in, gravida diam. Integer orci purus, tincidunt et tristique ut, lacinia a urna. Praesent eu mollis turpis, sed euismod nisl. 
    Vivamus massa lorem, cursus eget mi a, vulputate elementum lorem. Nam varius porttitor eros at feugiat.`,
  },
  {
    type: "imageSet",
    images: [
      {
        src: "/v3/picture/web-dev-1.jpeg",
        alt: "",
      },
      {
        src: "/v3/picture/web-dev-1.jpeg",
        alt: "",
      },
      {
        src: "/v3/picture/web-dev-1.jpeg",
        alt: "",
      },
    ],
  },
  {
    type: "paragraph",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat elementum lacus nec maximus. Etiam varius vitae diam quis pellentesque. Sed neque nisl, cursus non lorem sed, semper dignissim nisl. Etiam auctor lorem posuere, lacinia nunc in, gravida diam. Integer orci purus, tincidunt et tristique ut, lacinia a urna. Praesent eu mollis turpis, sed euismod nisl. 
    Vivamus massa lorem, cursus eget mi a, vulputate elementum lorem. Nam varius porttitor eros at feugiat.`,
  },
];
