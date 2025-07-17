import type { FC } from "react";
import PostHeader from "./Header";
import PostInput from "./Inputs";
import PostList from "./List";

const Post: FC = () => {
    return (
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
    );
}

export default Post;