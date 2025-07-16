
import { Request, Response } from "express"
import { getPostsService } from "../../services/post"

// get Posts
export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const posts = await getPostsService()
        return res.status(200).json(posts)
    } catch (e) {
        console.error("Error in getPosts:", e); // 👈 این خطو اضافه کن

        return res.status(500).json({ message: "Internal server error" })
    }
}

// get single post
export const getPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params

        const posts = await getPostService(id)
        if(!posts) return res.status(404).send({message: "post does not exist"})
        return res.status(200).json(posts)
    } catch (e) {
        console.error("Error in getPosts:", e); // 👈 این خطو اضافه کن

        return res.status(500).json({ message: "Internal server error" })
    }
}