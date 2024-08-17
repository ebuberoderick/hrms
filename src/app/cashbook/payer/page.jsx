"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import serialize from '@/hooks/Serialize'
import { addAward, createPayer, deletePayer, fetchAward, fetchPayer, updatePayer } from '@/services/authService'
import { AllEmployees, allDepartment, awardType, companies, companyEnum } from '@/utility/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { HiOutlineBan } from 'react-icons/hi'
import { LuEye } from 'react-icons/lu'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [awards, setAwards] = useState([])
  const [edit, setEdit] = useState({})
  const [del, setDelete] = useState({})
  const [view, setView] = useState({})

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await createPayer(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
  }

  const fetch = async () => {
    const { status, data } = await fetchPayer().catch(err => console.log(err))
    if (status) {
      setAwards(data?.data[0]);
      setIsLoading(false)
    }
  }


  const update = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await updatePayer(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setEdit({})
    }
    setProcessing(false)
  }


  const delFN = async (e) => {
    e.preventDefault();
    setProcessing(true)
    const formData = serialize(e.target);
    const { status, data } = await deletePayer(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setDelete({})
    }
    setProcessing(false)
  }


  useEffect(() => {
    fetch()
  }, [])


  return (
    <AppLayout title={"Cashbook"}>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"sm"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Payer</div>
            <div className="space-y-4 gap-4">
              <AppInput name="payer_name" type={"text"} required label="Payer Name" />
              <AppInput name="contact_no" type={"text"} required label="Phone No." />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Save Payer</button>
          </form>
        </Modal>



        <Modal closeModal={() => setDelete({})} size={"sm"} isOpen={Object.keys(del).length > 0}>
          <form onSubmit={(e) => delFN(e)} className="space-y-4">
            <input type='hidden' name='id' value={del.id} />
            <div className="text-center">Are you sure you want to delete this Payer Information</div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Delete</button>
          </form>
        </Modal>
        <Modal closeModal={() => setView({})} size={"sm"} isOpen={Object.keys(view).length > 0}>
          <div className="text-hrms_green text-xl">Payer Information</div>
          <div className="grid gap-4">
            <div className="">
              <div className="">Payer name</div>
              <div className="text-gray-400 text-sm">{view.payer_name}</div>
            </div>
            <div className="">
              <div className="">Contact </div>
              <div className="text-gray-400 text-sm">{view.contact_no	}</div>
            </div>
          </div>
        </Modal>
        <Modal closeModal={() => setEdit({})} size={"sm"} isOpen={Object.keys(edit).length > 0}>
          <form onSubmit={(e) => update(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Update Account</div>
            <div className="grid gap-4">
              <input type='hidden' name='id' value={edit.id} />
              <AppInput name="payer_name" defaultValue={edit.payer_name} type={"text"} label="Enter Payer Name" />
              <AppInput name="contact_no" defaultValue={edit.contact_no} type={"text"} label="Enter Phone No." />
            </div>
            <button disabled={processing} className="bg-hrms_green w-full rounded-lg text-white py-2 disabled:bg-opacity-20">Update</button>
          </form>
        </Modal>



        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Payer
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Payer</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="">
            <table className="w-full divide-y text-sm text-left">
              <tr className="bg-gray-100">
                <th className="flex gap-3 pl-5 py-2">
                  Payer Name
                </th>
                <th className="hidden lg:table-cell">Phone No.</th>
                <th className="hidden sm:table-cell">Created Date</th>
                <th className="w-20">Action</th>
              </tr>
              {
                awards?.data?.map((list, i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="flex-grow gap-2 flex">
                        {list.payer_name}
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="font-semibold">{list.contact_no}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className=""> {list.created_at.split("T")[0]} </div>
                    </td>
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div onClick={() => setView(list)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                        <div onClick={() => setEdit(list)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                        <div onClick={() => setDelete(list)} className="text-danger p-1 cursor-pointer"><HiOutlineBan /></div>
                      </div>
                    </td>
                  </tr>
                ))
              }

              {
                isLoading && ["","","","","",""].map((list,i) => (
                  <tr key={i}>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      <div className="preload py-2 w-2/3"></div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="preload py-2 w-2/3"></div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="preload py-2 w-2/3"></div>
                    </td>
                    <td>
                      <div className="text-xl flex items-center gap-1">
                        <div className="preload w-1/3 py-3"></div>
                        <div className="preload w-1/3 py-3"></div>
                        <div className="preload w-1/3 py-3"></div>
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