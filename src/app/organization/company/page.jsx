'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import { companyLocation, companyType } from '@/utility/constants'
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
            <div className="text-hrms_green text-xl">Add New Company</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_name" type={"text"} required label="Company Name" />
              <AppInput name="company_type" type={"select"} required label="Company Type" options={[...companyType]} />
              <AppInput name="trading_name" type={"text"} label="Trading Name (Optional)" />
              <AppInput name="registration_no" type={"number"} label="Registration Number (Optional)" />
              <AppInput name="contact_no" type={"number"} required label="Phone Number" />
              <AppInput name="email" type={"email"} required label="Email Address" />
              <AppInput name="tax_no" type={"text"} label="Tax Number (Optional)" />
              <AppInput name="website" type={"email"} label="Website (Optional)" />
              <AppInput name="location" type={"select"} label="Location (Optional)" options={[...companyLocation]} />
              <AppInput name="company_logo" type={"file"} label="Company Logo (Optional)" />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Company
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company  are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Company</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page