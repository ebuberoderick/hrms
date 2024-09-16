import React from 'react'
import logo from "@assets/images/logoBright.png"
import Image from 'next/image'
import { TbWorld } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import Frame from "@assets/images/Frame.png"
import { BsFacebook } from 'react-icons/bs'
import { RiInstagramFill } from 'react-icons/ri'
import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

function Footer() {
    const year = new Date().getFullYear()
    return (
        <div className="bg-black py-16 px-3 text-white">
            <div className="pb-24 px-4">
                <div className="h-96 overflow-hidden relative max-w-7xl mx-auto">
                    <Image src={Frame} className='h-full w-full' />
                    <div className="absolute gap-5 flex items-center flex-col justify-center top-0 right-0 w-full h-full bg-black bg-opacity-70">
                        <div className="text-4xl text-center">Get Started with FiscusBook Today!</div>
                        <div className="text-[10px] sm:text-sm max-w-3xl px-4 text-center">Request a free demo or contact our sales team to learn more about how FiscusBook can transform your financial management and empower your business for success.</div>
                        <div className="bg-hrms_lighter_green text-xs px-4 py-2 rounded-full text-black">Request A Free Demo</div>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl space-y-12 text-xs sm:text-sm mx-auto'>
                <div className="">
                    <div className='flex-grow md:flex-grow-0'><Image src={logo} alt='#' className='w-32' /></div>
                </div>
                <div className="grid md:grid-cols-3 gap-7">
                    <div className='font-bold space-y-4'>
                        <div>Small businesses</div>
                        <div>Medium businesses</div>
                        <div>Accountants</div>
                    </div>
                    <div className='font-bold space-y-4'>
                        <div>Developers and ISVs</div>
                        <div>Become a partner</div>
                        <div>Fiscusbook Marketplace</div>
                    </div>
                    <div className='space-y-0 flex text-2xl gap-3'>
                        <BsFacebook />
                        <RiInstagramFill />
                        <FaLinkedin />
                        <FaXTwitter />
                        <FaYoutube />
                    </div>
                    <div className='space-y-4'>
                        <div>COMPANY</div>
                        <div>Overview</div>
                        <div>Careers</div>
                        <div>Fiscusbook events</div>
                        <div>Social</div>
                        <div>About Fiscusbook</div>
                        <div>Fiscusbook Foundation</div>
                        <div>Investors</div>
                        <div>News</div>
                    </div>
                    <div className='space-y-4'>
                        <div>PRODUCTS</div>
                        <div>Accounting</div>
                        <div>Fiscusbook X3</div>
                        <div>Payroll software</div>
                        <div>People</div>
                        <div>See all products</div>
                        <div>Login</div>
                    </div>
                    <div className='space-y-4'>
                        <div>SUPPORT & TRAINING</div>
                        <div>Support</div>
                        <div>Contact us</div>
                        <div>Fiscusbook University</div>
                        <div>Training</div>
                        <div>Community</div>
                        <div>Fiscusbook Affiliate Programme</div>
                    </div>
                </div>
                <div className="text-center space-y-12 md:space-y-24">
                    <div className='flex items-center justify-center'>
                        <div className='divide-x-2 flex border-white'>
                            <div className='flex gap-2 items-center px-2'>
                                <TbWorld />
                                Nigeria
                            </div>
                            <div className='flex gap-2 items-center px-2'>
                                English
                                <IoIosArrowDown />
                            </div>
                        </div>
                    </div>
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