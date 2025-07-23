export const PostActionType = {
  ADD_POST: "ADD_POST",
  EDIT_POST: "EDIT_POST",
  DELETE_POST: "DELETE_POST",
  GET_POSTS: "GET_POSTS",
  SET_POST: "SET_POST",
  SET_POSTS: "SET_POSTS",
} as const

export type PostActionType = keyof typeof PostActionType


export const HttpMethod = {
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
} as const;

export type HttpMethod = typeof HttpMethod[keyof typeof HttpMethod];


export const InitialPostState: PostState = {
  // posts: [],
  // selectedPost: {id: "1", title: "test title", content: "test content"}
  posts: [{ id: "1", title: "test title", content: "test content" }],
  selectedPost: { id: "", title: "", content: "" }
}
