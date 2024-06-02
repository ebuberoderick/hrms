"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import React, { useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  return (
    <AppLayout>
      <div className="">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <div className="space-y-4">
            <div className="text-hrms_green text-xl">Add Travel</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="employee" type={"email"} required label="Employee Email" />
              <AppInput name="company" type={"text"} required label="Company" />
              <AppInput name="arrangement" type="select" required label="Arrangement Type"
                options={[
                  { value: "gift", label: "Gift" },
                  { value: "cash", label: "Cash" }
                ]}
              />
              <AppInput name="purpose" type={"text"} required label="Pourpose of Visit" />
              <AppInput name="start" type={"date"} required label="Start Date" />
              <AppInput name={"endDate"} type={"date"} label="End Date" />
              <AppInput name="travel_mode" type="select" required label="Travel Mode"
                options={[
                  { value: "gift", label: "Gift" },
                  { value: "cash", label: "Cash" }
                ]}
              />
              <AppInput name={"budget"} type={"number"} label="Budget" />
              <AppInput name={"description"} type={"textarea"} label="Description" />
              <AppInput name="status" type="select" required label="Status"
                options={[
                  { value: "gift", label: "Gift" },
                  { value: "cash", label: "Cash" }
                ]}
              />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </div>
        </Modal>

        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Travel
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Award are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Travel</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page