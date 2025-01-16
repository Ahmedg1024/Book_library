// import { useState } from "react"

function BookCard(BookName,Author,Year) {
  return (
    // const = useState('the last four things')
    <>
        <div className="w-2/12 h-60 bg-slate-100 whitespace-nowrap overflow-hidden mx-4 hover:bg-gray-200 my-3 md:w-full sm:w-full md:block lg:w-2/12 ">
          <img src=".\src\images\R.jpg" alt="book cover" className='h-4/5 w-full py-2'/>
          <h1 className="text-lg pt-1 w-full font-bold ">the last four things</h1>
          <h2 className="text-sm ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos expedita quia fugiat labore tempore dolorum</h2>
        </div>
    </>
  )
}

export default BookCard