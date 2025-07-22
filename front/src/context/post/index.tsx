import { createContext, useEffect, useReducer, useState, type Dispatch, type FC, type SetStateAction } from "react";
import { postReducer } from "../../reducer/post";
import { InitialPostState } from "../../helper/constants";
import useQuery from "../../hooks/useQuery";
import { PostContext } from "./PostContext";


type ProviderProps = {
    children: React.ReactNode
}

const PostProvider: FC<ProviderProps> = (props) => {
    const [postState, dispatch] = useReducer(postReducer, InitialPostState)
    const [search, setSearch] = useState("")

    // use query hook to get the posts
    const [queryUrl, setQueryUrl] = useState("post")
    const query = useQuery<Post[]>(queryUrl)

    useEffect(()=>{
        if(search.length){
            setQueryUrl(`post?search=${search}`)
        }
        setQueryUrl("post")
    }, [search])

    useEffect(()=>{
        query.refetch()
    }, [queryUrl])

    
    const value = {postState, dispatch, query, search, setSearch}

    return(
        <>
        <PostContext.Provider value={value}>
            {props.children}
        </PostContext.Provider>
        </>
    )

}

export default PostProvider