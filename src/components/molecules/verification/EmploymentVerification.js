"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateEmployeeInfo } from '@/services/authService'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function EmploymentVerification({ Vemployment, user }) {
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
        <div className='flex-grow '>
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-30 relative'>
                {Vemployment && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                <div className='font-bold'>Verify Employment Details </div>
                <div className='text-xs'>You have to verify your Employment informations</div>
            </div>
            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"2xl"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Employment Details Verification
                        </h2>
                    </div>
                    <div className='text-danger text-xs'>{errMsg}</div>
                    <form onSubmit={(e) => updateInfo(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput defaultValue={user.employee.person_start_date} name="hire_date" type="date" label="Hire Date" />
                            <AppInput defaultValue={user.employee.grade} name="grade" type="text" required label="Grade" />
                            <AppInput defaultValue={user.employee.step} name="step" type="number" required label="Step" />
                            <AppInput defaultValue={user.employee.assignment} name="assignment" type="select" required label="Assignment" options={[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" }]} />
                            <AppInput defaultValue={user.employee.designation} name="designation" type="select" required label="Designation" options={[{ value: "Corporal", label: "Corporal" }]} />
                            <AppInput defaultValue={user.employee.sub_organization} name="sub_organization" type="select" required label="Sub Organization" options={[{ value: "Enugu Command", label: "Enugu Command" }]} />
                            <AppInput defaultValue={user.employee.category} name="category" type="select" required label="Category" options={[{ value: "Conposs", label: "Conposs" }]} />
                        </div>
                        <div>
                            <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-30 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Verifying Information" : "Verify Employment Details"} </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default EmploymentVerification