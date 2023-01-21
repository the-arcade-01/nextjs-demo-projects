import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

// GET : /api/user
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const email = req.query.id?.toString();
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return res.status(200).json(user);
  } else if (req.method === "PUT") {
    const email = req.query.id?.toString();
    console.log(req.body);
    const updateUser = await prisma.user.update({
      where: {
        email,
      },
      data: req.body,
    });
    return res.status(201).json(updateUser);
  }
}
