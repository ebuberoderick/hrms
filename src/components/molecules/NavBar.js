"use client"
import React, { useState } from 'react'
import NavLink from '../organisms/NavLink'
import logo from "@assets/images/logoBright.png"
import { BiSolidHandRight } from "react-icons/bi";
import { FiLogIn, FiSearch } from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link';

function NavBar({active}) {
  const [showNav, setShowNav] = useState(false);
  const [isSearch, setSearch] = useState(false)
  return (
    <div className='sticky top-0 py-5 px-4 bg-black  z-50 w-screen'>
      <div className='max-w-7xl mx-auto items-center flex pr-4'>
        <div className='flex-grow md:flex-grow-0'><Image src={logo} alt='#' className='w-32' /></div>
        <div className={` ${showNav? " left-0":"-left-72 md:left-0"} md:flex px-3 md:px-0 pt-8 md:pt-0 space-y-10 md:space-y-0 flex-grow fixed md:relative w-72 md:w-auto h-screen md:h-auto bg-black shadow-md md:shadow-none transition-all duration-300 top-0`}>
          <Image src={logo} alt='#' className='w-32 md:hidden' />
          <div className='flex-grow md:flex justify-center'>
            <NavLink active={active} text="home" />
            <NavLink active={active} text="help" />
            <NavLink active={active} text="partners" />
            <NavLink active={active} text="training" />
            <NavLink active={active} text="contact" />
          </div>
          <div className='md:flex gap-5 space-y-3 md:space-y-0'>
            {
              isSearch ? (
                <div>
                  <div className="md:flex items-center gap-5">
                    <div><input className="bg-transparent border outline-none focus-within:border-hrms_green border-white w-full sm:w-72 px-3 py-2 rounded-2xl" /></div>
                    <div onClick={() => setSearch(false)} className='px-4 cursor-pointer flex items-center gap-3 py-2 text-white rounded-3xl'>
                      cancel
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex text-white items-center gap-5">
                    <FiSearch onClick={() => setSearch(true)} className="text-2xl cursor-pointer" />
                    <Link href="/auth/login">
                      <div className='px-8 flex items-center gap-3 py-2 border border-white text-white rounded-3xl'>
                        Login
                      </div>
                    </Link>
                  </div>
                </div>
              )
            }
          </div>
        </div>
        <div>
          <div onClick={() => setShowNav(!showNav)} className="h-8 w-8 bg-hrms_green md:hidden text-white rounded-md text-xl flex items-center justify-center cursor-pointer"><i className="ri-menu-line"></i></div>
        </div>
      </div >
    </div >
  )
}

export default NavBar