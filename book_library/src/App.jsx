import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Pages/Home'
import BestSeller from './Pages/navigation/BestSeller'
import Fiction from './Pages/navigation/Fiction'
import Games from './Pages/navigation/Games'
import GiftCards from './Pages/navigation/GiftCards'
import Kids from './Pages/navigation/Kids'
import NewBooks from './Pages/navigation/NewBooks'
import HolidayGift from './Pages/navigation/HolidayGift'
import NonFiction from './Pages/navigation/NonFiction'
import Refer_A_Friend from './Pages/navigation/Refer_A_Friend'
import Special_offers from './Pages/navigation/Special_offers'
import YA from './Pages/navigation/YA'
import Choose_a_bookStore from './search/Choose_a_bookStore'
import Sign_in from './search/Sign_in'
import About from './Pages/Footer/About'
import TermsOfUse from './Pages/Footer/TermsOfUse'
import Contact from './Pages/Footer/Contact'
import Gift_Cards from './Pages/Footer/Gift_Cards'
import Support from './Pages/Footer/Support'

function App() {

  return (
    <>
    <Routes>
      < Route path='/' index element = {<Home/>} />
      < Route path='/Best Seller' element = {<BestSeller/>} />
      < Route path='/Fiction' element = {<Fiction/>} />
      < Route path='/Games&Puzzels' element = {<Games/>} />
      < Route path='//Gift Cards' element = {<GiftCards/>} />
      < Route path='/Holiday Gift Guide' element = {<HolidayGift/>} />
      < Route path='/Kids' element = {<Kids/>} />
      < Route path='/New Books' element = {<NewBooks/>} />
      < Route path='/NonFiction' element = {<NonFiction/>} />
      < Route path='/Refer A Friend' element = {<Refer_A_Friend/>} />
      < Route path='/Special Offers' element = {<Special_offers/>} />
      < Route path='/YA' element = {<YA/>} />
      < Route path='/Choose a bookstore' element = {<Choose_a_bookStore/>} />
      < Route path='/Sign in' element = {<Sign_in/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/Gift Cards' element={<Gift_Cards/>} />
      <Route path='/Terms of Use' element={<TermsOfUse/>} />
      <Route path='/Support & Help' element={<Support/>} />
    </Routes>
    </>
  )
}

export default App
