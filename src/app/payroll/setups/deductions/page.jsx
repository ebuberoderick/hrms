"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { createAllowanceDefinition, createDeductionDefinition, fetchAllowanceDefinition, fetchDeductionDefinition } from '@/services/authService'
import { companies } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [compnis, setCompnis] = useState([])
  const [isloading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [allowance, setAllowance] = useState([])
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)



  const add = async (e) => {
    e.preventDefault()
    const formData = serialize(e.target);
    setProccessingAdd(true)
    const { status, data } = await createDeductionDefinition(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setIsModalOpen(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }



  
  

  const fetch = async () => {
    const { status, data } = await fetchDeductionDefinition().catch(err => console.log(err))
    if (status) {
      setAllowance(data.data[0])
    }
    setIsLoading(false)
  }

  useEffect(() => {
    companies().then(res => setCompnis([...res]))
    fetch()
  }, [])

  return (
    <AppLayout title={"Payroll Setups"}>

      <Modal size={"lg"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="">
          <form onSubmit={add} className="space-y-4">
            <div className="space-y-2">
              <div className="text-hrms_green text-xl">Add New Deduction</div>
              <div className="grid grid-cols-2 gap-4">
                <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
                <AppInput name="code" type={"text"} required label="Code" />
                <AppInput name="statutory" type={"select"} required label="Statutory" options={[{ value: "1", label: "True" }, { value: "0", label: "False" }]} />
                <AppInput name="calculation_method" type={"select"} required label="Calculation" options={[{ value: "fixed", label: "Fixed" }]} />
                <AppInput name="description" type={"textarea"} required label="Description" />
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
              Deductions
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the payroll deductions are listed here.
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
              <div className="">Add Deductions</div>
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
                  Company
                </th>

                <th className="hidden sm:table-cell">Code</th>
                <th className="hidden lg:table-cell">Description</th>
                <th className="hidden sm:table-cell">Statutory</th>
                <th className="hidden sm:table-cell">Calculation Method</th>
                <th className="w-20">Action</th>
              </tr>
              {
                allowance.map((data, i) => (
                  <tr key={i} className="">
                    <td className="flex gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      {data.company.company_name}
                    </td>

                    <td className="hidden sm:table-cell">{data.code}</td>
                    <td className="hidden lg:table-cell">{data.description}</td>
                    <td className="hidden sm:table-cell">{data.statutory === 1 ? "True" : "False"}</td>
                    <td className="hidden sm:table-cell">{data.calculation_method}</td>
                    <td className="w-20"></td>
                  </tr>
                ))
              }
              {
                isloading && ["", "", "", "", "", ""].map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="space-y-1 w-full">
                        <div className="preload w-2/3 py-2"></div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
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