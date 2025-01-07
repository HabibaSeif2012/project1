import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return ( <div className='bg-pink-700 flex justify-between items-center relative m-auto p-7 '>
    <div className='flex flex-wrap justify-between items-center gap-4 max-w-screen-xl mx-auto w-full'>
    <NavLink className='text-pink-200 text-3xl font-bold'  to="">Habiba Seif</NavLink>
        <div>
            <NavLink className='mr-5 text-pink-200 text-xxl font-bold active' to="about">About</NavLink>
            <NavLink className='mr-5 text-pink-200 text-xxl font-bold' to="portifilio">Portifilio</NavLink>
            <NavLink  className='mr-5 text-pink-200 text-xxl font-bold' to="contact"> Contact</NavLink>
        </div>
    </div>
       
   
    </div>
  )
}
