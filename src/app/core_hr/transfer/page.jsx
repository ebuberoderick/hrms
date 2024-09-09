"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addAward, addTransfer, fetchTransfer } from '@/services/authService'
import { AllEmployees, allDepartment, awardType, companies, companyEnum } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [trans, setTran] = useState([])
  const [compnis, setCompnis] = useState([])
  const [allDept, setAllDept] = useState([])
  const [empl, setAllEmpl] = useState([])
  const [alertMsg, setAlert] = useState(false)
  const [proccessingAdd, setProccessingAdd] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)

  const add = async (e) => {
    e.preventDefault();
    setProccessingAdd(true)
    const formData = serialize(e.target);
    const { status, data } = await addTransfer(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }

  const fetch = async () => {
    const { status, data } = await fetchTransfer().catch(err => console.log(err))
    if (status) {
      setTran(data?.data[0]);
    }
  }



  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
    allDepartment().then(res => setAllDept([...res]))
  }, [])


  return (
    <AppLayout>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Transfer</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="employee_id" type={"select"} required label="Employee" options={[...empl]} />
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="from_department_id" type={"select"} required label="Department From" options={[...allDept]} />
              <AppInput name="to_department_id" type={"select"} required label="Department To" options={[...allDept]} />
              <AppInput name={"description"} type={"textarea"} label="Description" />
              <AppInput name="transfer_date" type={"date"} required label="Transfer Date" />
            </div>
            <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Transfering..." : "Transfer"}</button>
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
                  {/* <div className="w-9 relative">
                    <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                  </div> */}
                  Employee
                </th>

                <th className="hidden lg:table-cell">Company</th>
                <th className="hidden lg:table-cell">From</th>
                <th className="hidden sm:table-cell">To</th>
                <th className="hidden sm:table-cell">Transfer Date</th>
                {/* <th className="w-20">Action</th> */}
              </tr>
              {
                trans?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      <div className="flex-grow gap-2 flex">
                        {list.employee.employee_name}
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.company.company_name}</div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className=""> {list.from_department.department_name} </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className=""> {list.to_department.department_name} </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.transfer_date}</div>
                    </td>
                    {/* <td>
                      <div className="text-xl flex gap-1">
                        <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                      </div>
                    </td> */}
                  </tr>
                ))
              }

            </table>
          </div>
          <div className="">
            <AppPagination totalRecords={trans} newData={(e) => setTran(e)} />
          </div>
        </div>
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