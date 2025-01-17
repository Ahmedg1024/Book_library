import Choose_a_bookStore from "../search/Choose_a_bookStore"
import Sign_in from "../search/Sign_in"
import { NavLink } from "react-router-dom"
import Home from "../Pages/Home"

function SearchBar() {
  return (
    <>

      <header className="mt-3 flex justify-center text-center content-center">
      <NavLink to = "/" className='py-1 px-2 hover:bg-slate-50 text-center align-middle rounded-2xl border-none'>
      <img src=".\src\images\logo.png" alt="Logo of Bookshop.org" className=''/>
      
      </NavLink>
        
        
        <div className='bg-#f5f6f7 flex justify-center w-2/4 ml-10'>
          <input className='bg-gray-300 h-9 rounded-3xl border-none w-full mt-4 mx-3 text-left px-4 ' type="search" name="search" placeholder='Search books, authors,ISBNs' />
          <button className='absolute fill-fuchsia-700 translate-x-80 translate-y-4 pl-12 pt-1 md:translate-x-20 lg:translate-x-80'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="30px" height="30px"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg></button>
        </div>
        <div className="flex text-center justify-center ml-auto mr-16">
          
          <NavLink to='/Choose a bookstore' className='py-3 px-2 mx-3 hover:bg-slate-500 text-center content-center rounded-2xl font-semibold text-sm sm:text-xs  '>Choose a bookstore</NavLink>
          <NavLink to='/Sign in' className='mr-9 py-3 px-2 hover:bg-slate-500 text-center content-center rounded-2xl font-semibold text-sm sm:text-xs'>Sign in</NavLink>

        </div>
      </header>

    </>
  )
}

export default SearchBar

// bg-[url(".\images\background.jpg")] bg-no-repeat 