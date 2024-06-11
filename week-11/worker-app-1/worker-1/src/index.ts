import { Hono } from "hono";
import { userRouter } from "./routes/userRoutes";
import { cors } from "hono/cors";
import { postRouter } from "./routes/postRoutes";
import { tagRouter } from "./routes/tagRoutes";
const app = new Hono();

app.use(cors());

app.route("/api/v1/user", userRouter);
app.route("/api/v1/posts", postRouter);
app.route("/api/v1/tags", tagRouter);

export default app;
