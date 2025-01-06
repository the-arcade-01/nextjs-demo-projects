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
