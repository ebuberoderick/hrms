'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addLocation, fetchLocation } from '@/services/authService'
import { companyEnum, companyLocation } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)
  const [locations, setLocation] = useState([])



  const fetch = async () => {
    const { status, data } = await fetchLocation().catch(err => console.log(err))
    console.log(data.data[0]);
    if (status) {
      setLocation(data.data[0])
    }
  }
  
  useEffect(() => {
    fetch()
  }, [])

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setBtn(true)
    const { status, data } = await addLocation(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setShowModal(false)
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
  }


  return (
    <AppLayout title={"Organizations Location"}>
      <div className="space-y-5">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Location</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="location_name" type={"text"} required label="Location" />
              <AppInput name="location_head" type={"text"} required label="Location Head" />
              <AppInput name="address1" type={"text"} required label="Address Line" />
              <AppInput name="country" type={"text"} required label="Country" />
              <AppInput name="state" type={"text"} required label="State" />
              <AppInput name="city" type={"text"} required label="City" />
              <AppInput name="zip" type={"number"} required label="Zip Code" />
            </div>
            <button disabled={btn} className={`bg-hrms_green w-full rounded-lg text-white py-2 ${btn && "bg-opacity-35"}`}>Add</button>
          </form>
        </Modal>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Location
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Location are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Create Location</div>
            </div>
          </div>
        </div>
        <table className="w-full divide-y text-sm text-left">
          <tr className="bg-gray-100">
            <th className="flex gap-3 pl-5 py-2">
              <div className="w-9 relative">
                <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
              </div>
              Location
            </th>

            <th className="hidden lg:table-cell">Location Head</th>
            <th className="hidden sm:table-cell">Address Line</th>
            <th className="hidden lg:table-cell">City</th>
            <th className="hidden lg:table-cell">State</th>
            <th className="hidden lg:table-cell">Country</th>
            <th className="w-20">Action</th>
          </tr>
          {
            locations?.data?.map((locate, i) => (
              <tr key={i}>
                <td className="flex items-center gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className=""><AppInput type="checkbox" name="employee" /></div>
                  </div>
                  <div className="flex-grow gap-2 flex">
                    {locate.location_name}
                  </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="font-semibold">{locate.location_head}</div>
                </td>
                <td className="hidden sm:table-cell">
                  <div className="">{locate.address1}</div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="">{locate.city}</div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="">{locate.state}</div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="">{locate.country}</div>
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
        <AppPagination totalRecords={locations} newData={(e) => setLocation(e)} />
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