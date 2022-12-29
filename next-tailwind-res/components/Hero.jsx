import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image  */}
      <Image
        className="top-0 left-0 object-cover"
        fill
        src="https://images.pexels.com/photos/10980737/pexels-photo-10980737.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="hero"
      />
      {/* Image darker overlay */}
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Gateways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            molestias iusto eveniet nisi aliquam blanditiis illum reiciendis ut
            voluptate modi.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
