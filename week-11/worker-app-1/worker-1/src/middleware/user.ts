import { Context, Next } from "hono";
import { Jwt } from "hono/utils/jwt";

export async function authMiddleware(c: Context, next: Next) {
  const JWT_TOKEN = "token";

  try {
    const token: string = c.req.header("Authorization").split(" ")[1];
    if (token !== null || token !== undefined) {
      const decode = await Jwt.verify(token, JWT_TOKEN);
      if (decode) {
        c.set("userId", decode);
        await next();
      } else {
        return c.body("you are unauthorized", 401);
      }
    } else {
      return c.body("unauthorized user", 401);
    }
  } catch (error) {
    return c.body("unauthorized", 401);
  }
}
