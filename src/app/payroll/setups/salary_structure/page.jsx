"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { createSalaryStructure, fetchSalaryStructure } from '@/services/authService'
import { AllEmployees, AllGradeLevel, AllGradeStep, AllJobTitle } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [isloading, setIsLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [salaryStructure, setSalaryStructure] = useState([])
  const [empl, setAllEmpl] = useState([])
  const [jobT, setJobT] = useState([])
  const [gradeL, setGradeLevel] = useState([])
  const [gradeS, setGradeStep] = useState([])
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [errMsg, setErrMsg] = useState(false);


  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setProccessingAdd(true)
    const { status, data } = await createSalaryStructure(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setIsModalOpen(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }




  const fetch = async () => {
    const { status, data } = await fetchSalaryStructure().catch(err => console.log(err))
    if (status) {
      setSalaryStructure(data.data[0])
    }
    setIsLoading(false)
  }



  useEffect(() => {
    fetch()
    AllEmployees().then(res => setAllEmpl([...res]))
    AllJobTitle().then(res => setJobT([...res]))
    AllGradeLevel().then(res => setGradeLevel([...res]))
    AllGradeStep().then(res => setGradeStep([...res]))
  }, [])

  return (
    <AppLayout title={"Payroll Setups"}>
      <Modal size={"lg"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="">
          <form onSubmit={add} className="space-y-4">
            <div className="space-y-2">
              <div className="text-hrms_green text-xl">Add Promotion</div>
              <div className="grid grid-cols-2 gap-4">
                <AppInput name="employee_id" type={"select"} required label="Employee" options={[...empl]} />
                <AppInput name="job_title_id" type={"select"} required label="Job Title" options={[...jobT]} />
                <AppInput name="grade_level_id" type={"select"} label="Grade Level (Optional)" options={[...gradeL]} />
                <AppInput name="grade_step_id" type={"select"} required label="Grade Step" options={[...gradeS]} />
                <AppInput name="basic_pay" type="text" required label="Amount" />
              </div>
            </div>
            <div>
              <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Adding Structure" : "Add Structure"}</button>
            </div>
          </form>
        </div>
      </Modal>

      <div className='space-y-5'>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Salary Structure
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the payroll salary structure are listed here.
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Sturcture</div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
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
            <table className="w-full divide-y text-xs text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                  Employee
                </th>
                <th className="hidden lg:table-cell">Job Title</th>
                <th className="hidden sm:table-cell">Grade Level</th>
                <th className="hidden sm:table-cell">Grade Step</th>
                <th className="hidden sm:table-cell">Basic Salary</th>
                <th className="hidden sm:table-cell">Created Date</th>
                <th className="hidden sm:table-cell">Updated Date</th>
                <th className="hidden sm:table-cell">Created By</th>
                <th className="w-20">Updated By</th>
              </tr>
              {
                salaryStructure.map((list, i) => (
                  <tr key={i}>
                    <th className="flex gap-3 pl-5 py-2">{list.employee.employee_name}</th>
                    <th className="hidden lg:table-cell">{list.jobtitle.title}</th>
                    <th className="hidden sm:table-cell">{list.gradelevel.grade}</th>
                    <th className="hidden sm:table-cell">{list.gradestep.step}</th>
                    <th className="hidden sm:table-cell">{list.basic_pay}</th>
                    <th className="hidden sm:table-cell">{list.created_at.split("T")[0]}</th>
                    <th className="hidden sm:table-cell">{list.updated_at.split("T")[0]}</th>
                    <th className="hidden sm:table-cell">{list.createdby.name}</th>
                    <th className="w-20">{list?.updatedby?.name}</th>
                  </tr>
                ))
              }
              {
                isloading && ["", "", "", "", ""].map((list, i) => (
                  <tr className="" key={i}>
                    <th className="flex gap-3 pl-5 py-2"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden lg:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="hidden sm:table-cell"><div className="preload py-2 w-2/3"></div></th>
                    <th className="w-20"><div className="preload py-2 w-2/3"></div></th>
                  </tr>
                ))
              }
            </table>
          </div>
        </div>

        <ResponseModal
          status={true}
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="Employee invitation sent!"
        />
        <ResponseModal
          status={false}
          isOpen={isErrorModal}
          onClose={() => setIsErrorModal(false)}
          message={`${errMsg}`}
        />
        <ResponseModal
          status={alertMsgData?.success}
          isOpen={alertMsg}
          onClose={() => setAlert(false)}
          message={alertMsgData?.message}
        />
      </div>
    </AppLayout>
  )
}

export default Page