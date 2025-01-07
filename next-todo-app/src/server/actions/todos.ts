import { z } from "zod";
import { todoSchema } from "@/schemas/schemas";
import { getTodos as getTodosDb } from "../db/todos";

export async function getTodos(limit?: number) {
  try {
    const todos = await getTodosDb(limit);
    return { success: true, todos };
  } catch (error) {
    console.error(error);
    return { success: false, message: "There was error fetching todos :(" };
  }
}

export async function createTodos(unsafeData: z.infer<typeof todoSchema>) {
  const { success, data } = todoSchema.safeParse(unsafeData);
  if (!success) {
    return { success: false, message: "There was error parsing the body" };
  }
}
