import Image from "next/image";
import { explorePosts } from "../../data";

import Link from "next/link";

const Explore = () => {
  return (
    <section className="grid grid-cols-3 mt-2">
      {explorePosts.map((posts, index) => (
        <Link href={`/posts/${index}`}>
          <div className="relative h-32 w-32 my-[0.10rem] cursor-pointer">
            <Image
              src={posts.postImage}
              alt={posts.username}
              fill
              className="object-cover"
            />
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Explore;
