type Post = {
    id:string,
    title: string,
    content: string
}

type PostState ={
    posts: Post[],
    selectedPost: Post | null
}

type PostAction =
  | { type: "ADD_POST"; payload: Post }
  | { type: "EDIT_POST"; payload: Post }
  | { type: "DELETE_POST"; payload: string }
  | { type: "GET_POSTS" }
  | { type: "SET_POST"; payload: Post }
  | { type: "SET_POSTS"; payload: Post[] };