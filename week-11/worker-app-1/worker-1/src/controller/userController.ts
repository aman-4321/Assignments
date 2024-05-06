import { PrismaClient } from "@prisma/client/edge";
import { Context } from "hono";
import { signinSchema, signupSchema } from "../zod/user";
import { Jwt } from "hono/utils/jwt";

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOPERMISSION = 403,
}

export async function signup(c: Context) {
  const prisma = new PrismaClient();

  try {
    const body: {
      username: string;
      email: string;
      password: string;
    } = await c.req.json();

    const parsedUser = signupSchema.safeParse(body);

    if (!parsedUser.success) {
      return c.body("Invalid user Input", StatusCode.BADREQ);
    }

    const UserExist = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (UserExist) {
      return c.body("email already exists", StatusCode.BADREQ);
    }

    const res = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    const userId = res.id;

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);

    return c.json({
      msg: "user created successfully",
      token: token,
      user: {
        userId: res.id,
        username: res.username,
        email: res.email,
      },
    });
  } catch (error) {
    return c.body(`Server Error: ${error}" , 500`);
  }
}

export async function signin(c: Context) {
  const prisma = new PrismaClient();
  try {
    const body: {
      email: string;
      password: string;
    } = await c.req.json();

    const parsedUser = signinSchema.safeParse(body);

    if (!parsedUser.success) {
      return c.body("Invalid user input", StatusCode.BADREQ);
    }

    const isUserExist = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (isUserExist == null) {
      return c.body("User does not Exist", StatusCode.BADREQ);
    }

    const userId = isUserExist.id;

    const token = await Jwt.sign(userId, c.env.JWT_TOKEN);

    return c.json({
      msg: "Login successful",
      token: token,
      user: {
        userId: userId,
        username: isUserExist.username,
        email: isUserExist.email,
      },
    });
  } catch (error) {
    return c.body(`Server Error: ${error}" , 500`);
  }
}

export async function userProfile(c: Context) {
  const prisma = new PrismaClient();

  try {
    const res = await prisma.user.findFirst({
      where: {
        id: Number(c.req.param("id")),
      },
      include: {
        posts: true,
      },
    });

    if (res == null) {
      return c.body("user not found", 404);
    } else {
      return c.json({
        user: {
          id: res.id,
          username: res.username,
          email: res.email,
          posts: res.posts,
        },
      });
    }
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
}

export const getAllUsers = async (c: Context) => {
  const prisma = new PrismaClient();

  try {
    const res = await prisma.user.findMany();
    return c.json({
      users: res.map((user) => ({
        id: user.id,
        username: user.username,
        email: user.email,
      })),
    });
  } catch (error) {
    return c.body(`Internal server error: ${error}`, 500);
  }
};
