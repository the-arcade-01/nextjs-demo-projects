import { db } from "@/drizzle/db";
import { todosTable } from "@/drizzle/schema";

export function getTodos(limit?: number) {
  return db.query.todosTable.findMany({
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
    limit,
  });
}

export function createTodo(data: typeof todosTable.$inferInsert) {}
