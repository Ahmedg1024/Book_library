import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './assets/Pages/Home'
import ContactUs from './assets/Pages/ContactUs'
import OurBlog from './assets/Pages/OurBlog'
import Products from './assets/Pages/Products'
import AboutUs from './assets/Pages/AboutUs'

function App() {

  return (
    <>
    <Routes>
      < Route path='/' element = {<Home/>} />
      < Route path='/About Us' element = {<AboutUs/>} />
      < Route path='/Contact Us' element = {<ContactUs/>} />
      < Route path='/Our Blog' element = {<OurBlog/>} />
      < Route path='/Products' element = {<Products/>} />
    </Routes>
    </>
  )
}

export default App
