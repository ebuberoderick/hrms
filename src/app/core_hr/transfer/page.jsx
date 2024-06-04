"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addAward } from '@/services/authService'
import { awardType, companyEnum } from '@/utility/constants'
import React, { useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);

  }

  const fetch = () => {

  }

  return (
    <AppLayout>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Transfer</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="employee_email" type={"email"} required label="Employee Email" />
              <AppInput name="company" type={"select"} required label="Company" options={[...companyEnum]} />
              <AppInput name="department_from" type={"text"} required label="Department From" />
              <AppInput name="department_to" type={"text"} required label="Department To" />
              <AppInput name={"description"} type={"textarea"} label="Description" />
              <AppInput name="transfer_date" type={"date"} required label="Transfer Date" />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Transfer
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Transfers are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Transfer</div>
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
                <th className="hidden sm:table-cell">From</th>
                <th className="hidden sm:table-cell">To</th>
                <th className="hidden sm:table-cell">Transfer Date</th>
                <th className="w-20">Action</th>
              </tr>
              <tr>
                <td className="flex items-center gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div>
                  <div className="flex-grow gap-2 flex">
                    Goodness John
                  </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="font-semibold">HR1</div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className=""> Accounting </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className=""> Accounting </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="">16/05/2024 - 09:24</div>
                </td>
                <td>
                  <div className="text-xl flex gap-1">
                    <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                    <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page