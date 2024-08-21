"use client"
import AppLayout from '@/components/layouts/appLayout'
import LineChart from '@/components/molecules/LineChart'
import PieChart from '@/components/molecules/PieChart'
import ResponseModal from '@/components/organisms/ResponseModal'
import React, { useEffect, useState } from 'react'
import { FiUploadCloud, FiUsers } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiPrinter } from 'react-icons/pi'
import { RiUserReceivedLine } from 'react-icons/ri'
import { TbCalendarTime } from 'react-icons/tb'

function Page() {
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 4000);
    }, [])

    return (
        <AppLayout title={"Payroll"}>
            <div className='space-y-5'>
                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[24px] font-[500] text-[#000000]">
                            Dashboard
                        </p>
                    </div>
                    <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
                        <div className="flex justify-center cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
                            <FiUploadCloud />
                            <div className="">Upload Bulk</div>
                        </div>
                        <div
                            className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
                        //   onClick={() => setIsModalOpen(true)}
                        >
                            <i className="ri-add-line"></i>
                            <div className="">Add Payroll</div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    <div className="bg-hrms_yellow space-y-1 rounded-md bg-opacity-30 px-4 py-2">
                        <div className="text-2xl text-[#c4b428de]">
                            <FiUsers />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">&#8358;107,690</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Cost</div>
                    </div>

                    <div className="bg-hrms_green space-y-1 rounded-md bg-opacity-10 px-4 py-2">
                        <div className="text-2xl text-[#5ad44fbd]">
                            <TbCalendarTime />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">&#8358;12,000</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Salary Paid</div>
                    </div>

                    <div className="bg-danger space-y-1 rounded-md bg-opacity-10 px-4 py-2">
                        <div className="text-2xl text-danger">
                            <RiUserReceivedLine />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">&#8358;27,000</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Allowances</div>
                    </div>

                    <div className="bg-[#2886c441] space-y-1 rounded-md bg-opacity-20 px-4 py-2">
                        <div className="text-2xl text-[#2886c4de]">
                            <PiPrinter />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">&#8358;7,013</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Deductions</div>
                    </div>
                </div>

                <div className="">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        <div className="md:col-span-2 lg:col-span-2">
                            <div className="bg-white shadow-sm rounded-lg">
                                <div className="flex items-center pr-3">
                                    <div className="text-lg flex-grow font-semibold px-5 py-3">Payroll Cost Overview</div>
                                    <div className="flex items-center text-gray-500 gap-2 pr-3">Last 6 Months <IoIosArrowDown /></div>
                                </div>
                                <div className="h-60">
                                    <LineChart />
                                </div>
                            </div>
                        </div>
                        <div className=" p-4 bg-white shadow-sm rounded-lg">
                            <div className="text-lg font-semibold">Employee Department</div>
                            <div className="">
                                <PieChart
                                    series={[45, 35, 76]}
                                    labels={["CSE", "Finance", "Analyst"]}
                                />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="">
                    <div className="lg:flex space-ysss-3 items-center justify-between">
                        <div className="">
                            <p className=" text-[24px] font-[500] text-[#000000]">
                                Employee payroll information
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
                </div>

                <div className="">
                    <div className="">
                        <table className="w-full divide-y text-xs text-left">
                            <tr className="bg-gray-100">
                                <th className="flex gap-3 pl-5 py-2">
                                    {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                                    Employee Name
                                </th>
                                <th className="hidden lg:table-cell">Dept.</th>
                                <th className="hidden sm:table-cell">Job Title</th>
                                <th className="hidden sm:table-cell">Basic Salary</th>
                                <th className="hidden sm:table-cell">Created Date</th>
                                <th className="hidden sm:table-cell">Updated Date</th>
                                <th className="hidden sm:table-cell">Created By</th>
                                <th className="w-20">Updated By</th>
                            </tr>
                            {/* {
                                acct?.data?.map((list, i) => (
                                    <tr key={i}>
                                        <td className="flex items-center gap-3 pl-5 py-3">
                                            <div className="flex-grow gap-2">{list.account_name}</div>
                                        </td>
                                        <td className="hidden lg:table-cell">
                                            <div className="font-semibold">{list.account_number}</div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <div className="">{list.branch_code}</div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <div className="">{list.account_balance}</div>
                                        </td>
                                        <td className="hidden sm:table-cell">
                                            <div className="">{list.bank_branch}</div>
                                        </td>
                                        <td>
                                            <div className="text-xl flex items-center gap-1">
                                                <div onClick={() => setView(list)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                                                <div onClick={() => setEdit(list)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                                                <div onClick={() => setDelete(list)} className="text-danger p-1 cursor-pointer"><HiOutlineBan /></div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            } */}
                            {
                                isloading && ["", "", "", "", ""].map((list, i) => (
                                    <tr className="" key={i}>
                                        <th className="flex gap-3 pl-5 py-2"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
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

                {/* <ResponseModal
          status={true}
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="Employee invitation sent!"
        />
        <ResponseModal
          status={false}
          isOpen={isErrorModal}
          onClose={() => setIsErrorModal(false)}
          message={`${errMsg}`}
        />
        <ResponseModal
          status={alertMsgData?.success}
          isOpen={alertMsg}
          onClose={() => setAlert(false)}
          message={alertMsgData?.message}
        /> */}
            </div>
        </AppLayout>
    )
}

export default Page