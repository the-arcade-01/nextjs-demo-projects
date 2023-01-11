import { SlSettings } from "react-icons/sl";
import { IoPersonAddOutline } from "react-icons/io5";
import { BsGrid3X3 } from "react-icons/bs";
import { RiVideoLine } from "react-icons/ri";
import { RxBookmark } from "react-icons/rx";
import { MdOutlinePersonPin } from "react-icons/md";

import Link from "next/link";
import Footer from "../Home/Footer";

import Image from "next/image";

import { userData } from "../../data";

const AccountLayout = () => {
  return (
    <div>
      <header className="flex items-center justify-between px-4 py-3 border border-b-2 border-gray-200">
        <Link href="/">
          <SlSettings size={25} className="cursor-pointer" />
        </Link>
        <p className="font-semibold text-[16px]">the-arcade-01</p>
        <IoPersonAddOutline size={25} className="cursor-pointer" />
      </header>
      <section className="px-4 py-3">
        <div className="flex gap-6">
          <div className="relative h-20 w-20 rounded-full">
            <Image
              src="/profile.jpg"
              fill
              className="rounded-full object-cover"
              alt="profile"
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            <p className="text-[20px]">the-arcade-01</p>
            <button className="px-20 py-2 bg-gray-200 text-gray-800 rounded-md">
              Edit profile
            </button>
          </div>
        </div>
        <div className="mt-3 mb-1">
          <p>Star Platinum</p>
        </div>
      </section>
      <section className="flex items-center justify-center gap-16 py-2 mb-2 border-2 border-gray-100">
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">{userData.posts}</p>
          <p className="text-[15px]">posts</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">{userData.followers}</p>
          <p className="text-[15px]">followers</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">{userData.following}</p>
          <p className="text-[15px]">following</p>
        </div>
      </section>
      <section className="flex items-center justify-around pt-1 pb-3 border-b-2 border-gray-100">
        <BsGrid3X3 size={22} className="cursor-pointer" />
        <RiVideoLine size={26} className="cursor-pointer" />
        <RxBookmark size={26} className="cursor-pointer" />
        <MdOutlinePersonPin size={26} className="cursor-pointer" />
      </section>
      <section></section>
      <Footer />
    </div>
  );
};

export default AccountLayout;
