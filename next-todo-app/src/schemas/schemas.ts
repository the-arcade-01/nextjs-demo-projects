import { z } from "zod";

export const todoSchema = z.object({
  name: z.string().nonempty(),
  isCompleted: z.boolean(),
});
