import Image from "next/image";
import { FiHome, FiSearch } from "react-icons/fi";
import { CgClapperBoard } from "react-icons/cg";
import { RiMessengerLine } from "react-icons/ri";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 h-12 bg-white w-full border border-t-2 border-gray-200 px-5 py-2 flex items-center justify-between">
      <Link href="/">
        <FiHome size={28} className="cursor-pointer" />
      </Link>
      <FiSearch size={28} className="cursor-pointer" />
      <CgClapperBoard size={28} className="cursor-pointer" />
      <Link href="/inbox">
        <RiMessengerLine size={28} className="cursor-pointer" />
      </Link>
      <Link href="/account">
        <div className="relative h-8 w-8 rounded-full">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="rounded-full object-cover"
          />
        </div>
      </Link>
    </footer>
  );
};

export default Footer;
