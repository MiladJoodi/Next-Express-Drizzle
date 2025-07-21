// PostContext.ts
import { createContext } from "react"
import type { Dispatch, SetStateAction } from "react"
import type useQuery from "../../hooks/useQuery"

export const PostContext = createContext<{
    postState: PostState,
    dispatch: Dispatch<PostAction>,
    query: ReturnType<typeof useQuery<Post[]>>,
    search: string,
    setSearch: Dispatch<SetStateAction<string>>
} | null>(null)
