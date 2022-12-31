import Image from "next/image";
import Person1 from "../public/assets/person1.png";
import Person2 from "../public/assets/person2.png";
import Person3 from "../public/assets/person3.png";

const Team = () => {
  return (
    <div className="mt-16 mb-32 px-6 font-medium md:mx-56">
      <div className="w-[300px] md:w-[400px]">
        <h3 className="text-[#f7542e] md:text-xl">Meet the team</h3>
        <h1 className="text-[32px] py-4 md:text-[48px]">
          We are chilled and a laidback team
        </h1>
        <p className="text-gray-500 md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="relative grid grid-cols-2 h-[60vh]">
        <div className="relative m-2 col-span-1">
          <Image src={Person3} className="object-cover" fill />
        </div>
        <div className="relative m-2">
          <Image src={Person1} className="object-cover" fill />
        </div>
        <div className="relative m-2 col-span-1">
          <Image src={Person2} className="" fill />
        </div>
      </div>
    </div>
  );
};

export default Team;
