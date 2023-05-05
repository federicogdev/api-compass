import serverAuth from "@/libs/serverAuth";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "PUT" && req.method !== "GET" && req.method !== "DELETE") {
    return res.status(405).end();
  }
  const { postId } = req.query;

  if (req.method === "GET") {
    try {
      const { currentUser } = await serverAuth(req, res);

      if (!postId || typeof postId !== "string") {
        throw new Error("Invalid ID");
      }

      const job = await prisma.post.findUnique({
        where: { id: postId },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              compasses: true,
            },
          },
          comments: true,
        },
      });

      return res.status(200).json(job);
    } catch (error) {
      return res.status(400).json({ error: `Something went wrong: ${error}` });
    }
  }
}
