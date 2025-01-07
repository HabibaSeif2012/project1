import React from 'react'

export default function Contact() {
  return (
    <>
    <div className=' bg-pink-200 h-screen overflow-hidden'>
        <div className='mt-5'>
           <h2 className='text-pink-900 text-4xl font-bold mt-4 '>Contact</h2>
           <form>
        <div class="grid grid-cols-1 gap-6 mt-4">
            <div className='flex flex-col justify-center items-center'>
                <label class="text-pink-200 dark:text-pink- text-2xl" for="username">Username</label>
                <input id="username" type="text" class="block w-[70%] px-4 py-2 mt-2 text-pink-700 bg-white border border-pink-200 rounded-md dark:bg-pink-800 dark:text-pink-300 dark:border-pink-600 focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 dark:focus:border-pink-300 focus:outline-none focus:ring"/>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <label class="text-pink-200 text-2xl" for="emailAddress">Email Address</label>
                <input id="emailAddress" type="email" class="block w-[70%] px-4 py-2 mt-2 text-pink-700 bg-white border border-pink-200 rounded-md dark:bg-pink-800 dark:text-pink-300 dark:border-pink-600 focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 dark:focus:border-pink-300 focus:outline-none focus:ring"/>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <label class="text-pink-200 text-2xl" for="password">Password</label>
                <input id="password" type="password" class="block w-[70%] px-4 py-2 mt-2 text-pink-700 bg-white border border-pink-200 rounded-md dark:bg-pink-800 dark:text-pink-300 dark:border-pink-600 focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 dark:focus:border-pink-300 focus:outline-none focus:ring"/>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <label class="text-pink-200 text-2xl" for="passwordConfirmation">Password Confirmation</label>
                <input id="passwordConfirmation" type="password" class="block w-[70%] px-4 py-2 mt-2 text-pink-700 bg-white border border-pink-200 rounded-md dark:bg-pink-800 dark:text-pink-300 dark:border-pink-600 focus:border-pink-400 focus:ring-pink-300 focus:ring-opacity-40 dark:focus:border-pink-300 focus:outline-none focus:ring"/>
            </div>
        </div>

        <div class="flex justify-center mt-6">
            <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-pink-600 focus:outline-none focus:bg-pink-600">Save</button>
        </div>
    </form>
        </div>

    </div>
   
    </>
    
  )
}
