import React from 'react'

const SuperOffer = () => {
  return (
    <div className='h-screen w-screen flex justify-around items-center bg-gradient-to-r from-[#b41950] 35% to-[#040404]'>
        <div className="w-[30rem] h-[30rem] border-2 border-gray-500 relative">
            <img className="w-full h-full" src='/img/featured/featured-1.jpg'/>
            <button className='py-2 px-4 bg-blue-500 absolute -bottom-[4%] left-[40%]'>SEE MORE</button>
        </div>
        <div className="w-[30rem] h-[30rem] border-2 border-gray-500 relative">
            <img className="w-full h-full" src='/img/featured/featured-2.jpg'/>
            <button className='py-2 px-4 bg-blue-500 absolute -bottom-[4%] left-[40%]'>SEE MORE</button>
        </div>
    </div>
  )
}

export default SuperOffer