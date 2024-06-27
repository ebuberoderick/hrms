"use client"
import React, { useEffect, useState } from 'react'
import Modal from '../organisms/Modal'
import AppInput from '../organisms/AppInput'
import serialize from '@/hooks/Serialize'
import { BsShieldCheck } from "react-icons/bs";
import { fetchBanks, updateEmployeeInfo, verifyBVN, verifyBanksDetails, verifyNIN, verifyPhone } from '@/services/authService'
import { useSelector } from 'react-redux'
import Image from 'next/image'
import axios from 'axios'

function Verifications({ Vbvn, Vnin, VaccountNumber, Vaddress, Vothers, Vemployment, Vbio, Vkin }) {
    const [modalVal, setShow] = useState("")
    const [errMsg, setErrMsg] = useState("")
    const [imgUrl, setImgUrl] = useState("")
    const [bankList, setBankList] = useState([])
    const [Bvnform, setBvnForm] = useState(false)
    const [bvnData, setbvnData] = useState(false)
    const [proccessing, setProcessing] = useState(false)
    const user = useSelector((state) => state?.User.value);

    const fetchAllBanks = async () => {
        const { status, data } = await fetchBanks().catch(err => console.log(err))
        // { value: "Corporation", label: "Corporation" },
        const arr = []
        await data.data.forEach(element => {
            arr.push({ value: element.code, label: element.name })
        });
        setBankList(arr);
    }

    const perset_key = process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY
    const cloud_name = process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME

    const uploadImg = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData();
        formData.append("file", file)
        formData.append("upload_preset", perset_key)
        await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then(res => {
            setImgUrl(res.data.url);
        }).catch(err => console.log(err))
        var reader = new FileReader();
        reader.onload = function () {
            var output = document.getElementById('output');
            output.src = reader.result;
        };
        reader.readAsDataURL(e.target.files[0]);
    }

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

        console.log(fullname);
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            if (fullname === element) {
                return true
            }
        }
    }




    const verifyBankDetails = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyBanksDetails(formData).catch(err => console.log(err))

    }



    const BioVerification = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await updateEmployeeInfo(formData).catch(err => console.log(err))
        if (status) {

        } else {
            setErrMsg(data.message)
        }
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
        setProcessing(true)
        const formData = serialize(e.target);
        const { status, data } = await verifyBVN(formData).catch(err => console.log(err))
        setErrMsg("")
        if (data.status) {
            const res = confimation(data?.data?.identity?.data?.firstname.toLowerCase(), data?.data?.identity?.data?.lastname.toLowerCase(), data?.data?.identity?.data?.middlename.toLowerCase());
            if (res) {
                setBvnForm(res)
            } else {
                setErrMsg(data?.data?.identity?.data?.lastname.toLowerCase() + " " + data?.data?.identity?.data?.firstname.toLowerCase() + " " + data?.data?.identity?.data?.middlename.toLowerCase());
            }

        } else {
            setErrMsg(data.message)
        }
        setProcessing(false)
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


    useEffect(() => {
        fetchAllBanks()
    }, [])


    return (
        <div className='space-y-2'>
            <div className='text-sm'>
                Complete all Verifications Stages before you can perform any action on your dashboard
            </div>
            <div className='flex flex-wrap gap-3'>
                <div onClick={() => setShow("BioData")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_blue bg-opacity-20 relative'>
                    {Vbio && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                    <div className='font-bold'>Verify Your Bio Data</div>
                    <div className='text-xs'>You have to verify your Personal Informations</div>
                </div>
                <div onClick={() => setShow("EmpDelModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-30 relative'>
                    {Vemployment && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                    <div className='font-bold'>Verify Employment Details </div>
                    <div className='text-xs'>You have to verify your Employment informations</div>
                </div>
                <div onClick={() => setShow("BankModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_green bg-opacity-10 relative'>
                    {VaccountNumber && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                    <div className='font-bold'>Verify Your Account Details</div>
                    <div className='text-xs'>You have to verify your Bank account Information</div>
                </div>
                <div onClick={() => setShow("BVNModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-danger bg-opacity-10 relative'>
                    {Vbvn && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                    <div className='font-bold'>Verify Your BVN</div>
                    <div className='text-xs'>You have to verify your BVN for prove of identification</div>
                </div>
                <div onClick={() => setShow("NINModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-hrms_yellow bg-opacity-10 relative'>
                    {Vnin && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
                    <div className='font-bold'>Verify Your NIN</div>
                    <div className='text-xs'>You have to verify your NIN for prove of identification</div>
                </div>
                <div onClick={() => setShow("UpModal")} className='flex-grow cursor-pointer px-4 py-8 rounded-md bg-black bg-opacity-10 relative'>
                    {Vothers && <div className='absolute right-4 top-4 py-1 gap-1 px-5 rounded-md flex items-center bg-hrms_green bg-opacity-15 border-hrms_green border text-hrms_green text-[9px]'><BsShieldCheck /> Verified</div>}
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
                        <form onSubmit={(e) => BioVerification(e)} className='space-y-4'>
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
                        <form onSubmit={(e) => verifyBankDetails(e)} className='space-y-4'>
                            <div className='space-y-3'>
                                <AppInput name="bank_code" type="select" required label="Bank" options={[...bankList]} />
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
                        {
                            Bvnform ? (
                                <form onSubmit={(e) => BVNVerification(e)} className='space-y-4'>
                                    <div className='space-y-1'>
                                        <AppInput name="bvn" value={bvnData} type="text" required label="Enter BVN" />
                                    </div>
                                    <div className='text-danger text-xs'>{errMsg}</div>
                                    <div>
                                        <button disabled={proccessing} className={`bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer disabled:bg-opacity-25`}>{proccessing ? "Proccessing..." : "Comfirm BVN Details"} </button>
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
                                <AppInput name="position" type="select" required label="Position" options={[{ value: "positions", label: "Positions" }]} />
                                <AppInput name="legacy_id" type="number" required label="Lagacy ID" />
                            </div>
                            <div>
                                <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Verify Details</button>
                            </div>
                        </form>
                    </div>
                </Modal>



            </div>
        </div>
    )
}

export default Verifications