"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";

type Comment = {
  message: string;
  postId?: string;
};

const AddComments = ({ id }: { id: string }) => {
  const [message, setMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const queryClient = useQueryClient();

  let commentToast: string;
  const { mutate } = useMutation(
    async (data: Comment) => axios.post("/api/posts/addComment", { data }),
    {
      onSuccess: (data) => {
        setMessage("");
        setIsDisabled(false);
        toast.success("Comment created!!", { id: commentToast });
        queryClient.invalidateQueries(["detail-post"]);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: commentToast });
          setIsDisabled(false);
        }
      },
    }
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
    commentToast = toast.loading("Creating your comment", { id: commentToast });
    mutate({ message, postId: id });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Comments</h3>
      <div className="flex flex-col">
        <textarea
          name="title"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="p-4 text-lg rounded-md my-2 w-full outline-none"
        />
      </div>
      <div className="flex justify-between mt-2">
        <p
          className={`font-bold text-sm ${
            message.length > 300 ? "text-red-500" : "text-gray-700"
          }`}
        >{`${message.length}/300`}</p>
        <button
          className="px-4 py-2 bg-blue-400 rounded-md text-white font-medium disabled:opacity-25"
          disabled={isDisabled}
          type="submit"
        >
          Create Comment
        </button>
      </div>
    </form>
  );
};

export default AddComments;
