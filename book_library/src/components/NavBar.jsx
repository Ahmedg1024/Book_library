import React from 'react'

function NavBar() {
  return (
    <>
    <div className='mt-5 flex content-center'>
        <p className='p-2'>logo</p>
        <nav className='align-middle flex ml-auto'>
            <a href="#" className='p-1'>Home</a>
            <a href="#" className='p-1'>About Us</a>
            <a href="#" className='p-1'>Our Blog</a>
            <a href="#" className='p-1'>Products</a>
            <a href="#" className='p-1'>Contact Us</a>
        </nav>
        
    </div>
    </>
    
  )
}

export default NavBar