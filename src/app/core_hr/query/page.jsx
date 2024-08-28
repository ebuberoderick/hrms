"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addQuery, fetchQuery } from '@/services/authService'
import { AllEmployees, allDepartment, companies, queryType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [qury, setQury] = useState([])
  const [compnis, setCompnis] = useState([])
  const [allDept, setAllDept] = useState([])
  const [empl, setAllEmpl] = useState([])
  const [queType, setQueryType] = useState([])

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await addQuery(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchQuery().catch(err => console.log(err))
    if (status) {
      setQury(data?.data[0]);
    }
  }



  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
    allDepartment().then(res => setAllDept([...res]))
    queryType().then(res => setQueryType([...res]))
  }, [])

  return (
    <AppLayout>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Query</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="warning_to" type={"select"} required label="Query To" options={[...empl]} />
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="warning_type" type={"select"} required label="Query Type" options={[...queType]} />
              <AppInput name="subject" type={"text"} required label="Subject" />
              <AppInput name="warning_date" type={"date"} required label="Query Date" />
              <AppInput name="Award_present" type="select" required label="status"
                options={[
                  { value: "pending", label: "Pending" },
                  { value: "on review", label: "On review" },
                  { value: "resolved", label: "Resolved" }
                ]}
              />
              <div className="col-span-2">
                <AppInput name={"description"} type={"textarea"} label="Description" />
              </div>
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <div className="lg:flex space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Query
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company query are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Query</div>
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
                  Employee
                </th>

                <th className="hidden lg:table-cell">Company</th>
                <th className="hidden sm:table-cell">Query Title</th>
                <th className="hidden lg:table-cell">Query Date</th>
                <th className="hidden sm:table-cell">Status</th>
                <th className="w-20">Action</th>
              </tr>
              {
                qury?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div>
                      <div className="space-y-1">
                        <div className="">{list.employee.employee_name}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.company.company_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.subject}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="">{list.warning_date}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.status}</div>
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
            <AppPagination totalRecords={qury} newData={(e) => setQury(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page