import type { FC } from "react";
import PostHeader from "./Header";
import PostInput from "./Inputs";
import PostList from "./List";
import PostProvider from "../../context/post";

const Post: FC = () => {
    return (
        <PostProvider>
            <div>
                <div className="grid grid-cols-12">
                    <div className="col-start-2 col-span-10 lg:col-start-4 lg:col-span-6">
                        <PostHeader />
                        <div className="divider" />
                        <PostInput />
                        <PostList />
                    </div>
                </div>
            </div>
        </PostProvider>
    );
}

export default Post;