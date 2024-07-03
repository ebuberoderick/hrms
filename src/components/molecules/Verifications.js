"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BioInfo from './verification/BioInfo'
import EmploymentVerification from './verification/EmploymentVerification'
import AccountVerification from './verification/AccountVerification'
import BvnVerification from './verification/BvnVerification'
import NinVerification from './verification/NinVerification'
import OtherVerification from './verification/OtherVerification'
import coat_of_arms from "@assets/images/Coat_of_arms.png"
import Image from 'next/image'
import { CiLogout } from "react-icons/ci";
import logo from "@assets/images/authLogo.png";
import avatar from "@assets/images/avatar/Leslie_Image.png";
import { FiHelpCircle } from "react-icons/fi";
import { useRouter } from 'next/navigation'


function Verifications({ Vbvn, Vnin, VaccountNumber, Vothers, Vemployment, Vbio }) {
    const user = useSelector((state) => state?.User.value);
    const router = useRouter()
    const out = async () => {
        router.push("/auth/login");
    }
    return (
        <div className='min-h-screen flex-col flex w-screen bg-hrms_light_green bg-opacity-20'>
            <div className='bg-white px-4'>
                <div className="max-w-7xl mx-auto w-screen top-0 left-0 z-50 flex items-center  py-3 md:px-5">
                    <div className="flex flex-grow">
                        <div><Image src={logo} className="h-9 w-32" alt="Logo" /></div>
                    </div>
                    <div className="flex">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <i className="ri-notification-3-line text-lg"></i>
                                <div className="absolute bg-danger w-2 h-2 top-1 right-0 border-2 border-white rounded-full"></div>
                            </div>
                            <FiHelpCircle className="text-lg cursor-pointer" />
                            <div className="flex cursor-pointer items-center gap-1 text-sm">
                                <div className="w-7 h-7 rounded-full bg-gray-200">
                                    <Image src={avatar} alt="Michael Michael" />
                                </div>
                                {/* <div className="hidden sm:block">{role}</div> */}
                                <i className="ri-arrow-down-s-line hidden sm:block relative top-[1px]"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-hrms_light_green'>
                <div className='max-w-7xl p-5 gap-5 flex-grow h-full mx-auto sm:grid grid-cols-3'>
                    <div className='flex flex-col'>
                        <div className='flex-grow flex justify-center h-full'>
                            <Image src={coat_of_arms} className='w-28' />
                        </div>
                    </div>
                    <div className='sm:col-span-2 gap-x-24 md:flex space-y-2'>
                        <div className='flex-grow space-y-3 text-hrms_dark_green'>
                            <div>Hello! <span className='font-bold'>John Miles</span> </div>
                            <div className='text-sm'>Welcome to HRMS solution, you will be required to verify your personal ID details before you will be allowed to proceed.</div>
                        </div>
                        <div>
                            <div onClick={() => out()} className='inline-flex cursor-pointer gap-3 text-white items-center bg-hrms_green px-7 py-3 rounded-md'>
                                <CiLogout />
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-grow flex flex-col sm:px-4'>
                <div className='max-w-7xl gap-5 flex-grow h-full mx-auto lg:grid grid-cols-3'>
                    <div className='flex flex-col'>
                        <div className='bg-hrms_green text-white space-y-9 flex-grow h-full'>
                            <div className='font-bold text-3xl p-7 pb-0'>Steps To Verify Your Personal ID.</div>
                            <div className="divition"></div>
                            <div className='pl-12 space-y-3 pb-5 *:pr-4'>
                                <div className='bg-hrms_lighter_green rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>1</div></div>
                                    <div>Click on verify your bio data to review and confirm is correct.</div>
                                </div>
                                <div className='rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>2</div></div>
                                    <div>Click on verify your account details to verify your bank account information.</div>
                                </div>
                                <div className='rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>3</div></div>
                                    <div>Click on verify your employment details to verify your information.</div>
                                </div>
                                <div className='rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>4</div></div>
                                    <div>Click on verify your BVN to verify your BVN for prove of identification.</div>
                                </div>
                                <div className='rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>5</div></div>
                                    <div>Click on verify your NIN to verify your NIN for prove of identification.</div>
                                </div>
                                <div className='rounded-l-md py-5 bg-opacity-40 flex'>
                                    <div><div className='border-l-4 px-2 text-lg border-white'>6</div></div>
                                    <div>Click on verify other date uploads to verify and upload your employment documents.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:col-span-2 py-7 space-y-2'>
                        <div className='flex p-5 lg:p-0 flex-wrap gap-3'>
                            <BioInfo user={user} Vbio={Vbio} />
                            <EmploymentVerification user={user} Vemployment={Vemployment} />
                            <AccountVerification user={user} VaccountNumber={VaccountNumber} />
                            <BvnVerification user={user} Vbvn={Vbvn} />
                            <NinVerification user={user} Vnin={Vnin} />
                            <OtherVerification user={user} Vothers={Vothers} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Verifications