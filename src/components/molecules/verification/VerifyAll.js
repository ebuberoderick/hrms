"use client"
import AppCheckBox from '@/components/organisms/AppCheckBox';
import AppInput from '@/components/organisms/AppInput'
import { NigeriaStates } from '@/hooks/Nigeria';
import serialize from '@/hooks/Serialize';
import { fetchMyData, verifyMyData } from '@/services/authService';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function VerifyAll({ user, check }) {
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
        }

    }

    var DOB = user?.employee.date_of_birth
    var SD = user?.employee?.hire_date

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <div className="space-y-6 bg-white px-3 py-7 rounded-lg shadow-md">
            <iframe id="ifmcontentstoprint" className='h-0 w-0 absolute'></iframe>

            <div className='space-y-6 print:bg-hrms_yellow hidden' style={{ background: "red" }}>
                <div className='space-y-4'>
                    <div className="inline-flex relative items-start justify-between">
                        <h2 className="font-bold md:text-3xl text-hrms_green">
                            Bio Data Verification
                        </h2>
                    </div>
                    <div className='space-y-3 print:space-y-3'>
                        <div>
                            <div className='mb-2 font-bold'>firstname</div>
                            <div>{user?.employee?.firstname}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>lastname</div>
                            <div>{user?.employee?.lastname}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>middlename</div>
                            <div>{user?.employee?.middlename}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>telephone</div>
                            <div>{user?.employee?.telephone}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Date of birth</div>
                            <div>{user?.employee?.date_of_brith}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Email</div>
                            <div>{user?.user?.email}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Staff ID</div>
                            <div>{user?.employee?.staff_id}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Marital status</div>
                            <div>{user?.employee?.marital_status}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>Gender</div>
                            <div>{user?.employee?.gender}</div>
                        </div>
                        <div>
                            <div className='mb-2 font-bold'>State Of Origin</div>
                            <div>{user?.user?.state_of_origin}</div>
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
                                <div>{userinfo?.bank[0]?.bank_name}</div>
                            </div>
                            <div>
                                <div className='mb-2 font-bold'>Account Number</div>
                                <div>{userinfo?.bank[0]?.account_number}</div>
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
                                <div>{user?.employee?.bvn}</div>
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
                            <div>{user?.user?.nin}</div>
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
                                <div>{user?.employee?.person_start_date}</div>
                            </div>
                            <div>
                                <div className='mb-2 font-bold'>Position</div>
                                <div>{user?.employee?.position}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id='divcontents' class="max-w-4xl hidden mx-auto bg-white shadow-lg p-6">
                {/* <!-- Header Section --> */}
                <div class="flex justify-between items-center border-b pb-4 mb-6">
                    <div class="flex items-center space-x-4">
                        {/* <img src="https://via.placeholder.com/100" alt="Profile Picture" class="rounded-full w-24 h-24" /> */}
                            <div>
                                <h1 class="text-xl font-bold">John Miles Johnson</h1>
                                <p>john@gmail.com</p>
                                <p>090 2345 5983</p>
                            </div>
                    </div>
                    <div>
                        <h2 class="text-lg font-semibold">Name of company</h2>
                        {/* <img src="https://via.placeholder.com/50x50" alt="Company Logo" /> */}
                    </div>
                </div>

                {/* <!-- Employee Details --> */}
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Employee Details</h3>
                    <div class="print:grid print:grid-cols-2 print:gap-4 print:text-sm">
                        <div><strong>Employee ID:</strong> 12345</div>
                        <div><strong>First Name:</strong> John</div>
                        <div><strong>Last Name:</strong> Miles</div>
                        <div><strong>Middle Name:</strong> Johnson</div>
                        <div><strong>Username:</strong> employee</div>
                        <div><strong>Gender:</strong> Male</div>
                        <div><strong>State Of Residence:</strong> Imo</div>
                        <div><strong>Marital Status:</strong> Married</div>
                        <div><strong>Date Of Birth:</strong> July 2, 2024</div>
                        <div><strong>State Of Origin:</strong> Imo</div>
                    </div>
                </div>

                {/* <!-- Address --> */}
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Address</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>Home Address:</strong></div>
                        <div></div>
                        <div><strong>State:</strong> Imo</div>
                        <div><strong>City:</strong> Owerri</div>
                        <div><strong>Address:</strong> Owerri, Nigeria</div>
                    </div>
                </div>

                {/* <!-- Next of Kin --> */}
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Next of Kin</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>First Name:</strong> Mike</div>
                        <div><strong>Last Name:</strong> Miles</div>
                        <div><strong>Middle Name:</strong> </div>
                        <div><strong>State Of Origin:</strong> Imo</div>
                        <div><strong>Relationship:</strong> Brother</div>
                        <div><strong>Phone Number:</strong> 08109273467</div>
                        <div><strong>City:</strong> Owerri</div>
                        <div><strong>Address:</strong> Owerri, Nigeria</div>
                    </div>
                </div>

                {/* <!-- Identification --> */}
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Identification</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>Employee ID:</strong> #12345</div>
                        <div><strong>User ID:</strong> #2354</div>
                        <div><strong>Staff ID:</strong> #124</div>
                        <div><strong>Pin Number:</strong> 1827</div>
                        <div><strong>Legacy ID:</strong> #28917</div>
                        <div><strong>Tax Number:</strong> 192837</div>
                        <div><strong>BVN:</strong> 29988374</div>
                    </div>
                </div>

                {/* <!-- Official Details --> */}
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-2">Official Details</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div><strong>Hire Date:</strong> 21/08/2024</div>
                        <div><strong>Posting:</strong> Developer</div>
                        <div><strong>Grade:</strong> Grade 1</div>
                        <div><strong>Step:</strong> Step 1</div>
                    </div>
                </div>

                {/* <!-- Print Button --> */}
                <div class="flex justify-end">
                    <button onclick="window.print()" class="print-button bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-500">Print</button>
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
                        <img src={user?.user?.avatar} alt="" id="output" className="w-full h-full rounded-full" />
                        <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                            <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                            <i className="ri-camera-line"></i>
                        </label>
                    </div>
                </div>
                <div className='space-y-4'>
                    <div className="grid sm:grid-cols-2 gap-4">
                        <input type='hidden' name='id' value={user?.user?.id} />
                        <AppInput name="firstname" type="text" value={user?.employee?.firstname} required label="First Name" />
                        <AppInput name="lastname" type="text" value={user?.employee?.lastname} required label="Last Name" />
                        <AppInput name="middlename" type="text" value={user?.employee?.middlename} label="Middle Name (Optional)" />
                        <AppInput name="telephone" type="number" value={Number(user.employee.telephone.split("+")[1])} required label="Phone Number" />
                        <AppInput name="date_of_birth" value={DOB} type="date" required label="DOB" />
                        <AppInput name="email" type="email" required value={user?.user?.email} label="Email" />
                        <AppInput name="staff_id" type="text" value={user?.employee?.staff_id} required label="Staff ID" />
                        <AppInput value={user?.employee?.marital_status} name="marital_status" type="text" required label="Marital Status" options={[
                            { value: "single", label: "Single" },
                            { value: "married", label: "Married" },
                            { value: "widow", label: "Widow" },
                            { value: "widower", label: "Widower" },
                            { value: "divorced", label: "Divorced" }]} />
                        <AppInput value={user?.employee?.gender} name="gender" type="text" required label="Gender" options={[
                            { value: "Male", label: "Male" },
                            { value: "Female", label: "Female" },
                            { value: "Others", label: "Others" }]} />
                        <AppInput defaultValue={user?.employee?.state_of_origin} name="state_of_origin" type="select" required label="State Of Origin" options={[...NigeriaStates]} />
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
                        <AppInput name="bank_code" value={userinfo?.bank[0]?.bank_name} type="text" required label="Bank" />
                        <AppInput name="account_number" value={userinfo?.bank[0]?.account_number} type="number" required label="Account Number" />
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
                        <AppInput name="bvn" value={user?.employee?.bvn} type="text" required label="Enter BVN" />
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
                        <AppInput name="nin" value={user?.user?.nin} type="text" required label="Enter NIN" />
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
                        <AppInput value={user?.employee?.position} name="position" type="text" required label="Position" options={[{ value: "positions", label: "Positions" }]} />
                    </div>
                </div>
            </div>
            {
                btnPrint ? (
                    <form onSubmit={(e) => verify(e)} className="space-y-4 w-full">
                        <div className='w-full flex gap-3'>
                            <div onClick={() => check()} className="flex-grow border border-hrms_green text-hrms_green rounded-lg py-2 text-center cursor-pointer">View Dashboard</div>
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