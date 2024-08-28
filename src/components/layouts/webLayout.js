import React from 'react'
import NavBar from '../molecules/NavBar'
import { IoPricetagOutline } from 'react-icons/io5'
import { SlArrowRight } from 'react-icons/sl'
import Footer from '../molecules/Footer'

function WebLayout({ children }) {
    return (
        <>
            <div className="bg-hrms_light_green text-black  p-3 text-xs sm:text-base flex items-center justify-center gap-3 ">
                <div className="text-xl"><IoPricetagOutline /></div>
                <div className="underline">Get started with 30 days free on Fiscusbook</div>
                <div className=""><SlArrowRight /></div>
            </div>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default WebLayout