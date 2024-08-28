'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addPolicy, fetchPolicy } from '@/services/authService'
import { companies, companyLocation, companyType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)
  const [policy, setPolicies] = useState([])
  const [compnis, setCompnis] = useState([])


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await addPolicy(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setShowModal(false)
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchPolicy().catch(err => console.log(err))
    if (status) {
      setPolicies(data.data[0])
    }
  }
  
  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
  }, [])

  return (
    <AppLayout>
      <div className="space-y-5">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Company</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="title" type={"text"} required label="Title" />
              <AppInput name="company_id" type={"select"} required label="Company Type" options={[...compnis]} />
            </div>
            <AppInput name="description" type={"textarea"} required label="Description" />
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Policy
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company policies are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Policy</div>
            </div>
          </div>
        </div>
        <div className="">
          <table className="w-full divide-y text-sm text-left">
            <tr className="bg-gray-100">
              <th className="flex w-72 gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
                </div>
                Title
              </th>
              <th className="hidden w-72 sm:table-cell">Department</th>

              <th className="hidden lg:table-cell">Description</th>
              <th className="w-20">Action</th>
            </tr>
            {
              policy?.data?.map((poli, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-3 pl-5 py-2">
                    <div className="w-9 relative">
                      <div className=""><AppInput type="checkbox" /></div>
                    </div>
                    <div className="flex-grow gap-2 flex">
                      {poli.title}
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="font-semibold">{poli?.company?.company_name}</div>
                  </td>
                  <td className="hidden sm:table-cell">
                    <div className="trunck-text">{poli.description}</div>
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
          <AppPagination totalRecords={policy} newData={(e) => setPolicies(e)} />
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