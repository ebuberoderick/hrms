"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import { NigeriaStates } from '@/hooks/Nigeria'
import { fetchAllEmployeeData, fetchAllPendingVerification } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function Page() {
    const [active, setActive] = useState("all")
    const [pending, setPending] = useState([])
    const [emp, setEmp] = useState({})
    const [empData, setEmpData] = useState({})
    const [isLoading, setIsLoading] = useState([])
    const [DOB, setDOB] = useState("")
    const [SD, setSD] = useState("")



    const fetchEmployees = async () => {
        const { status, data } = await fetchAllPendingVerification().catch(err => console.log(err))
        if (status) {
            console.log(data);
            setPending(data.data[0])
        }
        setIsLoading(false)
    }

    const fetchEmployeeData = async () => {
        const { status, data } = await fetchAllEmployeeData({ employee_id: emp.employee_id }).catch(err => console.log(err))
        if (status) {
            console.log(data.data[0]);
            console.log(emp);
            setEmpData(data.data[0]);
            // setDOB
            // setSD
        }
        setIsLoading(false)
    }


    useEffect(() => {
        fetchEmployees()
    }, [])

    useEffect(() => {
        fetchEmployeeData()
    }, [emp])



    return (
        <AppLayout title={"Notifications"}>
            <div className="grid grid-cols-4 gap-4">
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <div onClick={() => setActive("all")} className={`${active === "all" ? "bg-hrms_dark_green text-white" : "text-hrms_dark_green"} cursor-pointer px-3 py-1`}>All ({pending.length})</div>
                        <div onClick={() => setActive("new")} className={`${active === "new" ? "bg-hrms_dark_green text-white" : "text-hrms_dark_green"} cursor-pointer px-3 py-1`}>New (5)</div>
                    </div>
                    <div className="space-y-3">
                        {
                            pending.map((list, i) => (
                                <div onClick={() => setEmp(list)} key={i} className={`shadow-lg ${emp.id === list.id && "bg-hrms_green bg-opacity-20"} flex items-center hover:bg-hrms_lighter_green hover:bg-opacity-10 cursor-pointer gap-2 p-3 border border-gray-100`}>
                                    <div className="">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200"></div>
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <div className="font-bold leading-4">User onboarding verification</div>
                                        <div className="text-xs text-gray-400">Please kindliy review...</div>
                                    </div>
                                </div>
                            ))
                        }
                        {
                            isLoading && ["", "", "", "", ""].map((list, i) => (
                                <div key={i} className="shadow-lg flex items-center gap-2 p-3 border border-gray-100">
                                    <div className="">
                                        <div className="w-10 h-10 rounded-full overflow-hidden preload"></div>
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <div className="text-xs preload py-2"></div>
                                        <div className="text-xs preload py-2 w-3/5"></div>
                                        <div className="text-xs preload py-1 w-2/3"></div>
                                    </div>
                                    {/* <div className=""><IoIosCloseCircleOutline /></div> */}
                                </div>
                            ))
                        }
                    </div>
                </div>
                {
                    Object.keys(empData).length > 0 && (
                        <div className="col-span-3 space-y-10">
                            <div className='space-y-4'>
                                <div className="inline-flex relative items-start justify-between">
                                    <h2 className="font-bold md:text-3xl text-hrms_green">
                                        Bio Data Verification
                                    </h2>
                                </div>
                                <div>
                                    <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                                        <img src={empData?.user?.avatar} alt="" id="output" className="w-full h-full rounded-full" />
                                        <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                                            <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                                            <i className="ri-camera-line"></i>
                                        </label>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <input type='hidden' name='id' value={empData?.user?.id} />
                                        <AppInput name="firstname" type="text" value={empData?.firstname} required label="First Name" />
                                        <AppInput name="lastname" type="text" value={empData?.lastname} required label="Last Name" />
                                        <AppInput name="middlename" type="text" value={empData?.middlename} label="Middle Name (Optional)" />
                                        <AppInput name="telephone" type="number" value={Number(empData.telephone.split("+")[1])} required label="Phone Number" />
                                        <AppInput name="date_of_birth" value={DOB} type="date" required label="DOB" />
                                        {/* <AppInput name="email" type="email" required value={emp?.user?.email} label="Email" /> */}
                                        <AppInput name="staff_id" type="text" value={empData?.staff_id} required label="Staff ID" />
                                        <AppInput value={empData?.marital_status} name="marital_status" type="text" required label="Marital Status" options={[
                                            { value: "single", label: "Single" },
                                            { value: "married", label: "Married" },
                                            { value: "widow", label: "Widow" },
                                            { value: "widower", label: "Widower" },
                                            { value: "divorced", label: "Divorced" }]} />
                                        <AppInput value={empData?.gender} name="gender" type="text" required label="Gender" options={[
                                            { value: "Male", label: "Male" },
                                            { value: "Female", label: "Female" },
                                            { value: "Others", label: "Others" }]} />
                                        <AppInput defaultValue={empData?.state_of_origin} name="state_of_origin" type="select" required label="State Of Origin" options={[...NigeriaStates]} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex relative bottom-4 items-start justify-between">
                                    <h2 className="font-bold md:text-3xl text-hrms_green">
                                        Bank Account Details Verification
                                    </h2>
                                </div>
                                <div className='space-y-4'>
                                    <div className='space-y-3'>
                                        <AppInput name="bank_code" value={empData?.bank[0]?.bank_name} type="text" required label="Bank" />
                                        <AppInput name="account_number" value={empData?.bank[0]?.account_number} type="number" required label="Account Number" />
                                    </div>
                                </div>
                            </div>
                            <div className='max-w-lg'>
                                <div className="inline-flex relative bottom-4 items-start justify-between">
                                    <h2 className="font-bold md:text-3xl text-hrms_green">
                                        BVN Verification
                                    </h2>
                                </div>
                                <div className='space-y-4'>
                                    <div className='space-y-1'>
                                        <AppInput name="bvn" value={empData?.bvn} type="text" required label="Enter BVN" />
                                    </div>
                                </div>
                            </div>

                            <div className='max-w-lg'>
                                <div className="inline-flex relative bottom-4 items-start justify-between">
                                    <h2 className="font-bold md:text-3xl text-hrms_green">
                                        NIN Verification
                                    </h2>
                                </div>
                                <div className='space-y-4'>
                                    <div className='space-y-1'>
                                        <AppInput name="nin" value={empData?.user?.nin} type="text" required label="Enter NIN" />
                                    </div>
                                </div>
                            </div>

                            <div className=''>
                                <div className="inline-flex relative bottom-4 items-start justify-between">
                                    <h2 className="font-bold md:text-3xl text-hrms_green">
                                        Employment Document Verification
                                    </h2>
                                </div>
                                <div className='space-y-4'>
                                    <div className="grid gap-4">
                                        <AppInput value={SD} name="personal_start_date" type="date" required label="Start Date" />
                                        <AppInput value={empData?.position} name="position" type="text" required label="Position" options={[{ value: "positions", label: "Positions" }]} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </AppLayout>
    )
}

export default Page