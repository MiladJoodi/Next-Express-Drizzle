import type { FC } from "react";

const Item: FC = () => {
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl duration-75 hover:scale-105">
                <div className="card-body">
                    <div className="card-title flex justify-between items-center">
                        <h2>title</h2>
                        <div className="flex items-center gap-2">
                            <button className="btn btn-circle btn-outline btn-sm">
                                Edit
                            </button>
                            <button className="btn btn-circle btn-outline btn-sm">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;