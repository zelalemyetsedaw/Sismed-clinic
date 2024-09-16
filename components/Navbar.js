'use client'

import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    // Change opacity based on scroll
    useEffect(() => {
      const handleScroll = () => {
        console.log(window.scrollY)
        if (window.scrollY > 50) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
  return (
    <div className=''>
        <div className="bg-transparent fixed right-0 left-0 top-0 flex justify-between items-center py-5 ">
          {console.log(scroll)}
          <div className={`${scroll ? "bg-white opacity-100 lg:shadow-lg" : " lg:bg-white shadow-lg bg-black opacity-100 lg:opacity-100" } absolute inset-0 duration-1000`}></div>
          <div className="relative flex justify-between items-center w-full">
            <div>
              <h1 className={`${scroll ? "text-black": "text-white"} lg:pl-28 pl-10 text-2xl  lg:text-black font-extrabold`}>Sismed</h1>
            </div>

            <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <p className={`${scroll? "text-black " : "text-white "} flex items-center pr-10`}><FaBars className='mr-2'/>MENU</p> : <p className={`${scroll? "text-black " : "text-white "} flex items-center pr-10`}><FaBars className='mr-2'/>MENU</p>}
            </button>
            </div>

            <div className="hidden pr-28 lg:flex gap-7 items-center">
              <ul className="flex gap-7">
                <li className="hover:border-b-2 cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-500"><Link href="#home" scroll={true}>Home</Link></li>
                <li className="hover:border-b-2 cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-500"><Link href="#about" scroll={true} >About</Link></li>
                <li className="hover:border-b-2 cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-500"><Link href="#department" scroll={true} duration={500}>Department</Link></li>
                {/* <li className="hover:border-b-2 cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-500">Doctors</li> */}
                <li className="hover:border-b-2 cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-500"><Link href="#contactus" scroll={true}>ContactUs</Link></li>
              </ul>
              <button className="bg-[#FE5F55]  text-white text-sm p-3 rounded">
                Appointment
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          
          <div className={`${
            isOpen ? "block" : "hidden"
          } lg:hidden  bg-black pl-10 text-white  absolute top-full left-0 w-full text-left  shadow-lg`}>
              <ul className="flex flex-col text-xl gap-y-7">
                <li className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300"><Link href="#home" >Home</Link></li>
                <li className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300"><Link href="#about" >About</Link></li>
                <li className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300"><Link href="#department">Department</Link></li>
                {/* <li className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300">Doctors</li> */}
                <li className="hover:border-b-2 w-fit cursor-pointer hover:border-blue-600 border-b-2 border-b-transparent transition-colors duration-300"><Link href="#contactus" >ContactUs</Link></li>
              </ul>
              <button className="bg-[#FE5F55] w-full my-3 text-white text-sm p-3 rounded">
                Appointment
              </button>
            </div>
          
        </div>
    </div>
  )
}

export default Navbar