import Image from "next/image";

import Instagram from "../public/assets/instagram.svg";
import Linkedin from "../public/assets/linkedin.svg";
import Twitter from "../public/assets/twitter.svg";

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col gap-8 justify-center items-start p-12 md:flex md:flex-row md:justify-between  md:mx-40">
        <div>
          <ul>
            <li className="py-1 cursor-pointer">Home</li>
            <li className="py-1 cursor-pointer">Services</li>
            <li className="py-1 cursor-pointer">Our Works</li>
            <li className="py-1 cursor-pointer">Clients</li>
            <li className="py-1 cursor-pointer">Contact</li>
          </ul>
        </div>
        <div>
          <div>
            <h1 className="text-3xl font-[500] cursor-pointer py-4">Edie</h1>
          </div>
          <div className="flex gap-2">
            <Image alt="instagram" src={Instagram} />
            <Image alt="linkedin" src={Linkedin} />
            <Image alt="twitter" src={Twitter} />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-white py-4 md:text-[18px] md:mx-40 md:max-w-[400px]">
            Want us to contact you?
          </p>
          <div className="md:mx-40 md:max-w-[400px] flex">
            <input
              type="email"
              placeholder="Email"
              className="bg-white outline-none text-sm text-black placeholder-gray-400 p-4 rounded-md w-[80%] md:text-base"
            />
            <button className="bg-blue-500 rounded-xl text-white px-4 py-2 hover:bg-blue-600 transition duration-200 ease-in-out ml-2 md:text-base">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
