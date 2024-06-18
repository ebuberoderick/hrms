"use client"
import React, { useState } from 'react'
import Modal from '../organisms/Modal'
import AppInput from '../organisms/AppInput'
import serialize from '@/hooks/Serialize'
import { verifyBVN, verifyNIN, verifyPhone } from '@/services/authService'
import { useSelector } from 'react-redux'

function Verifications() {
    const [modalVal, setShow] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const user = useSelector((state) => state?.User);

    const confimation = (f,l,m) => {
        const fullname = "charlse chukwunweike ezeah"
        const array = [
            `${f+" "+l+" "+m}`,
            `${f+" "+m+" "+l}`,
            `${m+" "+f+" "+l}`,
            `${m+" "+l+" "+f}`,
            `${l+" "+m+" "+f}`,
            `${l+" "+f+" "+m}`,
            `${f+" "+l}`,
            `${f+" "+m}`,
            `${l+" "+f}`,
            `${l+" "+m}`,
            `${m+" "+l}`,
            `${m+" "+f}`
        ]

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (fullname === element) {
                console.log("true");
            }
        }
    }

    const BVNVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            confimation(data.data.identity.data.firstname.toLowerCase() , data.data.identity.data.lastname.toLowerCase() , data.data.identity.data.middlename.toLowerCase());
        } else {
            setErrMsg(data.message)
        }
    }
    const NINVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyNIN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            confimation(data.data.identity.data.firstname.toLowerCase() , data.data.identity.data.lastname.toLowerCase() , data.data.identity.data.middlename.toLowerCase());
        } else {
            setErrMsg(data.message)
        }
    }
    const PhoneVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyPhone(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            // confimation(data.data.identity.data.firstname + " " + data.data.identity.data.lastname + " " + data.data.identity.data.middlename);
        } else {
            setErrMsg(data.message)
        }
    }


    return (
        <div className='flex flex-wrap gap-3'>
            <div onClick={() => setShow("BVNModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_green bg-opacity-10'>
                <div className='font-bold'>Verify Your BVN</div>
                <div className='text-xs'>You have to verify your BVN for prove of identification</div>
            </div>
            <div onClick={() => setShow("NINModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-10'>
                <div className='font-bold'>Verify Your NIN</div>
                <div className='text-xs'>You have to verify your NIN for prove of identification</div>
            </div>
            {/* <div onClick={() => setShow("PhoneModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-10'>
                <div className='font-bold'>Verify Your Phone</div>
                <div className='text-xs'>You have to verify your Phone for prove of identification</div>
            </div> */}



            <Modal closeModal={() => setShow("")} isOpen={modalVal === "BVNModal"} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            BVN Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => BVNVerification(e)} className='space-y-4'>
                        <div className='space-y-1'>
                            <AppInput name="bvn" type="text" required label="Enter BVN" />
                            <div className='text-danger text-xs'>{errMsg}</div>
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify BVN</button>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal closeModal={() => setShow("")} isOpen={modalVal === "NINModal"} size={"sm"}>
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


            <Modal closeModal={() => setShow("")} isOpen={modalVal === "PhoneModal"} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Phone Number Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => PhoneVerification(e)} className='space-y-4'>
                        <div className='space-y-1'>
                            <AppInput name="phone" type="text" required label="Enter Phone Number" />
                            <div className='text-danger text-xs'>{errMsg}</div>
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Phone Number</button>
                        </div>
                    </form>
                </div>
            </Modal>



        </div>
    )
}

export default Verifications