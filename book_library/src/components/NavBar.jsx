import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <>
    <div className='mt-1 flex justify-center content-center mb-5'>
      <nav className='text-center justify-center content-center flex'>
        <ul className='flex text-sm justify-center text-center place-content-center'>
          <li>
            <NavLink to = "/Gift Cards" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Gift Cards</NavLink>
          </li>
          <li>
            <NavLink to = "/Special Offers" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Special Offers</NavLink>
          </li> 
          <li>
            <NavLink to = "/New Books" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>New Books</NavLink>
          </li> 
          <li>
            <NavLink to = "/Holiday Gift Guide" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Holiday Gift Guide</NavLink>
          </li> 
          <li>
            <NavLink to = "/Refer A Friend" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Refer A Friend</NavLink>
          </li> 
          <li>
            <NavLink to = "/Best Seller" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Best Seller</NavLink>
          </li> 
          <li>
            <NavLink to = "/Fiction" className='py-1 px-2 hover:bg-slate-500 text-center align-middle '>Fiction</NavLink>
          </li> 
          <li>
            <NavLink to = "/NonFiction" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>NonFiction</NavLink>
          </li> 
          <li>
            <NavLink to = "/YA" className='py-1 px-2 hover:bg-slate-500 text-center align-middle '>YA</NavLink>
          </li> 
          <li>
            <NavLink to = "/Kids" className='py-1 px-2 hover:bg-slate-500 text-center align-middle '>Kids</NavLink>
          </li>
          <li>
            <NavLink to = "/Games&Puzzels" className='py-1 px-2 hover:bg-slate-500 text-center align-middle'>Games&Puzzels</NavLink>
          </li> 
        </ul>
        
      </nav>
        
    </div>
    </>
    
  )
}

export default NavBar