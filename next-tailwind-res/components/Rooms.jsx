import Image from "next/image";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Find Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          repudiandae temporibus, ullam incidunt at doloribus?
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <div className="relative w-full h-full">
          <Image
            fill
            className="object-cover"
            src="https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative w-full h-full row-span-2">
          <Image
            fill
            className="object-cover"
            src="https://images.pexels.com/photos/1628061/pexels-photo-1628061.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="relative w-full h-full">
          <Image
            fill
            className="object-cover"
            src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
