import Footer from "../Home/Footer";
import Explore from "./Explore";

const SearchLayout = () => {
  return (
    <>
      <header className="flex items-center justify-center px-4 py-2">
        <input
          type="text"
          className="w-full border border-gray-500 rounded-md p-1 pl-3 text-[14px]"
          placeholder="Search"
        />
      </header>
      <Explore />
      <Footer />
    </>
  );
};

export default SearchLayout;
