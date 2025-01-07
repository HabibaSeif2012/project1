import React from 'react'

export default function Footer() {
  return (
    <>
    <div className='relative '>
      <div className='bg-pink-700 lg:flex p-3   '>
          <div className='lg:w-1/3 mt-3 sm:w-full'>
              <h2 className='text-pink-100 font-bold text-2xl'>LOCATION</h2>
              <p className='text-pink-200 m-3'>6 October city</p>
              <p className='m-3 text-pink-200'>1123, Nasr Ammar</p>
          </div>
          <div className='lg:w-1/3 mt-3 sm:w-full'>
              <h2 className='text-pink-100 font-bold text-2xl'>Around The Web</h2>
              <div className='flex justify-center'>
              <i className="fa-brands fa-facebook text-pink-200 ml-5 mt-3"></i>
              <i className="fa-brands fa-twitter text-pink-200 ml-5 mt-3"></i>
              <i className="fa-brands fa-linkedin text-pink-200 ml-5 mt-3"></i>
              </div>
          </div>
          <div className='lg:w-1/3 mt-3 sm:w-full'>
              <h2 className='text-pink-100 font-bold text-2xl'>About freelance</h2>
              <p className='text-pink-200 m-3'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
             
          </div>
          </div>
      <div className='bg-pink-200 text-center p-2 sm:w-full'>
            <p className='m-3 text-pink-700 font-bold'>Copyright © Your Website 2025</p>
          </div>
    </div>
    </>
    
  )
}
