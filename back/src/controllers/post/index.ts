
import { Request, Response } from "express"
import { addPostService, deletePostService, editPostService, getPostService, getPostsService } from "../../services/post"

// get Posts
export const getPosts = async (req: Request, res: Response): Promise<Response> => {
    try {
        const search = req.query.search as string
        const posts = await getPostsService(search)
        return res.status(200).json(posts)
    } catch (e) {
        return res.status(400).send(e)
    }
}

// get single post
export const getPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params

        const post = await getPostService(id)
        if(!post) return res.status(404).send({message: "post does not exist"})
        return res.status(200).json(post)
    } catch (e) {
        return res.status(400).send(e)
    }
}

// add post
export const addPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, content } = req.body

        const post = await addPostService({title, content})
        return res.status(200).json(post)
    } catch (e) {
        return res.status(400).send(e)
    }
}

// edit Post
export const editPost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { title, content } = req.body
        const { id } = req.params

        const post = await editPostService(id, {title, content})
        if(!post) return res.status(404).send({message: "post does not exist"})

        return res.status(200).json(post)
    } catch (e) {
        return res.status(400).send(e)
    }
}

// delete Post
export const deletePost = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { id } = req.params

        const post = await deletePostService(id)
        if(!post) return res.status(404).send({message: "post does not exist"})

        return res.status(200).json({message: "post deleted successfully"})
    } catch (e) {
        return res.status(400).send(e)
    }
}

