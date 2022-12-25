import Image from "next/image";

import { cardsData } from "../data/data";

import img from "../public/images/image-retro-pcs.jpg";

const Cards = () => {
  return (
    <div className="my-10 mx-24 p-2">
      <div className="grid grid-cols-3">
        {cardsData.map(({ id, image, news, title }) => (
          <div className="flex items-center">
            <div className="relative">
              <Image src={image} fill alt="title" />
            </div>
            <div className="p-5 flex flex-col gap-3">
              <p className="text-grayishBlue font-bold text-[45px]">{id}</p>
              <p className="text-veryDarkBlue font-bold text-[20px]">{title}</p>
              <p className="text-darkGrayishBlue flex-wrap">{news}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
