import React from 'react'
import pic from '../../assets/Habouba.jpg';
export default function Home() {
  return (
    <>
   <div className=' bg-pink-200 h-screen overflow-hidden sm:justify-center sm:items-center lg:flex justify-around items-center '>
  
         
        <div className='lg:w-1/2 sm:w-full sm:block lg:flex items-center justify-center '> 
          <img src={pic} alt="" className='lg:w-[50%] lg:ml-5 '/>
        </div>
       <div className=' text-start lg:w-1/2 sm:block sm:w-full '>
        <h2 className='text-pink-700 font-bold text-4xl'>Habiba Seif</h2>
        <p className='mt-3 text-pink-700 text-xl'><i class="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>Electrical Power Engineering Student at morning</p>

        <p className='mt-3 text-pink-700 text-xl'> <i class="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>Front End Developer at night</p>

        <p className='text-pink-700 text-xl mt-3'> <i class="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>You can contact me down here <i class="fa-solid fa-down-long text-xl text-pink-800 mr-2"></i></p>

        <div className=' flex items-center justify-start mt-3'><a href="https://www.facebook.com/share/15R1fCtHPL/"><i class="fa-brands fa-facebook text-pink-800 text-2xl"></i></a>

        <a href="https://www.linkedin.com/in/habiba-seif-752437240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i class="fa-brands fa-linkedin text-pink-800 text-2xl ml-4"></i></a>
        
        <a href="https://x.com/HabibaSeif2210?t=4tXruUOVsdVo18t_YhSzhg&s=09"><i class="fa-brands fa-x-twitter text-pink-800 text-2xl ml-4"></i></a>
        </div>
      
       </div>
       



   </div>
    </>
   
  )
}
