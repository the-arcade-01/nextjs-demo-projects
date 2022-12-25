import Image from "next/image";

import logo from "../public/images/logo.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 item-center p-5 md:px-20 md:py-14 mx-auto">
      <div className="relative flex items-center h-12 cursor-pointer">
        <Image
          src={logo}
          className="object-contain object-left px-5"
          fill
          alt="logo"
        />
      </div>
      <div className="flex justify-evenly items-center">
        <p className="text-darkGrayishBlue font-medium text-md cursor-pointer">
          Home
        </p>
        <p className="text-darkGrayishBlue font-medium text-md cursor-pointer">
          News
        </p>
        <p className="text-darkGrayishBlue font-medium text-md cursor-pointer">
          Popular
        </p>
        <p className="text-darkGrayishBlue font-medium text-md cursor-pointer">
          Trending
        </p>
        <p className="text-darkGrayishBlue font-medium text-md cursor-pointer">
          Categories
        </p>
      </div>
    </header>
  );
};

export default Header;
