import React from 'react'
import { Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'


export const NavBar = () => {
  return (
    <header className='bg-red-600'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>

          <Link to='/' exact
            className='inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font:bold cursive tracking-widest active:text-green focus:text-blue-200'>LSociety</Link>


          <Link to='/post' className='active:text-red-100 active:bg-red-700 focus:text-red-100  
            focus:bg-red-700
 inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'

          >Blog</Link>
          <Link to='/project' className='active:text-red-100 active:bg-red-700 focus:text-red-100  
            focus:bg-red-700
 inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'

          >Projects</Link>
          <Link to='/about' className='active:text-red-100 active:bg-red-700 focus:text-red-100  
            focus:bg-red-700
 inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'

          >About me!</Link>



        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon url='https://www.facebook.com/andrei.p.lazar' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

          <SocialIcon url='https://www.linkedin.com/in/andreipetrulazar/' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

          <SocialIcon url='https://github.com/andreipetrulazar' className='mr-4' target="_blank" fgColor='#fff' style={{ height: 35, width: 35 }} />

        </div>
      </div>
    </header>
  )
}
