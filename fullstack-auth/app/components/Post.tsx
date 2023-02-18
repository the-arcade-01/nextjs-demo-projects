"use client";
import Image from "next/image";
import Link from "next/link";

const Post = ({ name, image, title, id, comment }) => {
  return (
    <div className="bg-white my-8 p-4 rounded-md">
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={image}
          alt="image"
        />
        <h3 className="font-bold text-gray-700">{name}</h3>
      </div>
      <div className="my-8">
        <p className="break-all">{title}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <Link href={`/post/${id}`}>
          <p className="text-sm font-bold text-gray-700">
            {comment?.length} Comments
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Post;
