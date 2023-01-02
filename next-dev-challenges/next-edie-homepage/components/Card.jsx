import Image from "next/image";

const Card = ({ image, tag, title }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Image src={image} className="rounded-3xl" alt={title} />
      </div>
      <div>
        <p className="text-gray-400">{tag}</p>
        <h2 className="font-medium text-xl">{title}</h2>
      </div>
    </div>
  );
};

export default Card;
