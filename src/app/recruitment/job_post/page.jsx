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
            <div className="text-hrms_green text-xl">Add Job</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_type" type={"select"} required label="Company Type" options={[...companyType]} />
              <AppInput name="jobtitle" type={"text"} required label="Job Title" />

              <div className="grid grid-cols-2 gap-4">
                <AppInput name="gender" type={"select"} required label="Gender" options={[
                  { value: "No Preference", label: "No Preference" },
                  { value: "Male", label: "Male" },
                  { value: "Female", label: "Female" },
                  { value: "Other", label: "Other" }
                ]} />
                <AppInput name="job_type" type={"select"} required label="Job Type" options={[
                  { value: "Full Time", label: "Full Time" },
                  { value: "Part Time", label: "Part Time" },
                  { value: "Internship", label: "Internship" },
                  { value: "Freelance", label: "Freelance" }
                ]} />
              </div>

              <AppInput name="job_category" type={"select"} required label="Job Category" options={[
                { value: "PHP", label: "PHP" },
                { value: "SEO", label: "SEO" },
                { value: "Analyst", label: "Analyst" },
                { value: "Director", label: "Director" }
              ]} />
              <AppInput name="min_experience" type={"select"} required label="Minimum Experience" options={[
                { value: "Fresh", label: "Fresh" },
                { value: "1 Year", label: "1 Year" },
                { value: "2 Years", label: "2 Years" },
                { value: "3 Years", label: "3 Years" },
                { value: "4 Years", label: "4 Years" },
                { value: "5 Years", label: "5 Years" },
                { value: "6 Years", label: "6 Years" },
                { value: "7 Years", label: "7 Years" },
                { value: "8 Years", label: "8 Years" },
                { value: "9 Years", label: "9 Years" },
                { value: "10 Years", label: "10 Years" },
                { value: "+10 Years", label: "+10 Years" }
              ]} />
              <AppInput name="closing_date" type={"date"} required label="Date of closing" />
              <AppInput name="no_of_vacancy" type={"number"} required label="No. of Vacancy" />
              <div className="grid grid-cols-2 gap-4">
                <AppInput name="status" type={"select"} required label="Status" options={[
                  { value: "Unpublished", label: "Unpublished" },
                  { value: "Published", label: "Published" }
                ]} />
                <AppInput name="featured" type={"select"} required label="Featured" options={[
                  { value: "No", label: "No" },
                  { value: "Yes", label: "Yes" }
                ]} />
              </div>
              <AppInput name="short_description" type={"textarea"} required label="Short Description" />
              <AppInput name="long_description" type={"textarea"} required label="Long Description" />

            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Job Post
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Jobs are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Job</div>
            </div>
          </div>
        </div>
        <div className="">

        </div>
      </div>
    </AppLayout>
  )
}

export default Page