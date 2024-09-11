"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { fetchEmployee, fetchSalaryAllowance, payrollSchedule } from '@/services/authService'
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
      await fetchEmployees()
      setIsModalOpen(false)
      setAlert(true)
      setAlertData(data)
    }
    setProccessingAdd(false)
  }



  const fetchEmployees = async () => {
    const { status, data } = await fetchSalaryAllowance().catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetchEmployees()
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
              Payroll Schedule
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the scheduled payroll  are listed here.
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
            // onClick={() => setIsModalOpen(true)}
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
              {
                employee.map((data, i) => (
                  <tr key={i} className="">
                    <td className="flex gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div> */}
                      {data?.employee?.staff_id}
                    </td>
                    <td className="hidden lg:table-cell">{data?.employee?.employee_name}</td>
                    <td className="hidden sm:table-cell">{data.employee.position}</td>
                    <td className="hidden sm:table-cell">{data.employee.category}</td>
                    <td className="hidden sm:table-cell">{data.employee.grade}</td>
                    <td className="w-20">{data.amount}</td>
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