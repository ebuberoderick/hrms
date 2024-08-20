"use client"
import AppCheckBox from '@/components/organisms/AppCheckBox';
import AppInput from '@/components/organisms/AppInput'
import { NigeriaStates } from '@/hooks/Nigeria';
import serialize from '@/hooks/Serialize';
import { fetchMyData, verifyMyData } from '@/services/authService';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function VerifyAll({ user, setSave }) {
    // console.log(user);
    const [userinfo, setUserinfo] = useState()
    const [btnPrint, setBtnPrint] = useState(false)

    const fetchInfo = async () => {
        const { status, data } = await fetchMyData().catch(err => console.log(err))
        if (status) {
            setUserinfo(data.data[0])
        }
    }


    const printNw = () => {
        var content = document.getElementById("divcontents");
        var pri = document.getElementById("ifmcontentstoprint").contentWindow;
        pri.document.open();
        pri.document.write(content.innerHTML);
        pri.document.close();
        pri.focus();
        pri.print();
    }


    const verify = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await verifyMyData({ status: 1 }).catch(err => console.log(err))
        if (status) {
            setBtnPrint(true)
            setSave()
        }

    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <div className="space-y-6 bg-white px-3 py-7 rounded-lg shadow-md">
            <iframe id="ifmcontentstoprint" className='h-0 w-0 absolute'></iframe>

            <div id='divcontents' className='space-y-6 hidden'>
                <div className='space-y-4'>
                    <div className="inline-flex relative items-start justify-between">
                        <h2 className="font-bold md:text-3xl text-hrms_green">
                            Bio Data Verification
                        </h2>
                    </div>
                    <div className='space-y-3 print:space-y-3'>
                        <div>
                            <div className='mb-2 font-bold'>firstname</div>
                            <div>{user.employee.firstname}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>lastname</div>
                            <div>{user.employee.lastname}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>middlename</div>
                            <div>{user.employee.middlename}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>telephone</div>
                            <div>{user.employee.telephone}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Date of birth</div>
                            <div>{user.employee.date_of_brith}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Email</div>
                            <div>{user?.user?.email}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Staff ID</div>
                            <div>{user.employee.staff_id}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Marital status</div>
                            <div>{user.employee.marital_status}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Gender</div>
                            <div>{user.employee.gender}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>State Of Origin</div>
                            <div>{user.user.state_of_origin}</div>
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
                        <div className='space-y-3 print:space-y-3'>
                            <div>
                                <div className='mb-2 font-bold'>Bank</div>
                                <div>{userinfo?.bank[0].bank_name}</div>
                            </div>
                            <div>
                                <div className='mb-2 font-bold'>Account Number</div>
                                <div>{userinfo?.bank[0].account_number}</div>
                            </div>
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
                        <div className='space-y-3 print:space-y-3'>
                            <div>
                                <div className='mb-2 font-bold'>BVN</div>
                                <div>{user.employee.bvn}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='max-w-lg'>
                    <div className="inline-flex relative bottom-4 items-start justify-between">
                        <h2 className="font-bold md:text-3xl text-hrms_green">
                            NIN Verification
                        </h2>
                    </div>
                    <div className='space-y-3 print:space-y-3'>
                        <div>
                            <div className='mb-2 font-bold'>NIN</div>
                            <div>{user.user.nin}</div>
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
                        <div className='space-y-3 print:space-y-3'>
                            <div>
                                <div className='mb-2 font-bold'>Personal start date</div>
                                <div>{user.employee.person_start_date}</div>
                            </div>
                            <div>
                                <div className='mb-2 font-bold'>Position</div>
                                <div>{user.employee.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='space-y-4'>
                <div className="inline-flex relative items-start justify-between">
                    <h2 className="font-bold md:text-3xl text-hrms_green">
                        Bio Data Verification
                    </h2>
                </div>
                <div>
                    <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                        <img src={user.user.avatar} id="output" className="w-full h-full rounded-full" />
                        <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                            <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                            <i className="ri-camera-line"></i>
                        </label>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type='hidden' name='id' value={user.user.id} />
                        <AppInput name="firstname" type="text" value={user.employee.firstname} required label="First Name" />
                        <AppInput name="lastname" type="text" value={user.employee.lastname} required label="Last Name" />
                        <AppInput name="middlename" type="text" value={user.employee.middlename} label="Middle Name (Optional)" />
                        <AppInput name="telephone" type="number" value={user.employee.telephone} required label="Phone Number" />
                        <AppInput name="date_of_birth" value={user.employee.date_of_brith} type="date" required label="DOB" />
                        <AppInput name="email" type="email" required value={user?.user?.email} label="Email" />
                        <AppInput name="staff_id" type="text" value={user.employee.staff_id} required label="Staff ID" />
                        <AppInput value={user.employee.marital_status} name="marital_status" type="text" required label="Marital Status" options={[
                            { value: "single", label: "Single" },
                            { value: "married", label: "Married" },
                            { value: "widow", label: "Widow" },
                            { value: "widower", label: "Widower" },
                            { value: "divorced", label: "Divorced" }]} />
                        <AppInput value={user.employee.gender} name="gender" type="text" required label="Gender" options={[
                            { value: "Male", label: "Male" },
                            { value: "Female", label: "Female" },
                            { value: "Others", label: "Others" }]} />
                        <AppInput defaultValue={user.user.state_of_origin} name="state_of_origin" type="select" required label="State Of Origin" options={[...NigeriaStates]} />
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
                        <AppInput name="bank_code" value={userinfo?.bank[0].bank_name} type="text" required label="Bank" />
                        <AppInput name="account_number" value={userinfo?.bank[0].account_number} type="number" required label="Account Number" />
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
                        <AppInput name="bvn" value={user.employee.bvn} type="text" required label="Enter BVN" />
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
                        <AppInput name="nin" value={user.user.nin} type="text" required label="Enter NIN" />
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
                        <AppInput value={user.employee.person_start_date} name="personal_start_date" type="date" required label="Start Date" />
                        <AppInput value={user.employee.position} name="position" type="text" required label="Position" options={[{ value: "positions", label: "Positions" }]} />
                    </div>
                </div>
            </div>
            {
                btnPrint ? (
                    <form onSubmit={(e) => verify(e)} className="space-y-4 w-full">
                        <div className='w-full flex gap-3'>
                            <div onClick={() => printNw()} className="flex-grow border border-hrms_green text-hrms_green rounded-lg py-2 text-center cursor-pointer">View Dashboard</div>
                            <div onClick={() => printNw()} className="flex-grow bg-hrms_green text-white rounded-lg py-2 text-center cursor-pointer">Print</div>
                        </div>
                    </form>

                ) : (
                    <form onSubmit={(e) => verify(e)} className="space-y-4">
                        <AppCheckBox required Boxlable="I here by comfirm that all information are right" type="checkbox" name="status" value={1} />
                        <div>
                            <button className="bg-hrms_green disabled:bg-opacity-30 w-full inline text-white rounded-lg py-2 text-center cursor-pointer">Save</button>
                        </div>
                    </form>
                )
            }

        </div>
    )
}

export default VerifyAll