import PostCard from "./PostCard";
import { posts } from "../../data";
import { Post } from "../../types";

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
