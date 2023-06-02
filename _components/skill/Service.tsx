const ServiceCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className=" border isolate border-white before:w-full before:h-full relative before:absolute before:left-3 before:top-3 before:bg-white before:z-1 hover:before:top-2 hover:before:left-2 before:transition-all before:duration-300">
      <div className="h-ful w-full py-12 px-8 bg-darkBlue relative">
        <div className="inline-block mt-5 mb-8">
          <object data={image} width="64" />
        </div>
        <h3>{title}</h3>
        <p className="font-light text-sm mt-5">{description}</p>
        <div className="mt-8">
          <button className="font-medium">View Work</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
