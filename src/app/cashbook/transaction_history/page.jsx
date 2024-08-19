"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addQuery, fetchQuery, fetchTransactions } from '@/services/authService'
import { AllEmployees, allDepartment, companies, queryType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [qury, setQury] = useState([])

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
    const { status, data } = await fetchTransactions().catch(err => console.log(err))
    if (status) {
      console.log(data?.data[0]);
      setQury(data?.data[0]);
    }
  }



  useEffect(() => {
    fetch()
  }, [])

  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <div className="lg:flex space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Transaction History
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
                  Date
                </th>

                <th className="hidden lg:table-cell">Bank Name</th>
                <th className="hidden sm:table-cell">(&#8358;) Amount </th>
                <th className="hidden lg:table-cell">Transaction</th>
                <th className="hidden sm:table-cell">Type</th>
                <th className="w-28">Reference No</th>
              </tr>
              {
                qury?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      <div className="space-y-1">
                        {/* <div className="">{list.employee.employee_name}</div> */}
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      {/* <div className="font-semibold">{list.company.company_name}</div> */}
                    </td>
                    <td className="hidden sm:table-cell">
                      {/* <div className="">{list.subject}</div> */}
                    </td>
                    <td className="hidden lg:table-cell">
                      {/* <div className="">{list.warning_date}</div> */}
                    </td>
                    <td>
                      {/* <div className="">{list.status}</div> */}
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