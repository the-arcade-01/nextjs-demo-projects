import type { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import prisma from "@/prisma/client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: "You must be logged in." });
    return;
  }

  if (req.method === "POST") {
    const title: string = req.body.title;

    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email || "",
      },
    });

    if (title.length > 300)
      return res.status(403).json({ message: "Title length greater than 300" });
    if (!title.length)
      return res.status(403).json({ message: "Title is empty" });

    try {
      const result = await prisma.post.create({
        data: {
          title,
          userId: user?.id || "",
        },
      });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(403).json(error);
    }
  }
}
