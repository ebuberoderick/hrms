"use client"
import AppLayout from '@/components/layouts/appLayout'
import LineChart from '@/components/molecules/LineChart'
import PieChart from '@/components/molecules/PieChart'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import React, { useEffect, useState } from 'react'
import { FiUploadCloud, FiUsers } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'
import { PiPrinter } from 'react-icons/pi'
import { RiUserReceivedLine } from 'react-icons/ri'
import { TbCalendarTime } from 'react-icons/tb'

function Page() {
  const [isloading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [proccessingAdd, setProccessingAdd] = useState(false)

  const add = (e) => {
    e.preventDefault()
  }


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4000);
  }, [])

  return (
    <AppLayout title={"Payroll Calculation"}>


      <Modal size={"2xl"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="">
          <form onSubmit={add} className="space-y-4">
            <div className="space-y-2">
              <div className="text-hrms_green text-xl">Generate Payroll Schedule</div>
              <div className="grid grid-cols-3 gap-4">
                <AppInput name="employee_id" type={"date"} required label="Month" options={[]} />
                <AppInput name="job_title_id" type={"select"} required label="Day" options={[]} />
                <AppInput name="grade_level_id" type={"select"} required label="Year" options={[]} />
              </div>
            </div>
            <div>
              <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Generating Payroll Schedule" : "Generate Payroll Schedule"}</button>
            </div>
          </form>
        </div>
      </Modal>
      <div className='space-y-5'>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Employee Details
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the employees details  are listed here.
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Generate Payroll Schedule</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
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
                  Employee ID
                </th>
                <th className="hidden lg:table-cell">Employee Name</th>
                <th className="hidden sm:table-cell">Department</th>
                <th className="hidden sm:table-cell">Job Title</th>
                <th className="hidden sm:table-cell">Grade Level</th>
                <th className="w-20">Basic Salary</th>
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