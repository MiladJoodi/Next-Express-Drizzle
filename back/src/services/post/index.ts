import { db } from "../../db"
import { Post, posts } from "../../db/schema"


export const getPostsService = async (): Promise<Post[]> => {

    //work with orm
    const allPosts = await db.select().from(posts)
    console.log("first")
    return allPosts
}