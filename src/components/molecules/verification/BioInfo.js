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
import { NigeriaStates } from '../../../hooks/Nigeria'

function BioInfo({ Vbio, user, setStep }) {
    const [showModal, setShowModal] = useState(false)
    const [errMsg, setErrorMsg] = useState("")
    const [imgUrl, setImgUrl] = useState(user.user.avatar)
    const [proccessing, setProcessing] = useState(false)

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
        formData.telephone = `+${formData.telephone}`
        formData.image = imgUrl
        formData.middlename === 0 ? formData.middlename = "" : formData.middlename = formData.middlename
        formData.firstname === 0 ? formData.firstname = "" : formData.firstname = formData.firstname
        formData.lastname === 0 ? formData.lastname = "" : formData.lastname = formData.lastname
        const { status, data } = await updateEmployeeInfo(formData).catch(err => console.log(err))
        if (status) {
            let x = {}
            x.user = data.data.user
            x.employee = data.data.user.employee
            x.bearer_token = user.bearer_token
            dispatch(addData(x));
            setStep(2)
        } else {
            setErrorMsg(data.message)
        }
        setProcessing(false)
    }
    var DOB = user?.employee.date_of_birth

    return (
        <div className='flex-grow'>

            <div id='' className='space-y-4 bg-white px-4 py-7 rounded-lg shadow-md'>
                <div className="inline-flex relative items-start justify-between">
                    <h2 className="font-bold md:text-3xl text-hrms_green">
                        Bio Data Verification
                    </h2>
                </div>
                <div className='text-danger text-xs'>{errMsg}</div>
                <div>
                    <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                        <img id="output" src={user.user.avatar} className="w-full h-full rounded-full" />
                        <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                            <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                            <i className="ri-camera-line"></i>
                        </label>
                    </div>
                </div>
                <form onSubmit={(e) => updateInfo(e)} className='space-y-4'>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type='hidden' name='id' value={user.user.id} />
                        <AppInput name="firstname" type="text" defaultValue={user.employee.firstname} required label="First Name" />
                        <AppInput name="lastname" type="text" defaultValue={user.employee.lastname} required label="Last Name" />
                        <AppInput name="middlename" type="text" defaultValue={user.employee.middlename} label="Middle Name (Optional)" />
                        <AppInput name="telephone" type="number" defaultValue={Number(user.employee.telephone.split("+")[1])} required label="Phone Number" />
                        <AppInput name="date_of_birth" defaultValue={DOB} type="date" required label="DOB" />
                        <AppInput name="email" type="email" required value={user?.user?.email} label="Email" />
                        <AppInput name="staff_id" type="text" defaultValue={user.employee.staff_id} required label="Staff ID" />
                        <AppInput defaultValue={user.employee.marital_status} name="marital_status" type="select" required label="Marital Status" options={[
                            { value: "single", label: "Single" },
                            { value: "married", label: "Married" },
                            { value: "widow", label: "Widow" },
                            { value: "widower", label: "Widower" },
                            { value: "divorced", label: "Divorced" }]} />
                        <AppInput defaultValue={user.employee.gender} name="gender" type="select" required label="Gender" options={[
                            { value: "Male", label: "Male" },
                            { value: "Female", label: "Female" }]} />
                        <AppInput defaultValue={user.user.state_of_origin} name="state_of_origin" type="select" required label="State Of Origin" options={[...NigeriaStates]} />
                    </div>
                    <div>
                        <button disabled={proccessing} className="bg-hrms_green disabled:bg-opacity-30 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessing ? "Verifying Information" : "Save And Continue"} </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default BioInfo
