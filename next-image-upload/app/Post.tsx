"use client";

import Image from "next/image";

interface PostType {
  displayPreview: boolean;
  imageUrl: string;
  message: string;
}

const Post = ({ displayPreview, imageUrl, message }: PostType) => {
  return (
    <div className="w-[500px] h-[450px] border border-gray-200 rounded-md flex flex-col gap-2 p-4 items-center bg-white">
      <h3 className="text-lg font-medium self-start">{message}</h3>
      <div className="relative w-[350px] h-[350px]">
        <Image src={imageUrl} fill className="object-contain" alt="image" />
      </div>
      {!displayPreview && (
        <button className="py-2 px-3 bg-red-500 rounded-md text-white font-medium self-end">
          Delete
        </button>
      )}
    </div>
  );
};

export default Post;
