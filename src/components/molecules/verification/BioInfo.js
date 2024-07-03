import { addData } from '@/Store/reducers/UsersReducer'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { updateEmployeeInfo } from '@/services/authService'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsShieldCheck } from 'react-icons/bs'
import { useDispatch } from 'react-redux'

function BioInfo({ Vbio, user }) {
    const [showModal, setShowModal] = useState(false)
    const [errMsg, setErrorMsg] = useState("")
    const [proccessing,setProcessing] = useState(false)

    const perset_key = process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY
    const cloud_name = process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME

    const dispatch = useDispatch()

    const uploadImg = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData();
        formData.append("file", file)
        setProcessing(true)
        formData.append("upload_preset", perset_key)
        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then(res => {
            setImgUrl(res.data.url);
        }).catch(err => console.log(err))
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        setProcessing(false)
        reader.readAsDataURL(e.target.files[0]);
    }


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
            <div onClick={() => setShowModal(true)} className='w-full cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-20 relative'>
                {Vbio ? <div className='absolute right-0 top-0 py-1 gap-1 px-5 rounded-sm flex items-center bg-hrms_light_green text-hrms_green text-[9px]'>Verified</div>:<div className='absolute right-0 top-0 py-2 gap-1 px-5 rounded-sm flex items-center text-danger text-[9px]'>Unverified</div>}
                <div className='font-bold'>Verify Your Bio Data</div>
                <div className='text-xs'>You have to verify your Personal Informations</div>
            </div>

            <Modal closeModal={() => setShowModal(false)} isOpen={showModal} size={"2xl"}>
                <div className='space-y-4'>
                    <div className="inline-flex relative items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Bio Data Verification
                        </h2>
                    </div>
                    <div className='text-danger text-xs'>{errMsg}</div>
                    <div>
                        <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                            <Image id="output" className="w-full h-full rounded-full" />
                            <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                                <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                                <i className="ri-camera-line"></i>
                            </label>
                        </div>
                    </div>
                    <form onSubmit={(e) => updateInfo(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="telephone" type="number" defaultValue={user.employee.telephone} required label="Phone Number" />
                            <AppInput name="email" type="email" required value={user?.user?.email} label="Email" />
                            <AppInput name="firstname" type="text" defaultValue={user.employee.firstname} required label="First Name" />
                            <AppInput name="lastname" type="text" defaultValue={user.employee.lastname} required label="Last Name" />
                            <AppInput name="middlename" type="text" defaultValue={user.employee.middlename} label="Middle Name (Optional)" />
                            <AppInput defaultValue={user.employee.gender} name="employee_type" type="select" required label="Employee Type" options={[
                                { value: "Uniformed", label: "Uniformed" },
                                { value: "Formal", label: "Formal" }]} />
                            <AppInput name="staff_id" type="text" defaultValue={user.employee.staff_id} required label="Staff ID" />
                            <AppInput name="date_of_birth" defaultValue={user.employee.date_of_brith} type="date" required label="DOB" />
                            <AppInput defaultValue={user.employee.gender} name="gender" type="select" required label="Gender" options={[
                                { value: "Male", label: "Male" },
                                { value: "Female", label: "Female" },
                                { value: "Others", label: "Others" }]} />
                            <AppInput defaultValue={user.employee.marital_status} name="marital_status" type="select" required label="Marital Status" options={[
                                { value: "single", label: "Single" },
                                { value: "married", label: "Married" },
                                { value: "widow", label: "Widow" },
                                { value: "widower", label: "Widower" },
                                { value: "devioced", label: "Devioced" }]} />
                        </div>
                        <div>
                            <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-30 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Verifying Information": "Verify Bio Information"} </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default BioInfo