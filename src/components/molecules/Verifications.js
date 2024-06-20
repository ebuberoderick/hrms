"use client"
import React, { useState } from 'react'
import Modal from '../organisms/Modal'
import AppInput from '../organisms/AppInput'
import serialize from '@/hooks/Serialize'
import { verifyBVN, verifyNIN, verifyPhone } from '@/services/authService'
import { useSelector } from 'react-redux'
import Image from 'next/image'

function Verifications() {
    const [modalVal, setShow] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const user = useSelector((state) => state?.User);

    const confimation = (f, l, m) => {
        const fullname = "charlse chukwunweike ezeah"
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
            if (fullname === element) {
                console.log("true");
            }
        }
    }

    const BioVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        // setErrMsg("")
        // if (data.status) {
        //     confimation(data.data.identity.data.firstname.toLowerCase(), data.data.identity.data.lastname.toLowerCase(), data.data.identity.data.middlename.toLowerCase());
        // } else {
        //     setErrMsg(data.message)
        // }
    }


    const EmpDelVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        // setErrMsg("")
        // if (data.status) {
        //     confimation(data.data.identity.data.firstname.toLowerCase(), data.data.identity.data.lastname.toLowerCase(), data.data.identity.data.middlename.toLowerCase());
        // } else {
        //     setErrMsg(data.message)
        // }
    }
    

    const BVNVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            confimation(data.data.identity.data.firstname.toLowerCase(), data.data.identity.data.lastname.toLowerCase(), data.data.identity.data.middlename.toLowerCase());
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
            confimation(data.data.identity.data.firstname.toLowerCase(), data.data.identity.data.lastname.toLowerCase(), data.data.identity.data.middlename.toLowerCase());
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
            <div onClick={() => setShow("BioData")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-20'>
                <div className='font-bold'>Verify Your Bio Data</div>
                <div className='text-xs'>You have to verify your Personal Informations</div>
            </div>
            <div onClick={() => setShow("EmpDelModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-30'>
                <div className='font-bold'>Verify Employment Details </div>
                <div className='text-xs'>You have to verify your Employment informations</div>
            </div>
            <div onClick={() => setShow("BankModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_green bg-opacity-10'>
                <div className='font-bold'>Verify Your Account Details</div>
                <div className='text-xs'>You have to verify your Bank account Information</div>
            </div>
            <div onClick={() => setShow("BVNModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-danger bg-opacity-10'>
                <div className='font-bold'>Verify Your BVN</div>
                <div className='text-xs'>You have to verify your BVN for prove of identification</div>
            </div>
            <div onClick={() => setShow("NINModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-10'>
                <div className='font-bold'>Verify Your NIN</div>
                <div className='text-xs'>You have to verify your NIN for prove of identification</div>
            </div>
            <div onClick={() => setShow("UpModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-black bg-opacity-10'>
                <div className='font-bold'>Other Date Uploads </div>
                <div className='text-xs'>You have to verify and upload Employment document</div>
            </div>





            <Modal closeModal={() => setShow("")} isOpen={modalVal === "BioData"} size={"2xl"}>
                <div className='space-y-4'>
                    <div className="inline-flex relative items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Bio Data Verification
                        </h2>
                    </div>
                    <div>
                        <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                            <Image id="output" className="w-full h-full rounded-full" />
                            <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                                <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                                <i className="ri-camera-line"></i>
                            </label>
                        </div>
                    </div>
                    <form onSubmit={(e) => BioVerification(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="telephone" type="number" required label="Phone Number" />
                            <AppInput name="email" type="email" required label="Email" />
                            <AppInput name="firstname" type="text" required label="First Name" />
                            <AppInput name="lastname" type="text" required label="Last Name" />
                            <AppInput name="middlename" type="text" label="Middle Name (Optional)" />
                            <AppInput name="employee_type" type="select" required label="Employee Type" options={[
                                { value: "Uniformed", label: "Uniformed" },
                                { value: "Formal", label: "Formal" }]} />
                            <AppInput name="staff_id" type="text" required label="Staff ID" />
                            <AppInput name="date_of_birth" type="date" required label="DOB" />
                            <AppInput name="gender" type="select" required label="Gender" options={[
                                { value: "Male", label: "Male" },
                                { value: "Female", label: "Female" },
                                { value: "Others", label: "Others" }]} />
                            <AppInput name="marital_status" type="select" required label="Marital Status" options={[
                                { value: "single", label: "Single" },
                                { value: "married", label: "Married" },
                                { value: "widow", label: "Widow" },
                                { value: "widower", label: "Widower" },
                                { value: "devioced", label: "Devioced" }]} />
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Bio Information</button>
                        </div>
                    </form>
                </div>
            </Modal>

            <Modal closeModal={() => setShow("")} isOpen={modalVal === "EmpDelModal"} size={"2xl"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Employment Details Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => EmpDelVerification(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="hire_date" type="date" required label="Hire Date" />
                            <AppInput name="grade" type="text" required label="Grade" />
                            <AppInput name="step" type="number" required label="Step" />
                            <AppInput name="assignment" type="select" required label="Assignment" options={[
                                { value: "Active", label: "Active" },
                                { value: "Inactive", label: "Inactive" }]} />
                            <AppInput name="designation" type="select" required label="Designation" options={[{ value: "Corporal", label: "Corporal" }]} />
                            <AppInput name="sub_organization" type="select" required label="Sub Organization" options={[{ value: "Enugu Command", label: "Enugu Command" }]} />
                            <AppInput name="category" type="select" required label="Category" options={[{ value: "Conposs", label: "Conposs" }]} />
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Employment Details</button>
                        </div>
                    </form>
                </div>
            </Modal>


            <Modal closeModal={() => setShow("")} isOpen={modalVal === "BankModal"} size={"sm"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Bank Account Details Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => BVNVerification(e)} className='space-y-4'>
                        <div className='space-y-3'>
                            <AppInput name="bank" type="select" required label="Bank" options={[{ value: "first bank", label: "First Bank" }]}/>
                            <AppInput name="account_number" type="number" required label="Account Number" />
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Bank Details</button>
                        </div>
                    </form>
                </div>
            </Modal>



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


            <Modal closeModal={() => setShow("")} isOpen={modalVal === "UpModal"} size={"2xl"}>
                <div>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-[500] text-hrms_green">
                            Employment Document Verification
                        </h2>
                    </div>
                    <form onSubmit={(e) => EmpDelVerification(e)} className='space-y-4'>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="personal_start_date" type="date" required label="Personal Start Date" />
                            <AppInput name="npfa_name" type="text" required label="NPFA Name" />
                            <AppInput name="pin_number" type="number" required label="Pin Number" />
                            <AppInput name="position" type="select" required label="POsition" options={[{ value: "positions", label: "Positions" }]} />
                            <AppInput name="legacy_id" type="number" required label="Lagacy ID"/>
                        </div>
                        <div>
                            <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Details</button>
                        </div>
                    </form>
                </div>
            </Modal>



        </div>
    )
}

export default Verifications