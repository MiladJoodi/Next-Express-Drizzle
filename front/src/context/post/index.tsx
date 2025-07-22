import { useEffect, useReducer, useState, type FC } from "react";
import { postReducer } from "../../reducer/post";
import { InitialPostState } from "../../helper/constants";
import useQuery from "../../hooks/useQuery";
import { PostContext } from "./PostContext";
import { useDebounce } from "../../hooks/useDebounce";


type ProviderProps = {
    children: React.ReactNode
}

const PostProvider: FC<ProviderProps> = (props) => {
    const [postState, dispatch] = useReducer(postReducer, InitialPostState)
    const [search, setSearch] = useState("")

    const debouncedSearch = useDebounce(search)

    // use query hook to get the posts
    const [queryUrl, setQueryUrl] = useState("post")
    const query = useQuery<Post[]>(queryUrl)

    useEffect(()=>{
        if(search.length){
            setQueryUrl(`post?search=${debouncedSearch}`)
        } else {
            setQueryUrl("post")
        }
    }, [debouncedSearch])

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