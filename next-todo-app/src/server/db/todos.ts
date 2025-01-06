import { db } from "@/drizzle/db";

export function getTodos(limit?: number) {
  return db.query.todosTable.findMany({
    orderBy: ({ createdAt }, { desc }) => desc(createdAt),
    limit,
  });
}
