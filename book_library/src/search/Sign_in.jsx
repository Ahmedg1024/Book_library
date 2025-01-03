import { NavLink } from "react-router-dom"
import SearchBar from "../components/SearchBar"

function Sign_in() {
  return (
    <>
      <SearchBar/>
      <div className='content-center justify-center text-start w-1/3 mx-auto mt-48 bg-zinc-200'>
        <h1 className="text-4xl font-bold text-left p-2 mb-3 pl-5 ">Sign in</h1>
          <label htmlFor="userName" className="pl-10 my-8 text-base" >User Name</label>
          <input type="text" name="userName" id="userName" placeholder="enter your username" className="text-sm bg-slate-100 rounded-lg h-8 ml-8 my-8 pl-2 w-72 focus:bg-red-100"/>
          <label htmlFor="pass" className="pl-10 my-4 text-base pr-4">Password</label>
          <input type="password" name="password" id="pass"  placeholder="Password" className="ml-8 pl-2 text-sm my-4 h-8 rounded-xl bg-slate-100 w-64 mb-20 focus:bg-red-100"/>
      </div>
      <NavLink></NavLink>
    </>
  )
}

export default Sign_in