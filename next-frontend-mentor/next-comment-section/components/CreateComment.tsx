import profile from "../public/images/avatars/image-juliusomo.png";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

const CreateComment = () => {
  const [text, setText] = useState("");

  const handleText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(text);
  };

  return (
    <div className="w-[800px] flex items-center bg-white p-6 gap-5 rounded-lg">
      <div className="relative h-10 w-10 self-start">
        <Image src={profile} fill className="object-cover" alt="profile" />
      </div>
      <form onSubmit={handleSubmit} className="flex items-center gap-4">
        <textarea
          className="self-start border-2 border-gray-100 text-gray-500 px-4 py-2 focus:outline-none w-[600px] resize-none h-32 rounded-lg"
          onChange={handleText}
          placeholder="Add a comment..."
        />
        <button
          className="px-5 py-3 bg-purple-800 text-white text-[15px] font-medium rounded-lg hover:bg-purple-400 transition duration-300 ease-in-out self-start"
          type="submit"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default CreateComment;
