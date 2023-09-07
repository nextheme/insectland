import React from 'react'
import { FaSearch } from 'react-icons/fa'

function Search() {
    return (
        <div className='search-container relative min-w-[300px]'>
            <form className='relative' action={process.env.backend_api}>
                <input className='rounded-full  p-2 w-full pl-12' type="text" name="searchInput" placeholder='جستجو کنید' />
                <button className="bg-primary text-white p-2 rounded-full cursor-pointer absolute left-1 top-1">
                    <FaSearch />
                </button>
            </form>
        </div>

    )
}

export default Search
