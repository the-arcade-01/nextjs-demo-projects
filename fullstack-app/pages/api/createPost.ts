import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type post = {
  title: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const post: post = JSON.parse(req.body);
    if (req.method === "POST") {
      try {
        const data = await prisma.post.create({
          data: {
            title: post.title,
          },
        });
        return res.status(201).json(data);
      } catch (error) {
        return res
          .status(406)
          .json({ message: "Please check the request body" });
      }
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}
