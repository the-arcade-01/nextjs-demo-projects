import Card from "./Card";
import smarthome from "../public/assets/smarthome.jpg";
import onboard from "../public/assets/onboard.png";
import booking from "../public/assets/booking.png";
import juice from "../public/assets/juice-product.png";

import { HiOutlineArrowLongRight } from "react-icons/hi2";

const cards = [
  {
    image: smarthome,
    title: "Smart home dashboard",
    tag: "Full stack application",
  },
  {
    image: onboard,
    title: "Onboard application",
    tag: "UI/UX design",
  },
  {
    image: booking,
    title: "Booking system",
    tag: "Mobile application",
  },
  {
    image: juice,
    title: "Juice product homepage",
    tag: "Front End application",
  },
];

const Works = () => {
  return (
    <div className="mt-14 mb-14 p-8">
      <h1 className="text-[32px] font-medium ml-8 md:text-[48px] md:mx-48 md:px-4 md:max-w-[600px]">
        Good design means good business
      </h1>
      <div className="mt-10 mb-10 p-2 flex flex-col gap-12 md:items-center lg:grid lg:grid-cols-2 lg:mx-48">
        {cards.map((card) => (
          <Card
            key={card.image}
            image={card.image}
            tag={card.tag}
            title={card.title}
          />
        ))}
      </div>
      <p className="text-blue-400 flex justify-start items-center gap-4 font-medium cursor-pointer p-2 sm:text-2xl md:justify-end md:mr-48">
        See more
        <HiOutlineArrowLongRight />
      </p>
    </div>
  );
};

export default Works;
