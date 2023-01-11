import { SlArrowLeft } from "react-icons/sl";
import { FiEdit } from "react-icons/fi";
import { BsDot } from "react-icons/bs";

import Link from "next/link";
import Image from "next/image";

import { Chat } from "../../types";
import { chats } from "../../data";

const InboxLayout = () => {
  return (
    <>
      <header className="flex items-center justify-between px-3 py-3 border border-b-2 border-gray-200">
        <Link href="/">
          <SlArrowLeft size={24} className="cursor-pointer" />
        </Link>
        <p className="font-semibold text-[16px]">the-arcade-01</p>
        <FiEdit size={24} className="cursor-pointer" />
      </header>
      <div className="mt-2">
        {chats.map((chat) => (
          <ChatCard
            profileImage={chat.profileImage}
            username={chat.username}
            time={chat.time}
            prompt={chat.prompt}
            active={chat.active}
          />
        ))}
      </div>
    </>
  );
};

export default InboxLayout;

const ChatCard = ({ profileImage, username, time, prompt, active }: Chat) => {
  return (
    <div className="h-[72px] w-full flex justify-between items-center px-3 py-3 mb-1">
      <div className="flex gap-3">
        <div className="relative h-16 w-16">
          <Image
            src={profileImage}
            fill
            className="object-cover rounded-full"
            alt={username}
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <p
            className={active ? "font-semibold text-[15.5px]" : "text-[15.5px]"}
          >
            {username}
          </p>
          <p className="text-[15px]">
            {" "}
            <span className={active ? "font-semibold text-[15.5px]" : ""}>
              {prompt}
            </span>{" "}
            . {time}
          </p>
        </div>
      </div>
      <BsDot size={40} className={active ? "text-blue-500" : "text-white"} />
    </div>
  );
};
