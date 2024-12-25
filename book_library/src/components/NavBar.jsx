import { NavLink } from 'react-router-dom'
import GiftCards from '../Pages/navigation/GiftCards'
import Home from '../Pages/Home'
import BestSeller from '../Pages/navigation/BestSeller'
import Fiction from '../Pages/navigation/Fiction'
import Games from '../Pages/navigation/Games'
import Kids from '../Pages/navigation/Kids'
import NewBooks from '../Pages/navigation/NewBooks'
import HolidayGift from '../Pages/navigation/HolidayGift'
import NonFiction from '../Pages/navigation/NonFiction'
import Refer_A_Friend from '../Pages/navigation/Refer_A_Friend'
import Special_offers from '../Pages/navigation/Special_offers'
import YA from '../Pages/navigation/YA'

function NavBar() {
  return (
    <>
    <div className='mt-1 flex content-center '>
      <nav className='text-center justify-center flex'>
        <ul className='flex text-xs'>
          <li>
            <NavLink to = "/Gift Cards" className='py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Gift Cards</NavLink>
          </li>
          <li>
            <NavLink to = "/Special Offers" className='py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Special Offers</NavLink>
          </li> 
          <li>
            <NavLink to = "/New Books" className='py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>New Books</NavLink>
          </li> 
          <li>
            <NavLink to = "/Holiday Gift Guide" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Holiday Gift Guide</NavLink>
          </li> 
          <li>
            <NavLink to = "/Refer A Friend" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Refer A Friend</NavLink>
          </li> 
          <li>
            <NavLink to = "/Best Seller" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Best Seller</NavLink>
          </li> 
          <li>
            <NavLink to = "/Fiction" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Fiction</NavLink>
          </li> 
          <li>
            <NavLink to = "/NonFiction" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>NonFiction</NavLink>
          </li> 
          <li>
            <NavLink to = "/YA" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>YA</NavLink>
          </li> 
          <li>
            <NavLink to = "/Kids" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Kids</NavLink>
          </li>
          <li>
            <NavLink to = "/Games&Puzzels" className='text-xs py-1 px-2 hover:bg-slate-500 text-center align-middle rounded-2xl'>Games&Puzzels</NavLink>
          </li> 
        </ul>
        
      </nav>
        
    </div>
    </>
    
  )
}

export default NavBar