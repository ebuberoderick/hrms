"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addComplaint, fetchAccount, fetchComplaint } from '@/services/authService'
import { AllEmployees, allDepartment, companies } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [isloading, setIsLoading] = useState(true)
  const [cons, setCon] = useState([])

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
    const { status, data } = await fetchAccount().catch(err => console.log(err))
    if (status) {
      setCon(data?.data[0]);
      setIsLoading(false)
    }

  }

  useEffect(() => {
    fetch()
  }, [])


  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"sm"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Payee</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="payee_name" type={"text"} required label="Payee Name" />
              <AppInput name="contact_no" type={"text"} required label="Phone No." />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Save Payer</button>
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
                  {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                  Bank Name
                </th>
                <th className="">Balance</th>
              </tr>
              {
                cons?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      <div className="space-y-1">
                        <div className="">{list.account_name}</div>
                      </div>
                    </td>
                    <td>
                      <div className="">{list.account_balance}</div>
                    </td>
                  </tr>
                ))

              }
              {
                isloading && ["", "", "", "", ""].map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-3"><div className="preload w-1/3 py-2 gap-2"></div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold preload w-2/3 py-2"></div>
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