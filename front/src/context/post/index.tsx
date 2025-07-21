// PostProvider.tsx
import { useEffect, useReducer, useState, type FC } from "react"
import { PostContext } from "./PostContext"
import { postReducer } from "../../reducer/post"
import { InitialPostState } from "../../helper/constants"
import useQuery from "../../hooks/useQuery"

type ProviderProps = {
    children: React.ReactNode
}

const PostProvider: FC<ProviderProps> = ({ children }) => {
    const [postState, dispatch] = useReducer(postReducer, InitialPostState)
    const [search, setSearch] = useState("")

    const [queryUrl, setQueryUrl] = useState<string>("post")
    const query = useQuery<Post[]>(queryUrl)

    useEffect(() => {
        if (search.length){
            return setQueryUrl(`post?search=${search}`)
        }
        setQueryUrl("post")
    }, [search])

    useEffect(()=>{
        query.refetch()
    }, [queryUrl])

    const value = { postState, dispatch, query, search, setSearch }

    return (
        <PostContext.Provider value={value}>
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider
