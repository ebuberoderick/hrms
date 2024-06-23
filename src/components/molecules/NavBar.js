import React from 'react'
import NavLink from '../organisms/NavLink'
import logo from "@assets/images/authLogo.png"
import { BiSolidHandRight } from "react-icons/bi";
import { FiLogIn } from "react-icons/fi";
import Image from 'next/image'
import Link from 'next/link';

function NavBar() {
  return (
    <div className='fixed py-5 px-4 bg-white  z-50 w-screen'>
      <div className='max-w-7xl mx-auto items-center flex'>
        <div><Image src={logo} alt='#' className='w-32' /></div>
        <div className='flex-grow flex justify-center'>
          <NavLink active text="home" />
          <NavLink text="services" />
          <NavLink text="contact" />
        </div>
        <div className='flex gap-5'>
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
    </div>
  )
}

export default NavBar