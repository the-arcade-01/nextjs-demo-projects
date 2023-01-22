import { useState, useEffect } from "react";
import { getPosts } from "../src/services/posts";
import { useRouter } from "next/router";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(setPosts);
  }, []);
  const router = useRouter();
  return posts.map((post) => {
    return (
      <h1
        key={post.id}
        onClick={() => {
          router.push(`/posts/${post.id}`);
        }}
      >
        {post.title}
      </h1>
    );
  });
};

export default PostList;
