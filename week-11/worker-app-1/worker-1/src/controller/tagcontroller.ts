import { PrismaClient } from "@prisma/client/edge";
import { Context } from "hono";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export const getTags = async (c: Context) => {
  const prisma = new PrismaClient();

  try {
    const res = await prisma.tags.findMany();

    return c.json({
      tags: res,
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
};

export const getPostsByTag = async (c: Context) => {
  const prisma = new PrismaClient();

  try {
    const res = await prisma.tags.findMany({
      where: {
        tag: String(c.req.param("tag")),
      },
      select: {
        post: {
          select: {
            User: { select: { username: true } },
            id: true,
            userId: true,
            title: true,
            body: true,
            createdAt: true,
          },
        },
      },
    });

    return c.json({
      posts: res[0].post.map((post: any) => ({
        username: post.User.username,
        id: post.id,
        title: post.title,
        userId: post.userId,
        body: post.body,
        createdAt: post.createdAt,
      })),
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
};
