"use client";

import { ChangeEvent, FormEvent, MouseEvent, useState, useRef } from "react";
import { useRouter } from "next/navigation";

import Preview from "./Preview";

const Form = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [displayPreview, setDisplayPreview] = useState(false);

  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploadImage, setUploadImage] = useState(null);

  const handleImageChange = (e: any) => {
    if (!e.target.files) return;
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    setUploadImage(e.target.files[0]);
  };

  const handleMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleRemoveImage = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
  ) => {
    // @ts-ignore
    imageRef.current.value = null;
    setMessage("");
    setImageUrl("");
    setUploadImage(null);
  };

  const handlePreviewChange = (
    e: MouseEvent<HTMLParagraphElement, globalThis.MouseEvent>
  ) => {
    setDisplayPreview(!displayPreview);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(message, imageUrl, uploadImage);
    // @ts-ignore
    imageRef.current.value = null;

    try {
      setMessage("");
      setImageUrl("");
      setUploadImage(null);
    } catch (error) {
      console.log(error);
    }
  };

  // scroll lock when modal is open
  if (displayPreview) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "scroll";
  }
  return (
    <>
      {displayPreview && (
        <Preview
          displayPreview={displayPreview}
          setDisplayPreview={setDisplayPreview}
          imageUrl={imageUrl}
          message={message}
        />
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-[500px] py-2 gap-4"
      >
        <input
          type="text"
          value={message}
          onChange={handleMessageChange}
          className="outline-none rounded-md border border-gray-200 p-4 w-full"
          placeholder="Please leave a message!!"
        />
        <div className="flex justify-between w-full">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            ref={imageRef}
          />
          {imageUrl && (
            <div className="flex gap-2">
              <p
                className="cursor-pointer py-2 px-3 bg-teal-500 rounded-md text-white font-medium self-end"
                onClick={handlePreviewChange}
              >
                Preview
              </p>
              <p
                className="cursor-pointer py-2 px-3 bg-red-500 rounded-md text-white font-medium self-end"
                onClick={handleRemoveImage}
              >
                Remove
              </p>
            </div>
          )}
        </div>
        <button
          className="py-2 px-3 bg-blue-500 rounded-md text-white font-medium self-end"
          type="submit"
        >
          Upload
        </button>
      </form>
    </>
  );
};

export default Form;
