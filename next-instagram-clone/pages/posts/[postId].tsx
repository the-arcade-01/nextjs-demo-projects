import Link from "next/link";
import { SlArrowLeft } from "react-icons/sl";
import PostCard from "../../components/Home/PostCard";
import { useRouter } from "next/router";
import { explorePosts } from "../../data";

const ExplorePost = () => {
  const router = useRouter();
  const { postId } = router.query;

  return (
    <>
      <header className="flex items-center px-4 py-3 border border-b-2 border-gray-200 w-full">
        <Link href="/search">
          <SlArrowLeft size={22} className="cursor-pointer" />
        </Link>
        <p className="font-semibold text-[18px] pl-[35%]">Explore</p>
      </header>
      <PostCard postData={explorePosts[parseInt(postId)]} />
    </>
  );
};

export default ExplorePost;
