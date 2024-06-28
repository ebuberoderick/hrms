"use client"
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'

function NinVerification({ Vnin, user }) {
    const [errMsg, setErrMsg] = useState("")
    const [showModal, setShowModal] = useState(false)
    return (
        <div className='flex-grow '>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-10 relative'>
                {Vnin && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Verify Your NIN</div>
                <div className='text-xs'>You have to verify your NIN for prove of identification</div>
            </div>


            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            NIN Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => NINVerification(e)} className='space-y-4'>
                        <div className='space-y-1'>
                            <AppInput name="nin" type="text" required label="Enter NIN" />
                            <div className='text-danger text-xs'>{errMsg}</div>
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify NIN</button>
                        </div>
                    </form>
                </div>
            </Modal>

        </div>
    )
}

export default NinVerification