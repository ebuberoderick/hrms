"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addAward, createAccount, deleteAccount, fetchAccount, fetchAward, updateAccount } from '@/services/authService'
import { AllEmployees, allDepartment, awardType, companies, companyEnum } from '@/utility/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiOutlineBan } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [processing, setProcessing] = useState(false)

  const [isloading, setIsLoading] = useState(true)
  const [acct, setAcct] = useState([])
  const [edit, setEdit] = useState({})
  const [del, setDelete] = useState({})
  const [view, setView] = useState({})

  const add = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await createAccount(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
    setProcessing(false)
  }


  const update = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await updateAccount(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setEdit({})
    }
    setProcessing(false)
  }


  const delFN = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await deleteAccount(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setDelete({})
    }
    setProcessing(false)
  }

  

  const fetch = async () => {
    const { status, data } = await fetchAccount().catch(err => console.log(err))
    if (status) {
      setAcct(data?.data[0]);
      setIsLoading(false)
    }

  }



  useEffect(() => {
    fetch()
  }, [])


  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Account</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput required name="account_name" type={"text"} label="Enter account name" />
              <AppInput required name="initial_balance" type={"text"} label="Enter initial balance" />
              <AppInput required name="account_number" type={"text"} label="Enter account number" />
              <AppInput required name="branch_code" type={"text"} label="Enter branch code" />
              <AppInput required name="bank_branch" type={"text"} label="Enter branch name" />
            </div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Add</button>
          </form>
        </Modal>
        <Modal closeModal={() => setDelete({})} size={"sm"} isOpen={Object.keys(del).length > 0}>
          <form onSubmit={(e) => delFN(e)} className="space-y-4">
            <input type='hidden' name='id' value={del.id} />
            <div className="text-center">Are you sure you want to delete this account Information</div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Delete</button>
          </form>
        </Modal>
        <Modal closeModal={() => setView({})} size={"sm"} isOpen={Object.keys(view).length > 0}>
        <div className="text-hrms_green text-xl">Account Information</div>
        <div className="grid grid-cols-2 gap-4">
            <div className="">
              <div className="">account name</div>
              <div className="text-gray-400 text-sm">{view.account_name}</div>
            </div>
            <div className="">
              <div className="">Initial balance</div>
              <div className="text-gray-400 text-sm">{view.initial_balance}</div>
            </div>
            <div className="">
              <div className="">Account balance</div>
              <div className="text-gray-400 text-sm">{view.account_balance}</div>
            </div>
            <div className="">
              <div className="">Account number</div>
              <div className="text-gray-400 text-sm">{view.account_number}</div>
            </div>
            <div className="">
              <div className="">Branch code</div>
              <div className="text-gray-400 text-sm">{view.branch_code}</div>
            </div>
            <div className="">
              <div className="">Bank branch</div>
              <div className="text-gray-400 text-sm">{view.bank_branch}</div>
            </div>
          </div>
        </Modal>
        <Modal closeModal={() => setEdit({})} size={"xl"} isOpen={Object.keys(edit).length > 0}>
          <form onSubmit={(e) => update(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Update Account</div>
            <div className="grid grid-cols-2 gap-4">
              <input type='hidden' name='id' value={edit.id} />
              <AppInput name="account_name" defaultValue={edit.account_name} type={"text"} label="Enter account name" />
              <AppInput name="initial_balance" defaultValue={edit.initial_balance} type={"text"} label="Enter initial balance" />
              <AppInput name="account_balance" defaultValue={edit.account_balance} type={"text"} label="Enter account balance" />
              <AppInput name="account_number" defaultValue={edit.account_number} type={"text"} label="Enter account number" />
              <AppInput name="branch_code" defaultValue={edit.branch_code} type={"text"} label="Enter branch code" />
              <AppInput name="bank_branch" defaultValue={edit.bank_branch} type={"text"} label="Enter branch name" />
            </div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Update</button>
          </form>
        </Modal>

        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Accounts List
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Account</div>
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
                  BankName
                </th>
                <th className="hidden lg:table-cell">Account No.</th>
                <th className="hidden sm:table-cell">Branch Code</th>
                <th className="hidden sm:table-cell">Balanace</th>
                <th className="hidden sm:table-cell">Bank Branch</th>
                <th className="w-20">Action</th>
              </tr>
              {
                acct?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-3">
                      <div className="flex-grow gap-2">{list.account_name}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.account_number}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.branch_code}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.account_balance}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.bank_branch}</div>
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
                isloading && ["", "", "", "", ""].map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-3"><div className="flex-grow preload w-2/3 py-2 gap-2"></div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold preload w-2/3 py-2"></div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"> </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"> </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload w-2/3 py-2"></div>
                    </td>
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div className="text-hrms_green p-1 cursor-pointer preload py-3 w-1/3"></div>
                        <div className="text-hrms_green p-1 cursor-pointer preload py-3 w-1/3"></div>
                        <div className="text-danger p-1 cursor-pointer preload py-3 w-1/3"></div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
          <div className="">
            <AppPagination totalRecords={acct} newData={(e) => setAcct(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page