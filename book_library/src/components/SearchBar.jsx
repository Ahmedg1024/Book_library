import React from 'react'

function SearchBar() {
  return (
    <>
        <div className='text-center min-h-screen'>
        <p className='text-4xl font-bold mt-48'>Welcom to</p>
        <p className='text-4xl font-bold '>book library</p>
        <input className='bg-gray-300 mx-2 h-10 rounded-lg border-none w-80 mt-4' type="search" name="search" id="find_a_book" />
        <button className='font-semibold bg-blue-800 h-10 w-20 p-2 rounded-md size-5 hover:bg-blue-400'>find</button>
        </div>

    </>
  )
}

export default SearchBar

// bg-[url(".\images\background.jpg")] bg-no-repeat 