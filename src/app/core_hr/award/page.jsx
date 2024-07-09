"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addAward, fetchAward } from '@/services/authService'
import { AllEmployees, allDepartment, awardType, companies, companyEnum } from '@/utility/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [awards, setAwards] = useState([])
  const [compnis, setCompnis] = useState([])
  const [allDept, setAllDept] = useState([])
  const [empl, setAllEmpl] = useState([])
  const [awty, setAwty] = useState([])
  const [imgUrl, setImgUrl] = useState("")

  const perset_key = process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY
  const cloud_name = process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME

  const uploadImg = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", perset_key)
    await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then(res => {
      setImgUrl(res.data.url);
    }).catch(err => console.log(err))
  }



  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    console.log(formData);
    const { status, data } = await addAward(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchAward().catch(err => console.log(err))
    if (status) {
      setAwards(data?.data[0]);
    }
  }



  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    AllEmployees().then(res => setAllEmpl([...res]))
    awardType().then(res => setAwty([...res]))
    allDepartment().then(res => setAllDept([...res]))
  }, [])


  return (
    <AppLayout title={"Core HR"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Award</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="employee_id" type={"select"} required label="Employee Email" options={[...empl]} />
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="department_id" type={"select"} required label="Department" options={[...allDept]} />
              <AppInput name="award_type_id" type={"select"} required label="Award Type" options={[...awty]} />
              <AppInput name="gift" type={"text"} label="Gift (Optional)" />
              <AppInput name="cash" type={"text"} label="Cash (Optional)" />
              <AppInput name="award_date" type={"date"} required label="Award Date" />
              <AppInput name="photo" onChange={e => uploadImg(e)} type={"file"} required label="Award Photo" />
              <input type="hidden" value={imgUrl} name='award_photo' />
              <AppInput name="award_information" type={"text"} required label="Award Information" />
              <div className="col-span-2">
                <AppInput name={"description"} type={"textarea"} label="Description" />
              </div>
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>

        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Award
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
              <div className="">Create Award</div>
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
                <th className="hidden lg:table-cell">Department</th>
                <th className="hidden sm:table-cell">Award Name</th>
                <th className="hidden sm:table-cell">Date Awarded</th>
                <th className="w-20">Action</th>
              </tr>
              {
                awards?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div>
                      <div className="flex-grow gap-2 flex">
                        {list.employee.employee_name}
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.award_type.award_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className=""> {list.department.department_name} </div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="">{list.award_date}</div>
                    </td>
                    <td>
                      <div className="text-xl flex gap-1">
                        <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                      </div>
                    </td>
                  </tr>
                ))
              }
            </table>
          </div>
          <div className="">
            <AppPagination totalRecords={awards} newData={(e) => setAwards(e)} />
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page