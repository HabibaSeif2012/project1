import React from 'react';
import pic from '../../assets/Habouba.jpg';

export default function Home() {
  return (
    <>
      <div className="bg-pink-200 h-screen flex items-center justify-center overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around w-full max-w-6xl px-4">
          <div className="lg:w-1/2 sm:w-full flex items-center justify-center mb-6 lg:mb-0">
            <img src={pic} alt="Habiba Seif" className="lg:w-[50%] w-3/4 lg:ml-5" />
          </div>
          <div className="text-start lg:w-1/2 sm:w-full">
            <h2 className="text-pink-700 font-bold text-4xl text-center lg:text-left">Habiba Seif</h2>
            <p className="mt-3 text-pink-700 text-xl">
              <i className="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>
              Electrical Power Engineering Student at morning
            </p>
            <p className="mt-3 text-pink-700 text-xl">
              <i className="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>
              Front End Developer at night
            </p>
            <p className="text-pink-700 text-xl mt-3">
              <i className="fa-solid fa-heart text-xl text-pink-800 mr-2"></i>
              You can contact me down here 
              <i className="fa-solid fa-down-long text-xl text-pink-800 ml-2"></i>
            </p>
            <div className="flex items-center justify-start mt-3">
              <a href="https://www.facebook.com/share/15R1fCtHPL/" className="text-pink-800 text-2xl">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/in/habiba-seif-752437240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-pink-800 text-2xl ml-4">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://x.com/HabibaSeif2210?t=4tXruUOVsdVo18t_YhSzhg&s=09" className="text-pink-800 text-2xl ml-4">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
