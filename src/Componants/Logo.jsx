import React from 'react';

const Logo = ({ open }) => {
  return (
    <div className='flex flex-row gap-3 border-b-2 border-light-white px-4 py-4 shadow-md cursor-pointer my-8 justify-center   '>
     
        <span className={`text-2xl text-light-white flex items-center ${open && "rotate-[360deg]"}`}>
          <ion-icon name="videocam-outline"></ion-icon>
        </span>
     
      <h1 className={`text-2xl text-light-white font-bold ${open ? 'ml-3' : 'hidden'}`}>FlixZone</h1>
    </div>
  );
}

export default Logo;
