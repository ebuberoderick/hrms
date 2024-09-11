"use client"
import AppLayout from '@/components/layouts/appLayout'
import LineChart from '@/components/molecules/LineChart'
import PieChart from '@/components/molecules/PieChart'
import ResponseModal from '@/components/organisms/ResponseModal'
import { fetchAuditTrails } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { FiUploadCloud, FiUsers } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiPrinter } from 'react-icons/pi'
import { RiUserReceivedLine } from 'react-icons/ri'
import { TbCalendarTime } from 'react-icons/tb'

function Page() {
    const [isloading, setIsLoading] = useState(true)
    const [employee, setEmployee] = useState([])


    // 


    const fetchAudit = async () => {
        const { status, data } = await fetchAuditTrails().catch(err => console.log(err))
        if (status) {
            console.log(data);
            setEmployee(data.data[0])
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchAudit()
    }, [])

    return (
        <AppLayout title={"Audit Trail"}>
            <div className='space-y-5'>
                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
                            All the audit trail are logged here.
                        </p>
                    </div>
                    <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
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
                </div>

                <div className="">
                    <div className="">
                        <table className="w-full divide-y text-xs text-left">
                            <tr className="bg-gray-100">
                                <th className="flex gap-3 pl-5 py-2">
                                    {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                                    Event
                                </th>
                                <th className="hidden lg:table-cell">Employee Name</th>
                                <th className="hidden sm:table-cell">Old Value</th>
                                <th className="hidden sm:table-cell">New Value</th>
                                <th className="hidden sm:table-cell">IP Address</th>
                                <th className="w-20">Agent</th>
                            </tr>
                            {
                                employee.map((data, i) => (
                                    <tr key={i} className="">
                                        <td className="flex gap-3 pl-5 py-2">
                                            {data?.event}
                                        </td>
                                        <td className="hidden lg:table-cell">
                                            {data?.user?.name}
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            {/* {data.employee.position} */}
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            {/* {data.employee.category} */}
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            {data.ip_address}
                                        </td>
                                        <td className="w-20">
                                            {data.user_agent.split(" ")[0]}
                                        </td>
                                    </tr>
                                ))

                            }
                            {
                                isloading && ["", "", "", "", ""].map((list, i) => (
                                    <tr className="" key={i}>
                                        <th className="flex gap-3 pl-5 py-2"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="w-20"><div className="preload py-2 w-2/3"></div></th>
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

export default Page