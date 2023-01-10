import Image from "next/image";
import { posts } from "../../data";
import { Post } from "../../types";

import { VscHeart } from "react-icons/vsc";
import { BsThreeDots } from "react-icons/bs";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { RxBookmark } from "react-icons/rx";
import { RiChat1Line } from "react-icons/ri";

const Posts = () => {
  return (
    <>
      {posts.map((post: Post, index) => (
        <PostCard key={index} postData={post} />
      ))}
    </>
  );
};

export default Posts;

const PostCard = ({ postData }: any) => {
  return (
    <div className="flex flex-col mb-5">
      <section className="h-[70px] bg-gray-200 flex items-center justify-between px-5">
        <div className="flex gap-2">
          <div className="relative h-11 w-11">
            <Image
              src="/profile.jpg"
              alt="nothing"
              fill
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start">
            <p className="font-semibold text-[15px]">{postData.username}</p>
            {postData.location && (
              <p className="text-[13px]">{postData.location}</p>
            )}
          </div>
        </div>
        <BsThreeDots size={18} className="cursonr-pointer" />
      </section>
      <section className="relative h-[60vh] w-full">
        <Image
          src={postData.postImage}
          alt="image"
          className="object-cover"
          fill
        />
      </section>
      <section className="flex justify-between px-3 pt-4 pb-2">
        <div className="flex gap-3 items-center">
          <VscHeart size={30} className="cursor-pointer" />
          <RiChat1Line size={30} className="cursor-pointer" />
          <IoPaperPlaneOutline size={30} className="cursor-pointer" />
        </div>
        <RxBookmark size={30} className="cursor-pointer" />
      </section>
      <section className="px-3">
        <p className="text-[15px]">
          <span className="font-semibold pr-2">{postData.username}</span>
          {postData.caption && postData.caption}
        </p>
      </section>
    </div>
  );
};
