"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addComplaint, fetchComplaint } from '@/services/authService'
import { AllEmployees, allDepartment, companies } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [cons, setCon] = useState([])
  const [compnis, setCompnis] = useState([])
  const [allDept, setAllDept] = useState([])
  const [empl, setAllEmpl] = useState([])

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await addComplaint(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchComplaint().catch(err => console.log(err))
    if (status) {
      setCon(data?.data[0]);
    }
  }

  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
    allDepartment().then(res => setAllDept([...res]))
  }, [])


  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Complaint</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="complaint_from_id" type={"select"} required label="Complaint From" options={[...empl]} />
              <AppInput name="complaint_against_id" type={"select"} required label="Complaint Against" options={[...empl]} />
              <AppInput name="complaint_title" type={"text"} required label="Complaint Title" />
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="complaint_date" type={"date"} required label="Complaint Date" />
              <AppInput name={"description"} type={"textarea"} label="Description" />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <div className="lg:flex space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Account Balance
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
            <table className="w-full divide-y text-sm text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div>
                  Bank Name
                </th>
                <th className="">Balance</th>
              </tr>
              {
                cons?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div>
                      <div className="space-y-1">
                        <div className="">{list.complaint_from.employee_name}</div>
                      </div>
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
            <AppPagination totalRecords={cons} newData={(e) => setCon(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page