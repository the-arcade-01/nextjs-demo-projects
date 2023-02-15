import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

interface PostType {
  message: string;
  imageName: string;
  imageUrl: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: PostType = JSON.parse(req.body);
    if (req.method === "POST") {
      try {
        const data = await prisma.post.create({
          data: post,
        });
        return res.status(201).json(data);
      } catch (error) {}
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
