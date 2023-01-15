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
    <div className="py-12 px-8">
      <div className="inline-block mt-5 mb-8">
        <img src={image} width="64" />
      </div>
      <h3>{title}</h3>
      <p className="font-light text-sm mt-5">{description}</p>
      <div className="mt-8">
        <button className="text-blue-500 font-medium">View Work</button>
      </div>
    </div>
  );
};

export default ServiceCard;
