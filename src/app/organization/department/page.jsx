'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import { companyEnum, companyLocation } from '@/utility/constants'
import React, { useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)

  const add = (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    // const {status,data} = 
    console.log(formData);
  }

  const fetch = () => {

  }


  return (
    <AppLayout>
      <div className="">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Department</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="department_name" type={"text"} required label="Department Name" />
              <AppInput name="company_type" type={"select"} required label="Company Type" options={[...companyEnum]} />
              <AppInput name="department_head" type={"select"} label="Department Head (Optional)" options={[{ value: "select", label: "Select" }]} />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Department
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the department are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Department</div>
            </div>
          </div>
        </div>
      </div>

    </AppLayout>
  )
}

export default Page