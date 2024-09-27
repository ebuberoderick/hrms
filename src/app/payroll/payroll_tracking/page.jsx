"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { fetchPayrollWorkflow, payrollSchedule } from '@/services/authService'
import React, { useEffect, useState } from 'react'
import { LuEye } from 'react-icons/lu'

function Page() {
    const [isloading, setIsLoading] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [employee, setEmployee] = useState([])
    const [proccessingAdd, setProccessingAdd] = useState(false)
    const [alertMsg, setAlert] = useState(false)
    const [viewSlip, setViewSlip] = useState({})
    const [alertMsgData, setAlertData] = useState(false)

    const add = async (e) => {
        e.preventDefault()
        // setProccessingAdd(true)
        // const formData = serialize(e.target);
        // const { status, data } = await payrollSchedule(formData).catch(err => console.log(err))
        // if (status) {
        //     await fetchEmployees()
        //     setIsModalOpen(false)
        // }
        // setAlert(true)
        // setAlertData(data)
        // setProccessingAdd(false)
    }



    const fetchEmployees = async () => {
        const { status, data } = await fetchPayrollWorkflow().catch(err => console.log(err))
        if (status) {
            setEmployee(data.data[0])
        }
        setIsLoading(false)
    }


    useEffect(() => {
        fetchEmployees()
    }, [])

    return (
        <AppLayout title={"Payroll"}>
            <Modal size={"2xl"} closeModal={() => setViewSlip({})} isOpen={Object.keys(viewSlip).length > 0}>
                <div className="">
                    <table className="w-full divide-y text-xs text-left">
                        <tr className="bg-gray-100">
                            <th className="flex gap-3 pl-5 py-2">
                                Employee Info
                            </th>
                            <th className="table-cell">Payment Date</th>
                            <th className="table-cell">Status</th>
                            <th className="table-cell">Account Details</th>
                        </tr>
                        {
                            viewSlip?.payroll?.map((datf, i) => (
                                <tr className="" key={i}>
                                    <td className="pl-5 py-2">
                                        <div className="">Ebube Onyemzoro Roderick</div>
                                        <div className="">&#8358;23,988</div>
                                    </td>
                                    <td className="table-cell">Payment Date</td>
                                    <td className="table-cell">Status</td>
                                    <td className="table-cell">
                                        <div className="font-bold">Account:</div>
                                        <div className="">2120802649</div>
                                        <div className="font-bold">Bank:</div>
                                        <div className="">Zenith Bank</div>
                                    </td>
                                </tr>
                            ))
                        }
                    </table>
                    {/* <form onSubmit={add} className="space-y-4">
                        <div className="space-y-2">
                            <div className="text-hrms_green text-xl">Generate Payroll Schedule</div>
                            <div className="">
                                <AppInput name="schedule_date" type={"date"} required label="Set Date" />
                            </div>
                        </div>
                        <div>
                            <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Generating Payroll Schedule" : "Generate Payroll Schedule"}</button>
                        </div>
                    </form> */}
                </div>
            </Modal>
            <div className='space-y-5'>
                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[24px] font-[500] text-[#000000]">
                            Payroll Tracking
                        </p>
                        <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
                            Here we keep track of all payments
                        </p>
                    </div>
                </div>

                {/* <div className="flex justify-end">
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
                </div> */}

                <div className="">
                    <div className="">
                        <table className="w-full divide-y text-xs text-left">
                            <tr className="bg-gray-100">
                                <th className="flex gap-3 pl-5 py-2">
                                    Total Payslip
                                </th>
                                <th className="hidden sm:table-cell">Created Date</th>
                                <th className="hidden sm:table-cell">Updated Date</th>
                                <th className="hidden sm:table-cell">Created By</th>
                                <th className="hidden sm:table-cell">Updated By</th>
                                <th className="hidden sm:table-cell">Schedule Date</th>
                                <th className="hidden sm:table-cell">Status</th>
                                <th className="w-20">Action</th>
                            </tr>
                            {
                                employee.map((data, i) => (
                                    <tr key={i} className="">
                                        <td className="flex gap-3 pl-5 py-2">
                                            {data.payroll.length}
                                        </td>
                                        <td className="hidden sm:table-cell">{data.created_at.split("T")[0]}</td>
                                        <td className="hidden sm:table-cell">{data.date_updated?.split("T")[0]}</td>
                                        <td className="hidden sm:table-cell">{data.createdby?.name}</td>
                                        <td className="hidden sm:table-cell">{data.updated_by?.name}</td>

                                        <td className="hidden sm:table-cell">{data.schedule_date}</td>
                                        <td className="hidden sm:table-cell">{data.status}</td>
                                        <td className="text-xl flex items-center gap-1">
                                            <div onClick={() => setViewSlip(data)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                                            <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                                        </td>
                                    </tr>
                                ))
                            }
                            {
                                isloading && ["", "", "", "", ""].map((list, i) => (
                                    <tr key={i} className="">
                                        <th className="flex gap-3 pl-5 py-2">
                                            <div className="preload py-2 w-2/3"></div>
                                        </th>
                                        <th className="table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                                        <th className="w-20 flex gap-3">
                                            <div className="preload py-2 w-1/3"></div>
                                            <div className="preload py-2 w-1/3"></div>
                                        </th>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    <AppPagination totalRecords={employee} newData={(e) => setEmployee(e)} />
                </div>

                <ResponseModal
                    status={alertMsgData?.success}
                    isOpen={alertMsg}
                    onClose={() => setAlert(false)}
                    message={alertMsgData?.message}
                />
            </div>
        </AppLayout>
    )
}

export default Page