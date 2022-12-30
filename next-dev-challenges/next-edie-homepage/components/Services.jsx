import { FaPen } from "react-icons/fa";
import { BsCode } from "react-icons/bs";
import { SiElasticstack } from "react-icons/si";

const Services = () => {
  return (
    <div className="mx-4 px-2 pb-8 mb-4 md:mx-8 md:px-4 font-medium">
      <div className="mx-10 my-4">
        <p className="text-[32px] flex-wrap md:py-4 md:text-[48px] max-w-[300px] md:mx-40 md:max-w-[500px] ">
          We offer high demand services
        </p>
      </div>
      <div className="flex flex-col gap-4 lg:gap-8 p-4 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 lg:mx-40">
        <div className="flex flex-col gap-6 justify-center items-start hover:shadow-lg hover:rounded-2xl p-6 cursor-pointer transition duration-200 ease-in-out">
          <FaPen
            size={50}
            className="text-white bg-blue-500/80 p-3.5 rounded-xl"
          />
          <h2 className="font-bold text-[22px]">UI/UX Design</h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, excepturi?
          </p>
          <button className="text-gray-500 bg-gray-300/60 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-200 ease-in-out">
            Get started
          </button>
        </div>
        <div className="flex flex-col gap-6 justify-center items-start hover:shadow-lg hover:rounded-2xl p-6 cursor-pointer transition duration-200 ease-in-out">
          <BsCode
            size={50}
            className="text-white bg-green-600/90 p-2.5 rounded-xl"
          />
          <h2 className="font-bold text-[22px]">Front End</h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, excepturi?
          </p>
          <button className="text-gray-500 bg-gray-300/60 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-200 ease-in-out">
            Get started
          </button>
        </div>
        <div className="flex flex-col gap-6 justify-center items-start hover:shadow-lg hover:rounded-2xl p-6 cursor-pointer transition duration-200 ease-in-out">
          <SiElasticstack
            size={50}
            className="text-white bg-red-600/90 p-3.5 rounded-xl"
          />
          <h2 className="font-bold text-[22px]">Back End</h2>
          <p className="text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus, excepturi?
          </p>
          <button className="text-gray-500 bg-gray-300/60 px-4 py-2 rounded-lg hover:bg-blue-400 hover:text-white transition duration-200 ease-in-out">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
