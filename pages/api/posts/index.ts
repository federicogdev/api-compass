import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prisma";
import { Auth, Cors, Https, Paid } from "@prisma/client";

type Sort = "desc" | "asc";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST" && req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    if (req.method === "GET") {
      const {
        query = "",
        type,
        cors,
        auth,
        protocol,
        page = "1",
        perPage = "1",
        sort = "desc",
      } = req.query;

      const posts = await prisma.post.findMany({
        where: {
          OR: [
            {
              title: {
                contains: query as string,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: query as string,
                mode: "insensitive",
              },
            },
          ],
          // isApproved: true,
          cors: !cors || cors === "all" ? undefined : (cors as Cors),
          paid: !type || type === "all" ? undefined : (type as Paid),
          auth: !auth || auth === "all" ? undefined : (auth as Auth),
          https:
            !protocol || protocol === "all" ? undefined : (protocol as Https),
        },
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
        skip: (Number(page) - 1) * Number(perPage),
        take: Number(perPage),
        orderBy: { createdAt: sort as Sort },
      });

      return res.status(200).json(posts);
    }
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
