"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { fetchSalaryAllowance, fetchSalaryStructure, payrollSchedule } from '@/services/authService'
import React, { useEffect, useState } from 'react'

function Page() {
  const [isloading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [employee, setEmployee] = useState([])
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const add = async (e) => {
    e.preventDefault()
    setProccessingAdd(true)
    const formData = serialize(e.target);
    const { status, data } = await payrollSchedule(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setIsModalOpen(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }
  



  const fetch = async () => {
    const { status, data } = await fetchSalaryStructure().catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
    setIsLoading(false)
  }



  useEffect(() => {
    fetch()
  }, [])

  return (
    <AppLayout title={"Payroll Calculation"}>
      <Modal size={"sm"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="">
          <form onSubmit={add} className="space-y-4">
            <div className="space-y-2">
              <div className="text-hrms_green text-xl">Generate Payroll Schedule</div>
              <div className="">
                <AppInput name="schedule_date" type={"date"} required label="Set Date" />
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
                  Employee
                </th>
                <th className="hidden lg:table-cell">Job Title</th>
                <th className="hidden sm:table-cell">Grade Level</th>
                <th className="hidden sm:table-cell">Grade Step</th>
                <th className="hidden sm:table-cell">Basic Salary</th>
                <th className="hidden sm:table-cell">Created Date</th>
                <th className="hidden sm:table-cell">Updated Date</th>
                <th className="hidden sm:table-cell">Created By</th>
                <th className="w-20">Updated By</th>
              </tr>
              {
                employee.map((list, i) => (
                  <tr key={i}>
                    <td className="flex gap-3 pl-5 py-2">{list.employee.employee_name}</td>
                    <td className="hidden lg:table-cell">{list.jobtitle.title}</td>
                    <td className="hidden sm:table-cell">{list.gradelevel.grade}</td>
                    <td className="hidden sm:table-cell">{list.gradestep.step}</td>
                    <td className="hidden sm:table-cell">{list.basic_pay}</td>
                    <td className="hidden sm:table-cell">{list.created_at.split("T")[0]}</td>
                    <td className="hidden sm:table-cell">{list.updated_at.split("T")[0]}</td>
                    <td className="hidden sm:table-cell">{list.createdby.name}</td>
                    <td className="w-20">{list?.updatedby?.name}</td>
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
