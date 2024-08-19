"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addQuery, createExpense, createTransfer, deleteExpense, fetchAllAccount, fetchAllPayee, fetchAllPayer, fetchCashbookTransfer, fetchExpense, fetchPaymentMethod, fetchQuery, updateExpense } from '@/services/authService'
import { AllEmployees, allDepartment, companies, queryType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'
import { HiOutlineBan } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [qury, setQury] = useState([])
  const [accountList, setAccountList] = useState([])
  const [payMethod, setPaymethod] = useState([])


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await createTransfer(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchCashbookTransfer().catch(err => console.log(err))
    if (status) {
      setQury(data?.data[0]);
      setIsLoading(false)
    }
  }


  const paymentMethodFetch = async () => {
    const { status, data } = await fetchPaymentMethod().catch(err => console.log(err))
    if (status) {
      const exportData = []
      await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.method_name })
      });
      setPaymethod(exportData);
    }
  }


  const accountFetch = async () => {
    const { status, data } = await fetchAllAccount().catch(err => console.log(err))
    if (status) {
      const exportData = []
      await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.account_name })
      });
      setAccountList(exportData);
    }
  }


  useEffect(() => {
    fetch()
    paymentMethodFetch()
    accountFetch()
  }, [])

  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Transfer</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="amount" type={"text"} required label="Amount" />
              <AppInput name="payment_method_id" type={"select"} required label="Payment Mode" options={[...payMethod]} />
              <AppInput name="from_account_id" type={"select"} required label="From Account" options={[...accountList]} />
              <AppInput name="to_account_id" type={"select"} required label="To Account" options={[...accountList]} />
              <AppInput name="date" type={"date"} required label="Date" />
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
              Transfer History
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
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-2 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Transfer</div>
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

                <th className="hidden lg:table-cell">From Account</th>
                <th className="hidden sm:table-cell">To Account</th>
                <th className="hidden lg:table-cell">Amount</th>
                <th className="hidden sm:table-cell">Payment Mode</th>
                <th className="hidden sm:table-cell">Reference No</th>
              </tr>
              {
                qury?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="space-y-1">
                        <div className="">{list.date.split("T")[0]}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.from_account.account_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="font-semibold">{list.to_account.account_name}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="">{list.amount}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.payment_method.method_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.reference}</div>
                    </td>
                  </tr>
                ))
              }

              {
                isLoading && ["", "", "", "", "", ""].map((list, i) => (
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
          <div className="">
            <AppPagination totalRecords={qury} newData={(e) => setQury(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page