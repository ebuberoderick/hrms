"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateNIN, verifyNIN } from '@/services/authService'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function NinVerification({ Vnin, user }) {
    const [Ninform, setNinForm] = useState(false)
    const [NINData, setNINData] = useState([])
    const [proccessing, setProcessing] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const [showModal, setShowModal] = useState(false)

    const dispatch = useDispatch()

    const confimation = (f, l, m) => {
        const firstname = user.employee.firstname === null ? "" : user.employee.firstname
        const lastname = user.employee.lastname === null ? "" : user.employee.lastname
        const middlename = user.employee.middlename === null ? "" : user.employee.middlename
        const fullname = firstname + " " + lastname + " " + middlename
        const array = [
            `${f + " " + l + " " + m}`,
            `${f + " " + m + " " + l}`,
            `${m + " " + f + " " + l}`,
            `${m + " " + l + " " + f}`,
            `${l + " " + m + " " + f}`,
            `${l + " " + f + " " + m}`,
            `${f + " " + l}`,
            `${f + " " + m}`,
            `${l + " " + f}`,
            `${l + " " + m}`,
            `${m + " " + l}`,
            `${m + " " + f}`
        ]

        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (fullname.toLowerCase() === element.toLowerCase()) {
                return true
            }
        }
    }


    const NINVerification = async (e) => {
        e.preventDefault();
        setProcessing(true)
        const formData = serialize(e.target);
        const { status, data } = await verifyNIN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            const res = confimation(data?.data?.identity?.data?.firstname.toLowerCase(), data?.data?.identity?.data?.lastname.toLowerCase(), data?.data?.identity?.data?.middlename.toLowerCase());
            if (res) {
                setNINData(data?.data?.identity?.data)
                setNinForm(res)
            } else {
                setErrMsg(data?.data?.identity?.data?.lastname.toLowerCase() + " " + data?.data?.identity?.data?.firstname.toLowerCase() + " " + data?.data?.identity?.data?.middlename.toLowerCase());
            }
        } else {
            setErrMsg(data.message)
        }
        setProcessing(false)
    }



    const saveNIN = async (e) => {
        e.preventDefault()
        const formData = serialize(e.target);
        setProcessing(true)
        const { status, data } = await updateNIN(formData).catch(err => console.log(err))
        if (status) {
            let x = {}
            x.user = data.data.user
            x.employee = data.data.user.employee
            x.bearer_token = user.bearer_token
            dispatch(addData(x));
            setShowModal(false)
        }
        setProcessing(false)
    }



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
                    {
                        Ninform ? (
                            <form onSubmit={(e) => saveNIN(e)} className='space-y-4'>
                                <div className='space-y-1'>
                                    <div>
                                        <div>
                                            <div className='font-bold'>NIN</div>
                                            <div className='text-gray-400'>{NINData.full_details.nin}</div>
                                        </div>
                                        <div>
                                            <div className='font-bold'>Fullname</div>
                                            <div className='text-gray-400 uppercase'>{NINData.lastname} {NINData.firstname} {NINData.middlename}</div>
                                        </div>
                                    </div>
                                    <input name="nin" value={NINData.full_details.nin} type="hidden" />
                                </div>
                                <div className='flex gap-5'>
                                    <button disabled={proccessing} className={`bg-hrms_green flex-grow w-full text-white rounded-lg py-2 text-center cursor-pointer disabled:bg-opacity-25`}>{proccessing ? "Proccessing..." : "Comfirm"} </button>
                                    <div onClick={() => setNinForm(false)} className="border border-hrms_green w-full flex-grow text-hrms_green rounded-lg py-2 text-center cursor-pointer">Back</div>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={(e) => NINVerification(e)} className='space-y-4'>
                                <div className='space-y-1'>
                                    <AppInput name="nin" type="text" required label="Enter NIN" />
                                    <div className='text-danger text-xs'>{errMsg}</div>
                                </div>
                                <div>
                                    <button disabled={proccessing} className={`bg-hrms_green flex-grow w-full text-white rounded-lg py-2 text-center cursor-pointer disabled:bg-opacity-25`}>{proccessing ? "Proccessing..." : "Verify NIN"} </button>
                                </div>
                            </form>
                        )
                    }

                </div>
            </Modal >

        </div >
    )
}

export default NinVerification