"use client";

import AddComments from "@/app/components/AddComments";
import Post from "@/app/components/Post";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

const fetchDetails = async (slug: string) => {
  const res = await axios.get(`/api/posts/${slug}`);
  return res.data;
};

const PostDetail = (url) => {
  const { data, isLoading } = useQuery({
    queryFn: () => fetchDetails(url.params.slug),
    queryKey: ["detail-post"],
  });
  if (isLoading) return "Loading ...";
  console.log(data);
  return (
    <>
      <div>
        <Post
          id={data.id}
          name={data.user.name}
          image={data.user.image}
          title={data.title}
          comment={data.comment}
        />
      </div>
      <AddComments id={data.id} />
      {data.comment.map((comment) => (
        <div key={comment.id} className="my-6 bg-white p-4 rounded-md">
          <div className="flex items-center gap-2">
            <Image
              width={24}
              height={24}
              src={comment.user?.image}
              alt="image"
            />
            <h3 className="font-bold">{comment.user.name}</h3>
            <h2 className="text-sm">{comment.createdAt}</h2>
          </div>
          <div className="py-2">{comment.message}</div>
        </div>
      ))}
    </>
  );
};

export default PostDetail;
