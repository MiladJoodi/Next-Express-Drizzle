import type { FC } from "react";


const Header:FC = () => {

    const onChangeSearch = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {value} = e.target;
        console.log(value);
    }

    return (
        <div className='navbar bg-base-100'>
            <div className='flex flex-1'>
                <p>Posts (2)</p>
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