import Image from "next/image";
import { stories } from "../../data";

import { StoryCard } from "../../types";

const Stories = () => {
  return (
    <div className="h-24 bg-gray-100 flex items-center px-4 py-2 gap-4">
      {stories.map(({ username, profileImage, active }) => (
        <StoryCard
          username={username}
          profileImage={profileImage}
          active={active}
          key={username}
        />
      ))}
    </div>
  );
};

export default Stories;

const StoryCard = ({ profileImage, username, active }: StoryCard) => {
  return (
    <div className="flex flex-col justify-center items-center gap-1">
      <div className="relative h-14 w-14 ">
        <Image
          src={profileImage}
          alt={username}
          className="object-cover border border-gray-200 rounded-full"
          fill
        />
      </div>
      <p className="font-semibold text-[13px]">{username}</p>
    </div>
  );
};
