import { Router } from "express";
import postRouter from "./post";

const createRouter = ()=>{
    const router = Router();
    router.use("/post", postRouter);
    return router;
}

export default createRouter;