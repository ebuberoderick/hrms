import Image from 'next/image'
import logo from "@assets/images/authLogo.png";
import React from 'react'

function Perloader() {
  return (
    <div className='flex flex-col items-center justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
        
        <div><Image src={logo} className="h-9 w-52" alt="Logo" /></div>
        <div>Loading...</div>
    </div>
  )
}

export default Perloader