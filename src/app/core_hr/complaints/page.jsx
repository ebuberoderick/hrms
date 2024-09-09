"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
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
  const [alertMsg, setAlert] = useState(false)
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const add = async (e) => {
    e.preventDefault();
    setProccessingAdd(true)
    const formData = serialize(e.target);
    const { status, data } = await addComplaint(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
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
    <AppLayout>
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
            <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Adding Complaint" : "Add Complaint"}</button>
          </form>
        </Modal>

        <div className="lg:flex space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Complaint
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Complaint are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Complaint</div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="">
            <table className="w-full divide-y text-sm text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                  Complaint Form
                </th>

                <th className="hidden lg:table-cell">Complaint Against</th>
                <th className="hidden lg:table-cell">company</th>
                <th className="hidden sm:table-cell">Complaint Title</th>
                <th className="hidden sm:table-cell">Complaint Date</th>
                {/* <th className="w-20">Action</th> */}
              </tr>
              {
                cons?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      <div className="space-y-1">
                        <div className="">{list.complaint_from.employee_name}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.complaint_against.employee_name}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="">{list.company.company_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.complaint_title}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.complaint_date}</div>
                    </td>
                    {/* <td>
                      <div className="text-xl flex gap-1">
                        <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                      </div>
                    </td> */}
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
        <ResponseModal
          status={alertMsgData?.success}
          isOpen={alertMsg}
          onClose={() => setAlert(false)}
          message={alertMsgData?.message}
        />
    </AppLayout>
  )
}

export default Page