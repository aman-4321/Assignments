import { Hono } from "hono";
import {
  getAllUsers,
  signin,
  signup,
  userProfile,
} from "../controller/userController";
import { authMiddleware } from "../middleware/user";

export const userRouter = new Hono();

userRouter.post("/signup", signup);
userRouter.post("/signin", signin);

userRouter.get("/user/:id", authMiddleware, userProfile);
userRouter.get("/users", authMiddleware, getAllUsers);
