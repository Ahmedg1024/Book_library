import React from 'react'
import { NavLink } from 'react-router-dom'
function Footer() {
  return (
    <>
        <div className='bg-violet-900 w-full text-white flex'>
          <div className='w-1/4'>
            <img src="" alt="" />
          </div>
          <div className='text-sm text-center w-2/4 mt-7 md:w-full'>
            <NavLink to ='/about' >About</NavLink> <br />
            <NavLink to ='/Suppport/Help'>Suppport/Help</NavLink> <br />
            <NavLink to ='/Gift Cards'>Gift Cards</NavLink> <br />
            <NavLink to ='/Contact'>Contact</NavLink> <br />
            <NavLink to ='/Terms of Use'>Terms of Use</NavLink>  
          </div>
            
          <div className='w-1/4  ml-auto mr-8 mt-7 md:w-full'>
            <p className='text-center font-bold text-2xl'>Follow us</p>
            <div className='flex'>
              <img src="https://rails-assets-us.bookshop.org/assets/icon-x-06f2c6421bcff972e6d6da324504104da14c947623f367be696d63f47a0ea451.svg" alt="X website logo" className='w-10'/>
              <img src="https://rails-assets-us.bookshop.org/assets/icon-facebook-573255ba1a893bcc1b0e26d5bb3d26e29950e72079360d7b58e6ca1aa628757c.svg" alt="Facebook Logo" className='w-10'/>
              <img src="https://rails-assets-us.bookshop.org/assets/icon-instagram-015ea6b8500fb243a606a5117772f949603f9d035d5ab677b7d24a6f379e3cbe.svg" alt="Insta logo" className='w-10'/>
              <img src="https://rails-assets-us.bookshop.org/assets/icon-threads-eaa5b4d30197b051e856f3476f6280ad90f0a34ec53cc090da4824a7f34713c8.svg" alt="Bookshop.org threads" className='w-10'/>
              <img src="https://rails-assets-us.bookshop.org/assets/icon-tiktok-f258edd439a6a0ff0def1987359fab63825f9204e5cc105aad9ec2f4e731340a.svg" alt="Bookshop.org Tiktok" className='w-10'/>
            </div>

          </div>
        </div>
    </>
  )
}

export default Footer