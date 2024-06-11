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
      <div className="space-y-6">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Company</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="title" type={"text"} required label="Title" />
              <AppInput name="summary" type={"text"} required label="Summary" />
              <AppInput name="start_date" type={"date"} required label="Start Date" />
              <AppInput name="end_date" type={"date"} required label="End Date" />
              <AppInput name="company" type={"select"} required label="Company" options={[...companyType]} />
              <AppInput name="department" type={"select"} required label="Department" options={[...companyType]} />
            </div>
            <AppInput name="description" required type={"textarea"} label="Description" />
            <AppInput name="notify" type="checkbox" label="Notify" />
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Announcements
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Announcements are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Announcement</div>
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-6xl mx-auto">
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
          <div className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
            <div className="">
              <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
            </div>
            <div className="space-y-2">
              <div className="font-bold text-sm">Performance Management:</div>
              <div className="text-sm">
                Performance Management: The new system includes tools for setting goals, receiving feedback, and tracking your performance reviews. This will help you stay aligned with your career development goals and ensure you receive the recognition and support you deserve
              </div>
              <div className="text-xs">16/05/2024- 09:24</div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page