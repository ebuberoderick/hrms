"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addQuery, createExpense, deleteExpense, fetchAllAccount, fetchAllPayee, fetchAllPayer, fetchExpense, fetchPaymentMethod, fetchQuery, updateExpense } from '@/services/authService'
import { AllEmployees, allDepartment, companies, queryType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'
import { HiOutlineBan } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [qury, setQury] = useState([])
  const [payerList, setPayerList] = useState([])
  const [accountList, setAccountList] = useState([])
  const [payMethod, setPaymethod] = useState([])
  const [edit, setEdit] = useState({})
  const [del, setDelete] = useState({})
  const [view, setView] = useState({})


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await createExpense(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchExpense().catch(err => console.log(err))
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

  const payerFetch = async () => {
    const { status, data } = await fetchAllPayee().catch(err => console.log(err))
    if (status) {
      const exportData = []
      await data.data[0].forEach(element => {
        exportData.push({ value: element.id, label: element.payee_name })
      });
      setPayerList(exportData);
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


  const delFN = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await deleteExpense(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setDelete({})
    }
    setProcessing(false)
  }

  const update = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await updateExpense(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setEdit({})
    }
    setProcessing(false)
  }


  useEffect(() => {
    fetch()
    paymentMethodFetch()
    payerFetch()
    accountFetch()
  }, [])

  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Deposit</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="amount" type={"text"} required label="Amount" />
              <AppInput name="expense_date" type={"date"} required label="Date" />
              <AppInput name="payment_method_id" type={"select"} required label="Payment Mode" options={[...payMethod]} />
              <AppInput name="payee_id" type={"select"} required label="Payee" options={[...payerList]} />
              <AppInput name="account_id" type={"select"} required label="Account List" options={[...accountList]} />
              <div className="col-span-2">
                <AppInput name={"description"} type={"textarea"} label="Description" />
              </div>
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <Modal closeModal={() => setDelete({})} size={"sm"} isOpen={Object.keys(del).length > 0}>
          <form onSubmit={(e) => delFN(e)} className="space-y-4">
            <input type='hidden' name='id' value={del.id} />
            <div className="text-center">Are you sure you want to delete this Expense Information</div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Delete</button>
          </form>
        </Modal>
        <Modal closeModal={() => setView({})} size={"sm"} isOpen={Object.keys(view).length > 0}>
          <div className="text-hrms_green text-xl">Expense Information</div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2">
              <div className="">
                <div className="font-bold">Amount</div>
                <div className="text-gray-400">{view.amount}</div>
              </div>
              <div className="">
                <div className="font-bold">Expense reference</div>
                <div className="text-gray-400">{view.expense_reference}</div>
              </div>
              <div className="">
                <div className="font-bold">Expense date</div>
                <div className="text-gray-400">{view.expense_date}</div>
              </div>
              <div className="col-span-2">
                <div className="font-bold">Description</div>
                <div className="text-gray-400">{view.description}</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <div className="font-bold">Account Name</div>
                <div className="text-gray-400">{view?.cashbookaccount?.account_name}</div>
              </div>
              <div className="">
                <div className="font-bold">Account balance</div>
                <div className="text-gray-400">{view?.cashbookaccount?.account_balance}</div>
              </div>
              <div className="">
                <div className="font-bold">Initial balance</div>
                <div className="text-gray-400">{view?.cashbookaccount?.initial_balance}</div>
              </div>
              <div className="">
                <div className="font-bold">Account number</div>
                <div className="text-gray-400">{view?.cashbookaccount?.account_number}</div>
              </div>
              <div className="">
                <div className="font-bold">Branch code</div>
                <div className="text-gray-400">{view?.cashbookaccount?.branch_code}</div>
              </div>
              <div className="">
                <div className="font-bold">Bank branch</div>
                <div className="text-gray-400">{view?.cashbookaccount?.bank_branch}</div>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="">
                <div className="font-bold">Payee Name</div>
                <div className="text-gray-400">{view?.cashbookpayee?.payee_name}</div>
              </div>
              <div className="">
                <div className="font-bold">Contact No.</div>
                <div className="text-gray-400">{view?.cashbookpayee?.contact_no}</div>
              </div>
            </div>
          </div>
        </Modal>
        <Modal closeModal={() => setEdit({})} size={"lg"} isOpen={Object.keys(edit).length > 0}>
          <form onSubmit={(e) => update(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Update Expense</div>
            <input name='id' type="hidden" value={edit.id} />
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="amount" defaultValue={edit.amount} type={"text"} required label="Amount" />
              <AppInput name="expense_date" defaultValue={edit.expense_date} type={"date"} required label="Date" />
              <AppInput name="payment_method_id" defaultValue={edit.payment_method_id} type={"select"} required label="Payment Mode" options={[...payMethod]} />
              <AppInput name="payee_id" defaultValue={edit.payee_id} type={"select"} required label="Payee" options={[...payerList]} />
              <AppInput name="account_id" defaultValue={edit.account_id} type={"select"} required label="Account List" options={[...accountList]} />
              <div className="col-span-2">
                <AppInput name={"description"} defaultValue={edit.description} type={"textarea"} label="Description" />
              </div>
            </div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Update</button>
          </form>
        </Modal>

        <div className="lg:flex space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Expense
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
              <div className="">Add Expense</div>
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

                <th className="hidden lg:table-cell">Payer</th>
                <th className="hidden sm:table-cell">Amount</th>
                <th className="hidden lg:table-cell">Reference No</th>
                <th className="hidden sm:table-cell">Payment</th>
                <th className="hidden sm:table-cell">Date</th>
                <th className="w-20">Action</th>
              </tr>
              {
                qury?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="space-y-1">
                        <div className="">{list.cashbookaccount.account_name}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.cashbookpayee.payee_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.amount}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="">{list.expense_reference}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.cashbookpaymentmethod.method_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.created_at.split("T")[0]}</div>
                    </td>
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div onClick={() => setView(list)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                        <div onClick={() => setEdit(list)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div onClick={() => setDelete(list)} className="text-danger p-1 cursor-pointer"><HiOutlineBan /></div>
                      </div>
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
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div className="preload w-1/3 py-3"></div>
                        <div className="preload w-1/3 py-3"></div>
                        <div className="preload w-1/3 py-3"></div>
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