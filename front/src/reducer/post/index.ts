import { InitialPostState, PostActionType } from "../../helper/constants"


export const postReducer = (state: PostState, action: PostAction) => {
    switch (action.type) {
        case PostActionType.ADD_POST: {
            const { id, title, content } = action.payload as Post;
            return {
                selectedPost: InitialPostState.selectedPost,
                posts: [
                    ...state.posts,
                    {
                        id, title, content
                    }
                ]
            }
        }
        case PostActionType.EDIT_POST: {
            const { id, title, content } = action.payload as Post;
            return {
                selectedPost: InitialPostState.selectedPost,
                posts: state.posts.map((post) => {
                    if (post.id === id) {
                        return {
                            id,
                            title,
                            content
                        }
                    }
                    return post
                })
            }
        }
        case PostActionType.DELETE_POST: {
            const id = action.payload;
            return {
                selectedPost: InitialPostState.selectedPost,
                posts: [...state.posts.filter((post) => post.id !== id?.toString())]
            }
        }
        case PostActionType.SET_POST: {
            return { ...state, selectedPost: action.payload }
        }
        case PostActionType.SET_POSTS: {
            return { selectedPost: InitialPostState.selectedPost, posts: action.payload }
        }
        case PostActionType.GET_POSTS: {
            return { ...state };
        }
        default: {
            // const otherAction = action.type;
            // return otherAction;
            return state;
        }
    }
}
