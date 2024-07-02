import React from 'react'
import logo from "@assets/images/logoBright.png"
import Image from 'next/image'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="bg-black py-16 px-3 text-white">
            <div className='max-w-7xl text-xs sm:text-sm mx-auto'>
                <div className="">
                    <div className='flex-grow md:flex-grow-0'><Image src={logo} alt='#' className='w-32' /></div>
                </div>
                <div className=""></div>
                <div className="text-center space-y-24">
                    <div></div>
                    <div className='space-y-10'>
                        <div>
                            SOLUTIONS - BY - BUSINESS NEED
                        </div>
                        <div className='flex flex-wrap gap-4 items-center justify-center'>
                            <div>Cloud accounting software</div>
                            <div>ERP Software</div>
                            <div>Payroll software</div>
                            <div>HR solutions</div>
                            <div>CRM software</div>
                        </div>
                        <div className='flex flex-wrap gap-4 items-center justify-center'>
                            <div> &copy; Fiscusbook Group plc {year}</div>
                            <div>Accessibility</div>
                            <div>Legal</div>
                            <div>Privacy notice and cookies</div>
                            <div>Protection of personal information</div>
                            <div>Sitemap</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer