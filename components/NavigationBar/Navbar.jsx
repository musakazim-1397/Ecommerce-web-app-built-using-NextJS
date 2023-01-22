
import Link from 'next/link'
import React from 'react'
import {MdOutlineShoppingBag} from 'react-icons/md';
import {AiOutlineSearch} from 'react-icons/ai';
import CartContext from '../StoreContext';
import { useContext } from 'react';

const Navbar = () => {
    const cartCtx= useContext(CartContext);
  return (
    <div className='h-[10vh] flex items-center justify-around bg-gradient-to-r from-purple-500 to-pink-400'>
        <div className="h-14 w-44 flex justify-center items-center relative">
            <img src={'/img/logo.png'} />
        </div>
        <div className=' flex justify-between gap-12 items-center -ml-48'>
            <Link href={'/'}>
                <a className=' text-white text-base my-0 font-bold'>Home</a>
            </Link>
            <Link href={'/woman'}>
                <a className=' text-white text-base my-0 font-bold'>Woman</a>
            </Link>
            <Link href={'/man'}>
                <a className=' text-white text-base my-0 font-bold'>Man</a>
            </Link>
            <Link href={'/lookbook'}>
                <a className=' text-white text-base my-0 font-bold'>Look Book</a>
            </Link>
            <Link href={'/blog'}>
                <a className=' text-white text-base my-0 font-bold'>Blog</a>
            </Link>
            <Link href={'/contact'}>
                <a className=' text-white text-base my-0 font-bold'>Contact</a>
            </Link>
        </div>
        <div className="cart-and-search flex justify-between items-center max-w-[10rem]">
            <Link href='/cart'>
            <div className="cart min-h-[0.5rem] min-w-[2.5rem] relative cursor-pointer">
                <MdOutlineShoppingBag className='w-full h-full' color='white'/>
                <span className='absolute w-[17px] bg-[#d3b0b0] text-black rounded-[50%] -bottom-[5%] flex justify-center items-center font-bold text-[12px]'>{cartCtx.totalItems}</span>
            </div>
            </Link>
            <div className="search h-5 w-5">
                <AiOutlineSearch color='white' className='w-full h-full'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar