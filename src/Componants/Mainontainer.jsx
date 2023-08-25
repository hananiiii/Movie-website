import React from 'react'
import Navbar from './Navbar'
import Screen from './Screen'
import Currently from './Currently'

const Mainontainer = () => {
    
  return (
    <div className='maincontainer  w-[100%] h-[100%]   '>
        <Navbar className='fixed'/>
        <div className='px-10  py-10 w-full h-[150px]'>
        <Screen/>
            
        </div>
    </div>
  )
}

export default Mainontainer