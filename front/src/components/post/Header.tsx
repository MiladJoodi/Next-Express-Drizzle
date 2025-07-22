import { useContext, type FC } from "react";
import { PostContext } from "../../context/post/PostContext";


const Header:FC = () => {
    
    const {setSearch, postState} = useContext(PostContext)!

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        setSearch(value)
    }

    return (
        <div className='navbar bg-base-100'>
            <div className='flex flex-1'>
                <p>Posts ({postState?.posts?.length})</p>
            </div>
            <div className='flex-none gap-2'>
                <div className='form-control'>
                    <input
                        type='text'
                        placeholder='Search'
                        className='input input-bordered w-36 max-w-xs'
                        onChange={onChangeSearch}
                    />
                </div>

            </div>

        </div>
    );
}

export default Header;