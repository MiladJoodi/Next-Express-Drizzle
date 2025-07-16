import { Router } from "express";
import { getPosts, getPost, addPost, editPost, deletePost } from "../../controllers/post";


const postRouter = Router();

postRouter.get("/", getPosts)
postRouter.get("/:id", getPost)
postRouter.post("/", addPost)
postRouter.put("/:id", editPost)
postRouter.delete("/:id", deletePost)

export default postRouter;