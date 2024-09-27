'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppPagination from '@/components/organisms/AppPagination'
import { fetchPolicy } from '@/services/authService'
import React, { useEffect, useState } from 'react'

function EmployeePolicy() {
    const [policy, setPolicies] = useState([])

    const fetch = async () => {
        const { status, data } = await fetchPolicy().catch(err => console.log(err))
        if (status) {
            setPolicies(data.data[0])
        }
    }

    useEffect(() => {
        fetch()
    }, [])
    return (
        <AppLayout title={"Organizations Company Policy"}>
            <div className="space-y-5">
                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[24px] font-[500] text-[#000000]">
                            Policy
                        </p>
                        <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
                            All the company policies are listed here
                        </p>
                    </div>
                </div>
                <div className="">
                    <table className="w-full divide-y text-sm text-left">
                        <tr className="bg-gray-100">
                            <th className="flex w-72 gap-3 pl-5 py-2">
                                {/* <div className="w-9 relative">
                                    <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
                                </div> */}
                                Title
                            </th>
                            <th className="hidden w-72 sm:table-cell">Department</th>

                            <th className="hidden lg:table-cell">Description</th>
                            <th className="w-20">Action</th>
                        </tr>
                        {
                            policy?.data?.map((poli, i) => (
                                <tr key={i}>
                                    <td className="flex items-center gap-3 pl-5 py-2">
                                        {/* <div className="w-9 relative">
                                            <div className=""><AppInput type="checkbox" /></div>
                                        </div> */}
                                        <div className="flex-grow gap-2 flex">
                                            {poli.title}
                                        </div>
                                    </td>
                                    <td className="hidden lg:table-cell">
                                        <div className="font-semibold">{poli?.company?.company_name}</div>
                                    </td>
                                    <td className="hidden sm:table-cell">
                                        <div className="trunck-text">{poli.description}</div>
                                    </td>
                                    <td>
                                        <div className="text-xl flex gap-1">
                                            <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                                            <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                    <AppPagination totalRecords={policy} newData={(e) => setPolicies(e)} />
                </div>
            </div>
        </AppLayout>
    )
}

export default EmployeePolicy