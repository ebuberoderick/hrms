"use client"
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateBVN, verifyBVN } from '@/services/authService'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'

function BvnVerification({ user, Vbvn }) {
    const [Bvnform, setBvnForm] = useState(false)
    const [BVNData, setBVNData] = useState([])
    const [errMsg, setErrMsg] = useState("")
    const [proccessing, setProcessing] = useState(false)
    const [showModal, setShowModal] = useState(false)



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

    const BVNVerification = async (e) => {
        e.preventDefault();
        setProcessing(true)
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            const res = confimation(data?.data?.identity?.data?.firstname.toLowerCase(), data?.data?.identity?.data?.lastname.toLowerCase(), data?.data?.identity?.data?.middlename.toLowerCase());
            if (res) {
                setBVNData(data?.data?.identity?.data)
                setBvnForm(res)
            } else {
                setErrMsg(data?.data?.identity?.data?.lastname.toLowerCase() + " " + data?.data?.identity?.data?.firstname.toLowerCase() + " " + data?.data?.identity?.data?.middlename.toLowerCase());
            }
        } else {
            setErrMsg(data.message)
        }
        setProcessing(false)
    }

    const saveBVN = async (e) => {
        e.preventDefault()
        const formData = serialize(e.target);
        const { status, data } = await updateBVN(formData).catch(err => console.log(err))
    }


    return (
        <div className='flex-grow '>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-danger bg-opacity-10 relative'>
                {Vbvn && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Verify Your BVN</div>
                <div className='text-xs'>You have to verify your BVN for prove of identification</div>
            </div>

            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            BVN Verification
                        </h2>
                    </div>
                    {
                        Bvnform ? (
                            <form onSubmit={(e) => saveBVN(e)} className='space-y-4'>
                                <div className='space-y-1'>
                                    <div>
                                        <div>
                                            <div className='font-bold'>BVN</div>
                                            <div className='text-gray-400'>{BVNData.full_details.bvn}</div>
                                        </div>
                                        <div>
                                            <div className='font-bold'>Fullname</div>
                                            <div className='text-gray-400'>{BVNData.lastname} {BVNData.firstname} {BVNData.middlename}</div>
                                        </div>
                                    </div>
                                    <input  name="bvn" value={BVNData.full_details.bvn} type="hidden" />
                                </div>
                                <div className='text-danger text-xs'>{errMsg}</div>
                                <div className='flex gap-5'>
                                    <button disabled={proccessing} className={`bg-hrms_green flex-grow w-full text-white rounded-lg py-2 text-center cursor-pointer disabled:bg-opacity-25`}>{proccessing ? "Proccessing..." : "Comfirm"} </button>
                                    <div onClick={() => setBvnForm(false)} className="border border-hrms_green w-full flex-grow text-hrms_green rounded-lg py-2 text-center cursor-pointer">Back</div>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={(e) => BVNVerification(e)} className='space-y-4'>
                                <div className='space-y-1'>
                                    <AppInput name="bvn" type="text" required label="Enter BVN" />
                                    {
                                        errMsg.length > 0 && (
                                            <div>
                                                <div>BVN Name mismatch</div>
                                                <div className='text-danger capitalize text-xs'>{errMsg}</div>
                                                <div>Please recomfirm BVN</div>
                                            </div>
                                        )
                                    }

                                </div>
                                <div>
                                    <button disabled={proccessing} className={`bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer disabled:bg-opacity-25`}>{proccessing ? "Fetching Info..." : "Get BVN Info"} </button>
                                </div>
                            </form>
                        )
                    }


                </div>
            </Modal>
        </div>
    )
}

export default BvnVerification