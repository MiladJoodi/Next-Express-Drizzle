import { useContext, useEffect, type FC } from "react";
import PostItem from "./Item";
import { PostContext } from "../../context/post/PostContext";
import { PostActionType } from "../../helper/constants";

const List: FC = () => {

    const { postState, query, dispatch } = useContext(PostContext)!;
    console.log("postState", postState)

    useEffect(() => {
        dispatch({
            type: PostActionType.SET_POSTS,
            payload: query.data || []
        })
    }, [query.data])

    return (
        <div className="flex flex-col gap-3 mt-5">
            {postState?.posts?.length > 0 ? (
                postState.posts?.map((item) => (
                    <PostItem {...item} key={item.id} />
                ))
            ) : (
                <span className="text-center text-lg font-bold">
                    No posts found
                </span>
            )}
        </div>
    );
}

export default List;