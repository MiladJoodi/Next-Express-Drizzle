import type { FC } from "react";
import PostItem from "./Item";

const List:FC = () => {
    return (
        <div className="flex flex-col gap-3 mt-5">
            <PostItem />
        </div>
    );
}

export default List;