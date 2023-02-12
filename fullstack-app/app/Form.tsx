"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await fetch(`/api/createPost`, {
      method: "POST",
      body: JSON.stringify({ title }),
    });
    setTitle("");
    const res = await data.json();
    if (!res.ok) console.log(res);
    router.refresh();
  };

  return (
    <form className="my-5 flex gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className="outline-none border border-gray-200 rounded-md py-2 px-4"
        value={title}
        onChange={handleTitleChange}
      />
      <button className="py-2 px-4 bg-blue-400 text-white rounded-md">
        Create Post
      </button>
    </form>
  );
};

export default Form;
