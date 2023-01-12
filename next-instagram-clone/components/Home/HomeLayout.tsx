import Navbar from "./Navbar";
import Posts from "./HomePosts";
import Stories from "./Stories";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Stories />
      <Posts />
      <Footer />
    </>
  );
}
