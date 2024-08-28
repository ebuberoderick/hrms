'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import { FileUpload } from '@/hooks/FileUpload'
import serialize from '@/hooks/Serialize'
import { addCompany, fetchCompanies, updateCompanyData } from '@/services/authService'
import { companyLocation, companyType } from '@/utility/constants'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)
  const [comInfo,setComInfo] = useState({})
  const [companies, setCompanies] = useState([])
  const [appLocation, setlocation] = useState()
  const [logolink, setlogolink] = useState("")
  const fetch = async () => {
    const { status, data } = await fetchCompanies().catch(err => console.log(err))
    if (status) {
      setCompanies(data.data[0])
    }
  }

  useEffect(() => {
    fetch()
    companyLocation().then(res => setlocation(res))
  }, [])

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await addCompany(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      setShowModal(false)
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
  }


  const updateInfo = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    const { status, data } = await updateCompanyData(formData).catch(err => console.log(err))
    if (status) {
      await fetch()
      comInfo({})
      setAlert(true)
      setAlertData(data)
      setBtn(false)
    }
  }
  
  return (
    <AppLayout>
      <div className="space-y-5">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add New Company</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_name" type={"text"} required label="Company Name" />
              <AppInput name="company_type" type={"select"} required label="Company Type" options={[...companyType]} />
              <AppInput name="trading_name" type={"text"} label="Trading Name (Optional)" />
              <AppInput name="registration_no" type={"number"} label="Registration Number (Optional)" />
              <AppInput maxLength={"11"} name="contact_no" type={"number"} required label="Phone Number" />
              <AppInput name="email" type={"email"} required label="Email Address" />
              <AppInput name="tax_no" type={"number"} label="Tax Number (Optional)" />
              <AppInput name="website" type={"link"} label="Website (Optional)" />
              <AppInput name="location_id" type={"select"} label="Location (Optional)" options={appLocation} />
              <input type="hidden" readOnly value={logolink} name="company_logo" />
              <AppInput name="clogo" onChange={(e) => FileUpload(e).then(res => setlogolink(res.link))} type={"file"} label="Company Logo (Optional)" />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
          </form>
        </Modal>
        <Modal closeModal={() => setComInfo({})} size={"xl"} isOpen={Object.keys(comInfo).length > 0}>
          <form onSubmit={(e) => updateInfo(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Update Company Info</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_name" type={"text"} defaultValue={comInfo.company_name} required label="Company Name" />
              <AppInput name="company_type" type={"select"} defaultValue={comInfo.company_type} required label="Company Type" options={[...companyType]} />
              <AppInput name="trading_name" type={"text"} defaultValue={comInfo.trading_name} label="Trading Name (Optional)" />
              <AppInput name="registration_no" type={"number"} defaultValue={comInfo.registration_no} label="Registration Number (Optional)" />
              <AppInput maxLength={"11"} name="contact_no" defaultValue={comInfo.contact_no} type={"number"} required label="Phone Number" />
              <AppInput name="email" type={"email"} defaultValue={comInfo.email} required label="Email Address" />
              <AppInput name="tax_no" type={"number"} defaultValue={comInfo.tax_no} label="Tax Number (Optional)" />
              <AppInput name="website" type={"link"} defaultValue={comInfo.website} label="Website (Optional)" />
              <AppInput name="location_id" type={"select"} defaultValue={comInfo.location_id} label="Location (Optional)" options={appLocation} />
              <input type="hidden" readOnly value={logolink === "" ? comInfo.company_logo:logolink} name="company_logo" />
              <input type="id" readOnly value={comInfo.id} name="id" />
              <AppInput name="clogo" onChange={(e) => FileUpload(e).then(res => setlogolink(res.link))} type={"file"} label="Company Logo (Optional)" />
            </div>
            <button className="bg-hrms_green w-full rounded-lg text-white py-2">Update</button>
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
        <table className="w-full divide-y text-sm text-left">
          <tr className="bg-gray-100">
            <th className="flex gap-3 pl-5 py-2">
              <div className="w-9 relative">
                <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
              </div>
              Company
            </th>

            <th className="hidden lg:table-cell">Email</th>
            <th className="hidden sm:table-cell">Phone</th>
            <th className="hidden lg:table-cell">Company Type</th>
            <th className="w-20">Action</th>
          </tr>
          {
            companies?.data?.map((cpomp, i) => (
              <tr key={i}>
                <td className="flex items-center gap-3 pl-5 py-2">
                  <div className="w-9 relative">
                    <div className=""><AppInput type="checkbox" name="employee" /></div>
                  </div>
                  <div className="flex-grow gap-2 flex">
                    {cpomp.company_name}
                  </div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="font-semibold">{cpomp.email}</div>
                </td>
                <td className="hidden sm:table-cell">
                  <div className="">0{cpomp.contact_no}</div>
                </td>
                <td className="hidden lg:table-cell">
                  <div className="">{cpomp.company_type}</div>
                </td>
                <td>
                  <div className="text-xl flex gap-1">
                    <div onClick={() => setComInfo(cpomp)} className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                    {/* <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div> */}
                  </div>
                </td>
              </tr>
            ))
          }
        </table>
        <AppPagination totalRecords={companies} newData={(e) => setCompanies(e)} />
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