import { Todo } from "@/types";
import React from "react";

type PageProps = {
  params: {
    todoId: string;
  };
};

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } } // force-cache, no-cache
  );
  const todo: Todo = await res.json();
  return todo;
};

const TodoPage = async ({ params: { todoId } }: PageProps) => {
  const todo = await fetchTodo(todoId);
  return (
    <div>
      #{todo.id} : {todo.title}
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p>User: {todo.userId}</p>
    </div>
  );
};

export default TodoPage;

export const generateStaticParams = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const todos: Todo[] = await res.json();

  const trimTodos = todos.splice(0, 10);

  //   [{todoId: '1'}, {todoId: '2'}, ...]
  //   This generate the pages for respective todos
  return trimTodos.map((todo) => ({
    todoId: todo.id.toString(),
  }));
};
