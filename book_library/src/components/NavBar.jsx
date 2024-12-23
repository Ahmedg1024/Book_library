import React from 'react'

function NavBar() {
  return (
    <>
    <div className='mt-5 flex content-center'>
        <img src=".\src\images\logo.png" alt="Logo of Bookshop.org" className='w-'/>
        <nav className='align-middle flex ml-auto'>
            <a href=".\src\Pages\Home" className='p-1'>Home</a>
            <a href=".\src\Pages\AboutUs" className='p-1 '>About Us</a>
            <a href=".\src\Pages\OurBlog" className='p-1'>Our Blog</a>
            <a href=".\src\Pages\Products" className='p-1'>Products</a>
            <a href="ContactUs" className='p-1'>Contact Us</a>
        </nav>
        
    </div>
    </>
    
  )
}

export default NavBar