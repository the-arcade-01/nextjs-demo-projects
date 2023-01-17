import { SiProtocolsdotio } from "react-icons/si";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-32 py-8 w-full">
      <Link href="/">
        <div className="flex items-center gap-2 cursor-pointer">
          <SiProtocolsdotio size={26} className="text-blue-500" />
          <p className="font-semibold text-blue-500">raccoon</p>
        </div>
      </Link>
      <ProfileMenu />
    </div>
  );
};

export default Navbar;

const ProfileMenu = () => {
  const [active, setActive] = useState(false);
  return (
    <div>
      <div onClick={() => setActive(!active)} className="cursor-pointer">
        <p className="font-medium">Nathan Neil</p>
      </div>
      <div
        className={
          active
            ? "absolute z-10 border border-gray-200 p-4 rounded-lg shadow-md mt-4"
            : "hidden"
        }
      >
        <ul>
          <li className="hover:bg-gray-100 rounded-lg text-gray-600 px-4 py-2 cursor-pointer text-[16px]">
            My Profile
          </li>
          <li className="hover:bg-gray-100 rounded-lg text-gray-600 px-4 py-2 cursor-pointer text-[16px]">
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
