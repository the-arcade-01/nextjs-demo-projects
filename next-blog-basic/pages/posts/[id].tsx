import { GetServerSideProps } from "next";
import { prisma } from "../../lib/prisma";

const Post = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <h1>{post.content}</h1>
      <h1>By {post.author.name}</h1>
    </div>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { post },
  };
};
