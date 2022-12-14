import Image from "next/image";
import data from "../data.json";

const LinkCard = ({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
}) => {
  return (
    <a
      href={href}
      className="flex items-center p-1 w-full rounded-md hover:scale-105 transition-all bg-gray-100 mb-3"
    >
      <div className="flex w-full">
        {image && (
          <Image
            className="rounded-sm"
            src={image}
            width={40}
            height={40}
            alt={title}
          />
        )}
        <h2 className="font-semibold w-full text-center text-gray-700">
          {title}
        </h2>
      </div>
    </a>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col mx-auto justify-center items-center mt-16 px-8">
      <Image
        className="rounded-full"
        src={data.avatar}
        width={96}
        height={96}
        alt={data.name}
      />
      <h1 className="font-bold mt-4 text-xl">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
    </div>
  );
}
