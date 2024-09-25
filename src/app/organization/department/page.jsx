'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addDepartment, fetchDepartment, updateDepartment } from '@/services/authService'
import { AllEmployees, companies, companyEnum } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)
  const [compnis, setCompnis] = useState([])
  const [employees, setEmployees] = useState([])
  const [departments, setdepartments] = useState([])
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [editDept, setEditDept] = useState({})

  const add = async (e) => {
    e.preventDefault();
    setProccessingAdd(true)
    const formData = serialize(e.target);
    const { status, data } = await addDepartment(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setShowModal(false)
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
    setProccessingAdd(false)
  }
  const update = async (e) => {
    e.preventDefault();
    setProccessingAdd(true)
    const formData = serialize(e.target);
    const { status, data } = await updateDepartment(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setEditDept({})
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
    setProccessingAdd(false)
  }

  const fetch = async () => {
    const { status, data } = await fetchDepartment().catch(err => console.log(err))
    if (status) {
      setdepartments(data.data[0])
    }
  }

  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setEmployees([...res]))
  }, [])


  return (
    <AppLayout title={"Organizations Department"}>
      <div className="space-y-5">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Department</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="department_name" type={"text"} required label="Department Name" />
              <AppInput name="company_id" type={"select"} required label="Company Type" options={[...compnis]} />
              <AppInput name="employee_id" type={"select"} label="Department Head (Optional)" options={[...employees]} />
            </div>
            <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Adding..." : "Add"}</button>
          </form>
        </Modal>
        <Modal closeModal={() => setEditDept({})} size={"xl"} isOpen={Object.keys(editDept).length > 0}>
          <form onSubmit={(e) => update(e)} className="space-y-4">
            <input type="hidden" name='id' value={editDept.id} />
            <div className="text-hrms_green text-xl">Edit Department</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="department_name" type={"text"} defaultValue={editDept.department_name} required label="Department Name" />
              <AppInput name="company_id" type={"select"} defaultValue={editDept.company_id} required label="Company Type" options={[...compnis]} />
              <AppInput name="employee_id" type={"select"} defaultValue={editDept.department_head} label="Department Head (Optional)" options={[...employees]} />
            </div>
            <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Updating..." : "Update"}</button>
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
        <table className="w-full divide-y text-sm text-left">
          <tr className="bg-gray-100">
            <th className="flex gap-3 pl-5 py-2">
              {/* <div className="w-9 relative">
                <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
              </div> */}
              Department
            </th>

            <th className="hidden lg:table-cell">Head of Department</th>
            <th className="hidden sm:table-cell">Company</th>
            <th className="w-20">Action</th>
          </tr>
          {
            departments?.data?.map((dept, i) => (
              <tr key={i}>
                <td className="flex items-center gap-3 pl-5 py-2">
                  {/* <div className="w-9 relative">
                    <div className=""><AppInput type="checkbox" /></div>
                  </div> */}
                  <div className="flex-grow gap-2 flex">
                    {dept.department_name}
                  </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="font-semibold">{dept?.employee?.employee_name}</div>
                </td>
                <td className="hidden sm:table-cell">
                  <div className="">{dept?.company?.company_name}</div>
                </td>
                <td>
                  <div className="text-xl flex gap-1">
                    <div onClick={() => setEditDept(dept)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                    {/* <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div> */}
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
        <AppPagination totalRecords={departments} newData={(e) => setdepartments(e)} />
      </div>
      <ResponseModal
        status={alertMsgData?.success}
        isOpen={alertMsg}
        onClose={() => setAlert(false)}
        message={alertMsgData?.message}
      />
    </AppLayout>
  )
}

export default Page