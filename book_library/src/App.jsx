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

function App() {

  return (
    <>
    <Routes>
      < Route path='/' index element = {<Home/>} />
      < Route path='/Best seller' element = {<BestSeller/>} />
      < Route path='/fiction' element = {<Fiction/>} />
      < Route path='/Games&Puzzels' element = {<Games/>} />
      < Route path='/GiftCards' element = {<GiftCards/>} />
      < Route path='/HolidayGift' element = {<HolidayGift/>} />
      < Route path='/Kids' element = {<Kids/>} />
      < Route path='/NewBooks' element = {<NewBooks/>} />
      < Route path='/NonFiction' element = {<NonFiction/>} />
      < Route path='/Refer_A_Friend' element = {<Refer_A_Friend/>} />
      < Route path='/Special_offers' element = {<Special_offers/>} />
      < Route path='/YA' element = {<YA/>} />

    </Routes>
    </>
  )
}

export default App
