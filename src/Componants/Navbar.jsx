import React from 'react';
import Profile from '../assets/profile.jpg';

const Navbar = () => {

  return (
    <div className=' h-16 w-[100%]   bg-blue flex flex-row justify-between items-center px-16 '>
      <div className='lg:w-1/4 sm:w-1/2 w-1/2  h-1/2 border border-blue bg-light-white rounded-md text-light-white font-light px-4 flex items-center'>
        <span className='text-xl text-blue mr-2 flex items-center'>
        <ion-icon name="search"></ion-icon>
        </span>
        <input
          type='text'
          placeholder='Search'
          className='bg-transparent border-none text-light-white focus:outline-none'
        />
      </div>
      <div className='flex flex-row md:gap-6 gap-3 items-center justify-center '>
        <span className='cursor-pointer text-3xl text-center items-center mt-2 text-light-white'>
        <ion-icon name="notifications-outline"></ion-icon>
        </span>
        <div className=' cursor-pointer w-10 h-10 rounded-full border container'>
            <img src={Profile} alt='profile' className='w-full h-full rounded-full  bg-cover'/>
        </div>

      </div>
    </div>
  )
}

export default Navbar