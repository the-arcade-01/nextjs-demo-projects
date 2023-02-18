"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();

  let toastPostId: string;

  const { mutate } = useMutation(
    async (title: string) => await axios.post("/api/posts/addPost", { title }),
    {
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastPostId });
          setIsDisabled(false);
        }
      },
      onSuccess: (data) => {
        toast.success("Post created!!", { id: toastPostId });
        queryClient.invalidateQueries(["posts"]);
        setTitle("");
        setIsDisabled(false);
      },
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    toastPostId = toast.loading("Creating your post", { id: toastPostId });
    mutate(title);
  };

  return (
    <form className="p-4 rounded-md bg-white my-2" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <textarea
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md my-2 bg-gray-200 w-full outline-none"
        />
      </div>
      <div className="flex justify-between mt-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-500" : "text-gray-700"
          }`}
        >{`${title.length}/300`}</p>
        <button
          className="px-4 py-2 bg-blue-400 rounded-md text-white font-medium disabled:opacity-25"
          disabled={isDisabled}
          type="submit"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default AddPost;
