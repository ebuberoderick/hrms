"use client"
import React from 'react'
import NavBar from '../molecules/NavBar'
import { IoPricetagOutline } from 'react-icons/io5'
import { SlArrowRight } from 'react-icons/sl'
import Footer from '../molecules/Footer'
import { IoMdArrowBack } from 'react-icons/io'
import { useRouter } from 'next/navigation'

export const runtime = "edge";

function WebLayout({ children, active }) {
    const router = useRouter()
    return (
        <>
            <div className="bg-hrms_light_green text-black  p-3 text-xs sm:text-base flex items-center justify-center gap-3 ">
                <div className="text-xl"><IoPricetagOutline /></div>
                <div className="underline">Get started with 30 days free on Fiscusbook</div>
                <div className=""><SlArrowRight /></div>
            </div>
            <div className='bg-black relative'>
                <div className="h-[600px] w-[600px] top-12 rounded-full -right-36 absolute bg-hrms_dark_green"></div>
                <div className="h-[600px] w-[600px] top-96  rounded-full -left-36 absolute bg-hrms_dark_green"></div>
                <div className='bg-black backdrop-blur-3xl bg-opacity-85 relative z-10'>
                    <NavBar active={active} />
                    {
                        active !== "home" && (
                            <div className='max-w-7xl p-4 space-y-12 text-xs sm:text-sm mx-auto flex'>
                                <div onClick={() => router.back()} className='flex items-center cursor-pointer gap-3 border px-5 py-3 rounded-3xl border-gray-400 text-gray-400'><IoMdArrowBack /> Go Back</div>
                            </div>
                        )
                    }
                    {children}
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default WebLayout