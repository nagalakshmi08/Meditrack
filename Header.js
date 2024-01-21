import React from 'react';
import logooo from "./logooo.jpg";
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from 'react';
const Header = () => {
    const [showMenu,setShowMenu] = useState(false);
    const handleShowMenu = () =>{
        setShowMenu(preve => !preve)
    }
  return (
    <header className='relative z-50 fixed shadow-md w-full h-16 px-2 md:px-4 bg-white'>
        {}
        <div className='flex items-center h-full justify-between'>
            <Link to={""}>
            <div className='h-14 flex'>
                <img src={logooo} className='h-full text-3xl'/>
                <h1 className='mt-3 text-3xl pl-5'>MEDITRACK</h1>
            </div>
            </Link>
           <div className='flex items-center gap-4 md:gap-7'>
            <nav className="flex gap-4 md:gap-6 text-base md:text-lg">
               <Link to={""}>Home</Link>
               <Link to={"menu"}>Menu</Link>
               <Link to={"about"}>About</Link>
               <Link to={"contact"}>Contact</Link>
            </nav>
            <div className='cursor-pointer' onClick={handleShowMenu}>
            <div className='text-3xl cursor-pointer'>  
                <FaRegCircleUser/>
            </div>
            {
                showMenu && (
                    <div className='absolute right-2 bg-white py-2 px-2 shadow drop-shadow-md flex flex-col'>
                    <Link to={"signup"} className='whitespace-nowrap'>Signup</Link>
                    <Link to={"login"} className='whitespace-nowrap'>Login</Link>
                </div>
                )
            }
           
            </div>
           </div>
        </div>
    </header>
  )
}

export default Header
