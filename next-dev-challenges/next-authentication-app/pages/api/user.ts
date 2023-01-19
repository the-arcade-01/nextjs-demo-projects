import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";

// GET : /api/user
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const users = await prisma.user.findMany();
  return res.json(users);
}
