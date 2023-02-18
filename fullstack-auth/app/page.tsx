"use client";

import AddPost from "./components/AddPost";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Post from "./components/Post";

const getPosts = async () => {
  const res = await axios.get("/api/posts/getPosts");
  return res.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryFn: getPosts,
    queryKey: ["posts"],
  });
  if (error) return error;
  if (isLoading) return "Loading ...";

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          comment={post.comment}
          key={post.id}
          name={post.user.name}
          image={post.user.image}
          title={post.title}
          id={post.id}
        />
      ))}
    </main>
  );
}
