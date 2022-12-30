import { FiMenu } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="top-0 left-0 flex justify-between items-center m-4 px-2 md:m-8 md:px-4">
      <div>
        <h1 className="text-3xl font-bold cursor-pointer">Edie</h1>
      </div>

      <div className="hidden md:inline font-medium">
        <ul className="flex justify-centerI items-center gap-12">
          <li className="text-[18px] cursor-pointer hover:text-gray-500">
            Home
          </li>
          <li className="text-[18px] cursor-pointer hover:text-gray-500">
            Services
          </li>
          <li className="text-[18px] cursor-pointer hover:text-gray-500">
            Our Works
          </li>
          <li className="text-[18px] cursor-pointer hover:text-gray-500">
            Clients
          </li>
          <li className="text-[18px] cursor-pointer hover:text-gray-500">
            Contact
          </li>
        </ul>
      </div>

      {/* Mobile view  */}
      <div className="md:hidden">
        <FiMenu size={30} onClick={handleNav} className="cursor-pointer" />
        <div
          className={
            nav
              ? "ease-in duration-300 fixed text-black right-0 top-0 w-full h-screen bg-white px-4 py-7 flex-col z-10"
              : "absolute top-0 h-screen right-[-100%] z-10"
          }
        >
          <ul className="flex flex-col fixed w-full h-full items-center justify-center">
            <GrClose
              size={30}
              onClick={handleNav}
              className="absolute top-2 right-10 cursor-pointer"
            />

            <li className="font-bold text-3xl p-8 cursor-pointer hover:text-gray-500">
              Home
            </li>
            <li className="font-bold text-3xl p-8 cursor-pointer hover:text-gray-500">
              Services
            </li>
            <li className="font-bold text-3xl p-8 cursor-pointer hover:text-gray-500">
              Our Works
            </li>
            <li className="font-bold text-3xl p-8 cursor-pointer hover:text-gray-500">
              Clients
            </li>
            <li className="font-bold text-3xl p-8 cursor-pointer hover:text-gray-500">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
