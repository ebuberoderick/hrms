import Image from 'next/image'
import logo from "@assets/images/authLogo.png";
import React from 'react'

function Perloader() {
  return (
    <div className='flex items-center justify-center top-0 right-0 z-50 w-screen h-screen fixed'>
      <div><Image src={logo} className="h-9 w-32" alt="Logo" /></div>
      <div>
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* <div className="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div> */}
      </div>
    </div>
  )
}

export default Perloader