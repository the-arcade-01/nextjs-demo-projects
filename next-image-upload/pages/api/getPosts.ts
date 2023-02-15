import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const posts = await prisma.post.findMany();
      return res.status(200).json(posts);
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
