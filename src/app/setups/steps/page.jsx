"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { createGradeStep, fetchGradeStep } from '@/services/authService'
import { AllEmployees, allDepartment, companies } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [riz, setRiz] = useState([])
  const [compnis, setCompnis] = useState([])
  const [processing, setProcessing] = useState(false)
  const [allDept, setAllDept] = useState([])
  const [empl, setAllEmpl] = useState([])

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setProcessing(true)
    const { status, data } = await createGradeStep(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
    setProcessing(false)
  }

  const fetch = async () => {
    const { status, data } = await fetchGradeStep().catch(err => console.log(err))
    if (status) {
      setRiz(data?.data[0]);
    }
  }

  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
    allDepartment().then(res => setAllDept([...res]))
  }, [])



  return (
    <AppLayout>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Step</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="step" type={"text"} required label="Step" />
              <AppInput name={"description"} type={"textarea"} label="Description" />
            </div>
            <button disabled={processing} className={`bg-hrms_green w-full rounded-lg text-white py-2 ${processing && "bg-opacity-25"}`}>{processing ? "Creating" : "Add"}</button>
          </form>
        </Modal>

        <div className="lg:flex lg:gap-y-4 space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Grade Step
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Grade Step are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Step</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <table className="w-full divide-y text-sm text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div>
                  Company
                </th>

                <th className="hidden lg:table-cell">Description</th>
                <th className="hidden sm:table-cell">Grade Level</th>
                <th className="w-20">Status</th>
                <th className="w-20">Action</th>
              </tr>
              {
                riz.map((list, i) => (
                  <tr key={i} className=''>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div>
                      <div className="space-y-1">
                        <div className="">{list.company.company_name}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.description}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.step}</div>
                    </td>
                    <td>
                      <div className="">{list.active === "1" ? "active" : "inactive"}</div>
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
          </div>
          <div className="">
            <AppPagination totalRecords={riz} newData={(e) => setRiz(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page

// 07490961250