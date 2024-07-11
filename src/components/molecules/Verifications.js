"use client"
import React, { useState } from 'react'
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
import VerifyAll from './verification/VerifyAll'
import { Session, SignOut } from '@/hooks/Auth'
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


function Verifications({ Vbvn, Vnin, VaccountNumber, Vothers, Vemployment, Vbio, setSave }) {
    const user = useSelector((state) => state?.User.value);
    const userAuth = useSelector((state) => state?.User);
    const isAuthenticated = Session(userAuth);
    const router = useRouter()
    const dispatch = useDispatch()
    const [step, setStep] = useState(0)
    const out = async () => {
        SignOut(dispatch)
        router.push("/auth/login");
    }
    if (isAuthenticated.status === "unauthenticated") {
        router.push("/auth/login");
    } else {
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
                                <div>Hello! <span className='font-bold'>{user?.employee?.firstname} {user?.employee?.lastname} {user?.employee?.middlename !== 0 && user?.employee?.middlename}</span> </div>
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
                                    <div onClick={() => setStep(1)} className={`${step === 1 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>1</div></div>
                                        <div>Click on verify your bio data to review and confirm is correct.</div>
                                    </div>
                                    <div onClick={() => setStep(2)} className={`${step === 2 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>2</div></div>
                                        <div>Click on verify your account details to verify your bank account information.</div>
                                    </div>
                                    <div onClick={() => setStep(3)} className={`${step === 3 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>3</div></div>
                                        <div>Click on verify your employment details to verify your information.</div>
                                    </div>
                                    <div onClick={() => setStep(4)} className={`${step === 4 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>4</div></div>
                                        <div>Click on verify your BVN to verify your BVN for prove of identification.</div>
                                    </div>
                                    <div onClick={() => setStep(5)} className={`${step === 5 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>5</div></div>
                                        <div>Click on verify your NIN to verify your NIN for prove of identification.</div>
                                    </div>
                                    <div onClick={() => setStep(6)} className={`${step === 6 && "bg-hrms_lighter_green"} rounded-l-md py-5 bg-opacity-40 flex`}>
                                        <div><div className='border-l-4 px-2 text-lg border-white'>6</div></div>
                                        <div>Click on verify other date uploads to verify and upload your employment documents.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='lg:col-span-2 py-7 space-y-2'>
                            {
                                step === 0 ? (
                                    <div className='grid sm:grid-cols-2 p-5 lg:p-0 flex-wrap gap-3'>
                                        <div onClick={() => setStep(1)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-20 relative'>
                                            {Vbio ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Verify Your Bio Data</div>
                                            <div className='text-xs'>You have to verify your Personal Informations</div>
                                        </div>
                                        <div onClick={() => setStep(2)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_green bg-opacity-10 relative'>
                                            {VaccountNumber ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Verify Your Account Details</div>
                                            <div className='text-xs'>You have to verify your Bank account Information</div>
                                        </div>
                                        <div onClick={() => setStep(3)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-30 relative'>
                                            {Vemployment ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Verify Employment Details </div>
                                            <div className='text-xs'>You have to verify your Employment informations</div>
                                        </div>
                                        <div onClick={() => setStep(4)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-danger bg-opacity-10 relative'>
                                            {Vbvn ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Verify Your BVN</div>
                                            <div className='text-xs'>You have to verify your BVN for prove of identification</div>
                                        </div>
                                        <div onClick={() => setStep(5)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-10 relative'>
                                            {Vnin ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Verify Your NIN</div>
                                            <div className='text-xs'>You have to verify your NIN for prove of identification</div>
                                        </div>
                                        <div onClick={() => setStep(6)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-black bg-opacity-10 relative'>
                                            {Vothers ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div> : <div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                                            <div className='font-bold'>Other Date Uploads </div>
                                            <div className='text-xs'>You have to verify and upload Employment document</div>
                                        </div>
                                    </div>
                                ) : step === 1 ? (
                                    <BioInfo setStep={e => setStep(e)} user={user} Vbio={Vbio} />
                                ) : step === 2 ? (
                                    <AccountVerification setStep={e => setStep(e)} user={user} VaccountNumber={VaccountNumber} />
                                ) : step === 3 ? (
                                    <EmploymentVerification setStep={e => setStep(e)} user={user} Vemployment={Vemployment} />
                                ) : step === 4 ? (
                                    <BvnVerification setStep={e => setStep(e)} user={user} Vbvn={Vbvn} />
                                ) : step === 5 ? (
                                    <NinVerification setStep={e => setStep(e)} user={user} Vnin={Vnin} />
                                ) : step === 6 ? (
                                    <OtherVerification setStep={e => setStep(e)} user={user} Vothers={Vothers} />
                                ) : (
                                    <VerifyAll setSave={() => setSave()} user={user} />
                                )
                            }
                            {
                                step > 0 && step < 7 && (
                                    <div className='flex items-center justify-end gap-5 p-5'>
                                        {step > 1 && <div className='bg-gray-300 flex items-center px-5 py-2 cursor-pointer' onClick={() => setStep(step - 1)}><MdArrowBackIos /> Back</div>}
                                        {step < 6 && <div className='bg-gray-300 flex items-center px-5 py-2 cursor-pointer' onClick={() => setStep(step + 1)}>Next <MdArrowForwardIos /></div>}
                                    </div>
                                )
                            }

                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default Verifications