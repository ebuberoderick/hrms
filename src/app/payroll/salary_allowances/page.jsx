"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { createSalaryAllowance, fetchSalaryAllowance } from '@/services/authService'
import { AllAllowanceDefinition, AllEmployees, AllSalarytructure } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [isloading, setIsLoading] = useState(true)
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [salaryAllowance, setSalaryAllowance] = useState([])
  const [alertMsgData, setAlertData] = useState(false)
  const [empl, setAllEmpl] = useState([])
  const [salStruc, setSalStruc] = useState([])
  const [alloDef, setAlloDef] = useState([])


  const add = async (e) => {
    e.preventDefault()
    const formData = serialize(e.target);
    setProccessingAdd(true)
    const { status, data } = await createSalaryAllowance(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setIsModalOpen(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }

  const fetch = async () => {
    const { status, data } = await fetchSalaryAllowance().catch(err => console.log(err))
    if (status) {
      setSalaryAllowance(data.data[0])
    }
    setIsLoading(false)
  }


  useEffect(() => {
    fetch()
    AllSalarytructure().then(res => setSalStruc([...res]))
    AllAllowanceDefinition().then(res => setAlloDef([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
  }, [])


  return (
    <AppLayout title={"Payroll Setups"}>
      <Modal size={"lg"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="">
          <form onSubmit={add} className="space-y-4">
            <div className="space-y-2">
              <div className="text-hrms_green text-xl">Add New Salary Allowance</div>
              <div className="grid grid-cols-2 gap-4">
                <AppInput name="employee_id" type={"select"} required label="Employee" options={[...empl]} />
                <AppInput name="salary_structure_id" type={"select"} required label="Salary Structure" options={[...salStruc]} />
                <AppInput name="allowance_definition_id" type={"select"} required label="Allowance Definition" options={[...alloDef]} />
                <AppInput name="amount" type={"text"} required label="Amount" />
              </div>
            </div>
            <div>
              <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Adding Deduction" : "Add Deduction"}</button>
            </div>
          </form>
        </div>
      </Modal>


      <div className='space-y-5'>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Salary Allowances
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the salary allowances are listed here.
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div className="flex justify-center cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
              <i className="ri-upload-2-fill text-hrms_green"></i>
              <div className="">Upload Bulk</div>
            </div>
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Allowance</div>
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
                <th className="hidden sm:table-cell">Salary Structure ID</th>
                <th className="hidden sm:table-cell">Allowance Code</th>
                <th className="hidden sm:table-cell">Allowance Method</th>
                <th className="hidden sm:table-cell">Amount</th>
                <th className="hidden sm:table-cell">Created By</th>
                <th className="hidden sm:table-cell">Updated By</th>
                <th className="w-20">Created Date</th>
              </tr>
              {
                salaryAllowance.map((data, i) => (
                  <tr key={i} className="">
                    <td className="flex gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                      {data.employee.employee_name}
                    </td>
                    <td className="hidden sm:table-cell">{data.salarystructure.id}</td>
                    <td className="hidden sm:table-cell">{data.allowancedefinition.code}</td>
                    <td className="hidden sm:table-cell">{data.allowancedefinition.calculation_method}</td>
                    <td className="hidden sm:table-cell">{data.amount}</td>
                    <td className="hidden sm:table-cell">{data.createdby.name}</td>
                    <td className="hidden sm:table-cell">{data.date_updated}</td>
                    <td className="w-20">{data.date_created}</td>
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
        /> */}
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