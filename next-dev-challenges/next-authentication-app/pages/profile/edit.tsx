import { SlArrowLeft } from "react-icons/sl";
import Link from "next/link";

const Edit = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-3">
      <Link href="/" className="self-start mx-80">
        <div className="text-blue-400 flex gap-2 items-center ">
          <SlArrowLeft /> Back
        </div>
      </Link>
      <div className="w-[800px] h-[600px] border-2 border-gray-100 my-4 rounded-xl shadow-md py-6 px-8">
        <h1 className="text-[18px]">Change Info</h1>
        <form></form>
      </div>
    </div>
  );
};

export default Edit;
