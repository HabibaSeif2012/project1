import React from 'react'
import rov from'../../assets/project1.jpg'
import signin from '../../assets/signin.png';
import weather from '../../assets/Weather.png';
export default function Portifilio() {
  return (
    <>
    <div className='bg-pink-200 h-screen overflow-hidden'>
         <div>
         <h2 className='text-pink-800 text-4xl font-bold mt-5'>Portifilio</h2>
         </div>
        

        <div className='lg:flex lg:justify-center flex flex-col gap-3 lg:items-center sm:mt-3 lg:mt-9 lg:gap-3'>

          <div className='relative group lg:w-1/3 sm:w[100%] overflow-hidden group-hover:transition-all group-hover:duration-[2s]  '>
          <img src={rov} alt="" className='w-[100%]  lg:ml-4 rounded-md  ' />
          <div className='bg-pink-300 bg-opacity-50 absolute  lg:ml-4 rounded-md group-hover:top-0 group-hover:right-0 group-hover:bottom-0 group-hover:left-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-00  w-[100%]  ' >
            <h2 className='text-pink-700 text-xl font-bold mt-3 tracking-wider'>ROV</h2>
            <p className=' text-pink-950 text-l'>
            ROV (Remotely Operated Vehicle) is an unmanned, tethered underwater vehicle used for deep-sea exploration, inspection, and maintenance. Controlled remotely by operators on the surface, ROVs are equipped with cameras, robotic arms, and sensors to perform tasks in environments too dangerous or inaccessible for humans. They are widely used in industries like oil and gas, marine research, and underwater archaeology.</p>
          </div>
          </div>
          <div className='relative lg:w-1/3 sm:w[100%] group overflow-hidden group-hover:transition-all group-hover:duration-[2s] sm:mb-4  '>
          <img src={signin} alt="" className='w-[100%]  rounded-md  ' />
          <div className='bg-pink-300 bg-opacity-50 absolute rounded-md group-hover:top-0 group-hover:right-0 group-hover:bottom-0 group-hover:left-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-00  w-[100%]  ' >
            <h2 className='text-pink-700 text-xl font-bold mt-3 tracking-wider'>Smart Login</h2>
            <p className=' text-pink-950 text-l'>
            Smart login using JavaScript involves creating secure, user-friendly authentication systems, often integrating features like form validation, token-based authentication, or OAuth for third-party logins. JavaScript frameworks like React or libraries like Firebase simplify implementing smart login systems. It ensures seamless user experiences with security measures like encryption and multi-factor authentication.</p>
          </div>
          
          </div>

          <div className='relative lg:w-1/3 sm:w[100%]  group overflow-hidden group-hover:transition-all group-hover:duration-[2s]  '>
          <img src={weather} alt="" className='w-[100%]  rounded-md  ' />
          <div className='bg-pink-300 bg-opacity-50 absolute rounded-md group-hover:top-0 group-hover:right-0 group-hover:bottom-0 group-hover:left-0 transform translate-x-full group-hover:translate-x-0 transition-all duration-00  w-[100%]  ' >
            <h2 className='text-pink-700 text-xl font-bold mt-3 tracking-wider'>Weather Site</h2>
            <p className=' text-pink-950 text-l'> A weather site using vanilla JavaScript fetches real-time data from APIs like OpenWeatherMap to display current weather conditions. It dynamically updates the user interface based on API responses, using features like fetch() for HTTP requests and DOM manipulation for displaying data. This lightweight approach provides a simple yet interactive experience without additional libraries.</p>
          </div>
          
          </div>
           
        </div>


    </div>
    </>
    
  )
}
