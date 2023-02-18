"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchUserPosts = async () => {
  const res = await axios.get("/api/posts/userPosts");
  return res.data;
};

export default function MyPosts() {
  const { data, isLoading } = useQuery({
    queryFn: fetchUserPosts,
    queryKey: ["auth-posts"],
  });
  if (isLoading) return <h1>Posts are loading ...</h1>;
  return (
    <div>
      {data.post.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </div>
  );
}
