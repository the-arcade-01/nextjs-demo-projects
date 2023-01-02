import { GetStaticProps } from "next";
import { prisma } from "../lib/prisma";

import { useRouter } from "next/router";
import Header from "../components/Header";

const Home = ({ feed }) => {
  const router = useRouter();
  return (
    <div>
      <Header />
      <div>
        {feed.map((post) => (
          <div key={post.id} onClick={() => router.push(`/posts/${post.id}`)}>
            <h1 className="cursor-pointer">{post.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10, // incremental static generation (ISR)
  };
};
