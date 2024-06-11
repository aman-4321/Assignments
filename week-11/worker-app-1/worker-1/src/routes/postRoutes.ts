import { Hono } from "hono";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  getUserPosts,
  updatePost,
} from "../controller/postController";

import { authMiddleware } from "../middleware/user";

export const postRouter = new Hono();

postRouter.get("/all-posts", getPosts);
postRouter.get("/posts", authMiddleware, getUserPosts);
postRouter.post("/create-post", authMiddleware, createPost);
postRouter.get("/post/:id", authMiddleware, getPost);
postRouter.put("/post/:id", authMiddleware, updatePost);
postRouter.delete("/post/:id", authMiddleware, deletePost);
