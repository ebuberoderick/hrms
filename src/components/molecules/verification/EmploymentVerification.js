"use client"
import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateEmployeeInfo } from '@/services/authService'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function EmploymentVerification({ Vemployment, user, setStep }) {
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
            setStep(4)
        } else {
            setErrorMsg(data.message)
        }
        setProcessing(false)
    }

    return (
        <div className='flex-grow '>
            <div className='space-y-4 bg-white px-4 py-7 rounded-lg shadow-md'>
                <div className="inline-flex relative bottom-4 items-start justify-between">
                    <h2 className="font-bold md:text-3xl text-hrms_green">
                        Employment Details Verification
                    </h2>
                </div>
                <div className='text-danger text-xs'>{errMsg}</div>
                <form onSubmit={(e) => updateInfo(e)} className='space-y-4'>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <AppInput defaultValue={user.employee.person_start_date} name="hire_date" type="date" label="Hire Date" />
                        <AppInput defaultValue={user.employee.grade} name="grade" type="text" required label="Grade" />
                        <AppInput defaultValue={user.employee.step} name="step" type="number" required label="Step" />
                        <AppInput defaultValue={user.employee.assignment} name="assignment" type="select" required label="Assignment" options={[
                            { value: "Active", label: "Active" },
                            { value: "Inactive", label: "Inactive" }]} />
                        <AppInput defaultValue={user.employee.designation} name="designation" type="select" required label="Designation" options={[{ value: "Corporal", label: "Corporal" }]} />
                        <AppInput defaultValue={user.employee.sub_organization} name="sub_organization" type="select" required label="Sub Organization" options={[{ value: "Enugu Command", label: "Enugu Command" },{ value: "Abuja Command", label: "Abuja Command" },{ value: "Lagos Command", label: "Lagos Command" },{ value: "Kaduna Command", label: "Kaduna Command" }]} />
                        <AppInput defaultValue={user.employee.category} name="category" type="select" required label="Category" options={[{ value: "Conposs", label: "Conposs" }]} />
                    </div>
                    <div>
                        <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-30 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Verifying Information" : "Save And Continue"} </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EmploymentVerification