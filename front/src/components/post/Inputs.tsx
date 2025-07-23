import { useContext, useEffect, useState, type FC } from "react";
import { PostContext } from "../../context/post/PostContext";
import useMutation from "../../hooks/useMutation";
import { HttpMethod, PostActionType } from "../../helper/constants";
import { randomID } from "../../helper/utils";
import { z } from "zod";
import { toast } from "react-toastify";

const DEFAULT_INPUT_VALUE = {
    title: "",
    content: ""
}

const inputSchema = z.object({
    title: z.string().refine((value) => value.length >= 4, { message: "Title must be at least 4 characters long" }),
    content: z.string()
})

const Inputs: FC = () => {

    const { postState, dispatch } = useContext(PostContext)!;
    const { execute } = useMutation()

    const [input, setInput] = useState<Record<"title" | "content", string>>(DEFAULT_INPUT_VALUE)

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target;
        setInput({ ...input, [name]: value })
    }




    const onAdd = () => {
        const post = { id: randomID(), ...input }
        execute({
            url: "post",
            method: HttpMethod.POST,
            body: post,
        })
        dispatch({
            type: PostActionType.ADD_POST,
            payload: post
        })
    }

    const onEdit = () => {
        const post = { id: postState.selectedPost?.id || "", ...input }
        execute({
            url: `post/${postState.selectedPost?.id}`,
            method: HttpMethod.PUT,
            body: post,
        })
        dispatch({
            type: PostActionType.EDIT_POST,
            payload: post
        })
    }

    const onSubmitClick = () => {
        try {

            inputSchema.parse(input)

            if (postState.selectedPost?.id !== "") {
                onEdit();
            } else {
                onAdd()
            }
            setInput({ ...DEFAULT_INPUT_VALUE })

        } catch (e) {
            if (e instanceof z.ZodError) {
                toast.error(JSON.parse(e.toString())[0].message)
                console.log(e)
            }
        }

    }



    useEffect(() => {
        setInput({
            title: postState.selectedPost?.title || "",
            content: postState.selectedPost?.content || ""
        })
    }, [postState.selectedPost])

    return (
        <div>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Title</span>
                </div>
                <input
                    value={input.title}
                    type="text"
                    name="title"
                    placeholder="Post title"
                    className="input input-bordered w-full input-sm"
                    onChange={onChangeInput}
                />

            </label>

            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Content</span>
                </div>
                <textarea
                    value={input.content}
                    placeholder="Post content"
                    className="textarea textarea-bordered w-full textarea-sm"
                    name="content"
                    onChange={onChangeInput}
                >
                </textarea>
            </label>

            <button
                className="btn btn-primary w-full btn-sm mt-4"
                onClick={onSubmitClick}
            >
                {postState.selectedPost?.id !== "" ? "Update Post" : "Create Post"}
            </button>

        </div>
    );
}

export default Inputs;