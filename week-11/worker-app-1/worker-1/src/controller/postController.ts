import { PrismaClient } from "@prisma/client/edge";
import { Context } from "hono";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSIOON = 403,
}

export async function getPosts(c: Context) {
  const prisma = new PrismaClient();

  try {
    const response = await prisma.posts.findMany({
      include: {
        tags: true,
        User: true,
      },
    });

    return c.json({
      post: response.map((res) => ({
        id: res.id,
        username: res.User.username,
        userId: res.User.id,
        title: res.title,
        body: res.body,
        tags: res.tags,
        createdAt: res.createdAt,
      })),
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function getUserPosts(c: Context) {
  const prisma = new PrismaClient();

  try {
    const resa = await prisma.posts.findMany({
      where: {
        userId: c.get("userId"),
      },
    });
    return c.json({
      post: resa,
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export async function createPost(c: Context) {
  const prisma = new PrismaClient();

  try {
    const body: {
      title: string;
      body: string;
      tags: string;
    } = await c.req.json();

    const tagNames = body.tags.split(",").map((tag) => tag.trim());
  } catch (error) {}
}
