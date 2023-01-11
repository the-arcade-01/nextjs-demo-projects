import { BsInstagram } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full items-center py-2 px-3.5">
      <Link href="/">
        <BsInstagram size={28} className="cursor-pointer" />
      </Link>
      <div className="flex justify-evenly items-center gap-2.5">
        <BiMessageSquareAdd size={28} className="cursor-pointer" />
        <VscHeart size={28} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
