import { useState, useEffect } from "react";
import { getPost } from "../../src/services/posts";

import { useRouter } from "next/router";

const PostIndividual = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const { postId } = router.query;
  useEffect(() => {
    getPost(postId).then(setPost);
  }, []);
  return (
    <div>
      <h1>{post.title}</h1>
      <article>{post.body}</article>
      <h3>Comments</h3>
    </div>
  );
};

export default PostIndividual;
