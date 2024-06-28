"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateEmployeeInfo } from '@/services/authService'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function OtherVerification({ Vothers, user }) {
    const [showModal, setShowModal] = useState(false)
    const [errMsg, setErrorMsg] = useState("")
    const [proccessing, setProcessing] = useState(false)
    const dispatch = useDispatch()

    const updateInfo = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        setProcessing(true)
        const { status, data } = await updateEmployeeInfo(formData).catch(err => console.log(err))
        if (status) {
            let x = {}
            x.user = data.data.user
            x.employee = data.data.user.employee
            x.bearer_token = user.bearer_token
            dispatch(addData(x));
            setShowModal(false)
        } else {
            setErrorMsg(data.message)
        }
        setProcessing(false)
    }

    return (
        <div className='flex-grow'>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-black bg-opacity-10 relative'>
                {Vothers && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Other Date Uploads </div>
                <div className='text-xs'>You have to verify and upload Employment document</div>
            </div>

            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"2xl"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Employment Document Verification
                        </h2>
                    </div>
                    <div className='text-danger text-xs'>{errMsg}</div>
                    <form onSubmit={(e) => updateInfo(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput defaultValue={user.employee.person_start_date} name="personal_start_date" type="date" required label="Personal Start Date" />
                            <AppInput defaultValue={user.employee.npfa_name} name="npfa_name" type="text" required label="NPFA Name" />
                            <AppInput defaultValue={user.employee.pin_number} name="pin_number" type="number" required label="Pin Number" />
                            <AppInput defaultValue={user.employee.position} name="position" type="select" required label="Position" options={[{ value: "positions", label: "Positions" }]} />
                            <AppInput defaultValue={user.employee.legacy_id} name="legacy_id" type="number" required label="Lagacy ID" />
                            {/* <AppInput defaultValue={user.user.next_of_kin_contact} name="next_of_kin_contact" type="number" required label="Next Of kin Contact" />
                            <AppInput defaultValue={user.user.next_of_kin_name} name="next_of_kin_name" type="text" required label="Next Of kin Name" />
                            <AppInput defaultValue={user.user.next_of_kin_relationship} name="next_of_kin_relationship" type="text" required label="Next Of kin Relationship" /> */}
                        </div>
                        <div>
                            <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-30 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Verifying Information" : "Verify Details"} </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default OtherVerification