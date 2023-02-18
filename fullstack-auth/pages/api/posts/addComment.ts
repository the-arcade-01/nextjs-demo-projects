import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(403).json({ message: "Please sign in" });
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email || "",
      },
    });
    try {
      const { message, postId } = req.body.data;
      if (message.length > 300)
        return res
          .status(401)
          .json({ message: "Message length greater than 300" });
      if (!message.length) {
        return res.status(401).json({ message: "Please enter a message" });
      }

      const result = await prisma.comment.create({
        data: {
          message,
          userId: user?.id || "",
          postId,
        },
      });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(401).json(error);
    }
  }
}
