import { BsInstagram } from "react-icons/bs";
import { VscHeart } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";

import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between w-full items-center py-2 px-3.5">
      <BsInstagram
        size={28}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="flex justify-evenly items-center gap-2.5">
        <BiMessageSquareAdd size={28} className="cursor-pointer" />
        <VscHeart size={28} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
