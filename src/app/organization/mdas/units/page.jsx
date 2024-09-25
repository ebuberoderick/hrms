"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import React, { useEffect, useState } from 'react'

function page() {
    const [isloading, setIsLoading] = useState(true)
    const [showModal, setShowModal] = useState(false)

    const add = async (e) => {
        e.preventDefault()
    }


    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    }, [])
    return (
        <AppLayout title={"Organizations MDAs"}>
            <div className="space-y-5">
                <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
                    <form onSubmit={(e) => add(e)} className="space-y-4">
                        <div className="text-hrms_green text-xl">Add New Unit</div>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="company_name" type={"code"} required label="Minstry" />
                            <AppInput name="company_name" type={"code"} required label="Agency" />
                            <AppInput name="company_name" type={"code"} required label="Code" />
                            <AppInput name="company_type" type={""} required label="Name Of Unit" />
                            <AppInput name="company_type" type={""} required label="Unit Head" />
                            <AppInput name="trading_name" type={"textarea"} label="Description" />
                        </div>
                        <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
                    </form>
                </Modal>
                {/* <Modal closeModal={() => setComInfo({})} size={"xl"} isOpen={Object.keys(comInfo).length > 0}>
                    <form onSubmit={(e) => updateInfo(e)} className="space-y-4">
                        <div className="text-hrms_green text-xl">Update Company Info</div>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="company_name" type={"text"} defaultValue={comInfo.company_name} required label="Company Name" />
                            <AppInput name="company_type" type={"select"} defaultValue={comInfo.company_type} required label="Company Type" options={[...companyType]} />
                            <AppInput name="trading_name" type={"text"} defaultValue={comInfo.trading_name} label="Trading Name (Optional)" />
                            <AppInput name="registration_no" type={"number"} defaultValue={comInfo.registration_no} label="Registration Number (Optional)" />
                            <AppInput maxLength={"11"} name="contact_no" defaultValue={comInfo.contact_no} type={"number"} required label="Phone Number" />
                            <AppInput name="email" type={"email"} defaultValue={comInfo.email} required label="Email Address" />
                            <AppInput name="tax_no" type={"number"} defaultValue={comInfo.tax_no} label="Tax Number (Optional)" />
                            <AppInput name="website" type={"link"} defaultValue={comInfo.website} label="Website (Optional)" />
                            <AppInput name="location_id" type={"select"} defaultValue={comInfo.location_id} label="Location (Optional)" options={appLocation} />
                            <input type="hidden" readOnly value={logolink === "" ? comInfo.company_logo : logolink} name="company_logo" />
                            <input type="hidden" readOnly value={comInfo.id} name="id" />
                            <AppInput name="clogo" onChange={(e) => FileUpload(e).then(res => setlogolink(res.link))} type={"file"} label="Company Logo (Optional)" />
                        </div>
                        <button className="bg-hrms_green w-full rounded-lg text-white py-2">Update</button>
                    </form>
                </Modal> */}
                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[24px] font-[500] text-[#000000]">
                            Units
                        </p>
                        <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
                            All the units  are listed here
                        </p>
                    </div>
                    <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
                        <div
                            // onClick={(e) => setImportModal(true)} 
                            className="flex justify-center cursor-pointer font-bold gap-2 items-center border bg-hrms_light_green border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
                            <i className="ri-upload-2-fill text-hrms_green"></i>
                            <div className="">Upload Bulk</div>
                        </div>
                        <div
                            className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
                            onClick={() => setShowModal(true)}
                        >
                            <i className="ri-add-line"></i>
                            <div className="">Add Agency</div>
                        </div>
                    </div>
                </div>
                <div className="sm:flex justify-end space-y-3 sm:space-y-0 gap-[10px] text-sm">
                    <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
                        Export PDF
                    </div>
                    <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
                        Export CSV
                    </div>
                    <div className="border border-hrms_green rounded-md cursor-pointer text-hrms_green px-6 py-2">
                        Print
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <table className="w-full divide-y text-xs text-left">
                            <tr className="bg-gray-100">
                                <th className="flex gap-3 pl-5 py-2">
                                    ID
                                </th>
                                <th className="hidden lg:table-cell">Code</th>
                                <th className="hidden lg:table-cell">Ministry</th>
                                <th className="hidden lg:table-cell">Agency</th>
                                <th className="hidden lg:table-cell">Code</th>
                                <th className="hidden sm:table-cell">Name Of Unit</th>
                                <th className="hidden lg:table-cell">Description</th>
                                <th className="hidden lg:table-cell">Unit Head</th>
                                <th className="w-20">Action</th>
                            </tr>

                            {
                                isloading && ["", "", "", "", ""].map((list, i) => (
                                    <tr className="" key={i}>
                                        <th className="flex gap-3 pl-5 py-2"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="w-20 flex gap-2">
                                            <div className="preload py-2 w-1/3"></div>
                                            <div className="preload py-2 w-1/3"></div>
                                            <div className="preload py-2 w-1/3"></div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default page