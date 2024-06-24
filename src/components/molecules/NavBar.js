"use client"
import React, { useState } from 'react'
import NavLink from '../organisms/NavLink'
import logo from "@assets/images/authLogo.png"
import { BiSolidHandRight } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link';

function NavBar() {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className='fixed py-5 px-4 bg-white  z-50 w-screen'>
      <div className='max-w-7xl mx-auto items-center flex pr-4'>
        <div className='flex-grow md:flex-grow-0'><Image src={logo} alt='#' className='w-32' /></div>
        <div className={`md:flex px-3 md:px-0 pt-8 md:pt-0 space-y-10 md:space-y-0 flex-grow fixed md:relative w-72 md:w-auto h-screen md:h-auto bg-white shadow-md md:shadow-none transition-all duration-300 top-0 left-0 ${showNav && "-left-72 md:left-0"}`}>
          <Image src={logo} alt='#' className='w-32 md:hidden' />
          <div className='flex-grow md:flex justify-center'>
            <NavLink active text="home" />
            <NavLink text="services" />
            <NavLink text="contact" />
          </div>
          <div className='md:flex gap-5 space-y-3 md:space-y-0'>
            <Link href="/auth/login">
              <div className='px-5 flex items-center gap-3 py-3 bg-opacity-10 border border-hrms_green text-hrms_green bg-hrms_green rounded-md'>
                <FiLogIn />
                Sign In
              </div>
            </Link>
            <div className='px-5 flex items-center gap-3 py-3 bg-hrms_green rounded-md text-white'>
              <BiSolidHandRight />
              Get Started
            </div>
          </div>
        </div>
        <div>
          <div onClick={() => setShowNav(!showNav)} className="h-8 w-8 bg-hrms_green md:hidden text-white rounded-md text-xl flex items-center justify-center cursor-pointer"><i className="ri-menu-line"></i></div>
        </div>
      </div>
    </div>
  )
}

export default NavBar