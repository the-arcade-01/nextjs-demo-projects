"use client";

import { Dispatch, SetStateAction } from "react";
import Post from "./Post";

interface PreviewTypes {
  displayPreview: boolean;
  setDisplayPreview: Dispatch<SetStateAction<boolean>>;
  imageUrl: string;
  message: string;
}

const Preview = ({
  displayPreview,
  setDisplayPreview,
  imageUrl,
  message,
}: PreviewTypes) => {
  return (
    <div className="fixed top-0 w-full h-screen bg-gray-100/90 z-10 flex flex-col justify-center items-center">
      <div className="flex flex-col gap-2">
        <button
          className="py-2 px-3 bg-red-500 rounded-md text-white font-medium self-end"
          onClick={() => setDisplayPreview(!displayPreview)}
        >
          Close
        </button>
        <Post
          displayPreview={displayPreview}
          imageUrl={imageUrl}
          message={message}
        />
      </div>
    </div>
  );
};

export default Preview;
