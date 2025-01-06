"use client";

import React, { useState } from "react";

const TodosInput = () => {
  const [todo, setTodo] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(todo);
    setTodo("");
  };
  return (
    <form className="flex flex-row gap-8 items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-100"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="rounded-md bg-green-600 hover:bg-green-500 transition duration-300 text-green-100 font-semibold px-4 py-2"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodosInput;
