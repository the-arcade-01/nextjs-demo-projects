import Image from "next/image";
import HeroImage from "../public/assets/heroImage.jpg";

const Showcase = () => {
  return (
    <div className="mx-4 my-8 px-2 py-8 md:m-8 md:px-4 font-medium">
      {/* top div */}
      <div className="mx-10 my-2 md:mx-40 md:max-w-[550px]">
        <p className="text-blue-400 md:text-[18px]">
          Unhappy with your website?
        </p>
        <p className="text-[32px] flex-wrap py-2 md:py-4 md:text-[48px]">
          We create beautiful and fast web services
        </p>
      </div>

      {/* middle div */}
      <div className="relative w-full h-full py-4 md:px-4">
        <Image
          src={HeroImage}
          alt="hero image"
          className="object-cover rounded-2xl"
        />
      </div>

      {/* bottom div */}
      <div className="mx-10 my-4">
        <p className="text-[32px] flex-wrap md:py-4 md:text-[48px] max-w-[300px] md:mx-40 md:max-w-[400px]">
          Story, emotion and purpose
        </p>
        <p className="text-gray-600 py-4 font-normal md:mx-40 md:max-w-[400px] md:text-[18px]">
          We help transform your ideas into real world opplications that will
          outperform your toughest competition and help you achieve your
          strategic goals in short period of time.
        </p>
        <div className="flex flex-col">
          <p className="text-blue-400 font-normal py-4 md:text-[18px] md:mx-40 md:max-w-[400px]">
            Want us to contact you?
          </p>
          <div className="md:mx-40 md:max-w-[400px] flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-300/30 outline-none text-sm text-gray-600 placeholder-gray-400 p-4 rounded-md w-[80%] md:text-base"
            />
            <button className="bg-blue-400 rounded-xl text-white px-4 py-2 hover:bg-blue-500 transition duration-200 ease-in-out ml-2 md:text-base">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
