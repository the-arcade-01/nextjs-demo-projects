import Image from "next/image";

const Plan = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="relative grid grid-cols-2 grid-rows-6 h-[80vh]">
        <div className="relative m-2 row-span-3">
          <Image
            className="object-cover"
            fill
            src="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative m-2 row-span-2">
          <Image
            className="object-cover"
            fill
            src="https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative m-2 row-span-2">
          <Image
            className="object-cover"
            fill
            src="https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative m-2 row-span-3">
          <Image
            className="object-cover"
            fill
            src="https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative m-2 row-span-2">
          <Image
            className="object-cover"
            fill
            src="https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut,
          commodi.
        </p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, eos.
          Quae maxime voluptate explicabo id ex omnis qui aut officia.
          Doloremque culpa autem perspiciatis iusto adipisci ut laudantium
          aliquid repudiandae?
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
