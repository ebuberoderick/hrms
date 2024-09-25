"use client"
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { createJobTitle, fetchJobTitle } from '@/services/authService'
import { allDepartment, companies } from '@/utility/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Page() {
  const [showModal, setShowModal] = useState(false)
  const [riz, setRiz] = useState([])
  const [processing, setProcessing] = useState(false)
  const [compnis, setCompnis] = useState([])
  const [importModal, setImportModal] = useState(false)
  const [allDept, setAllDept] = useState([])
  const [uploadBtn, setUploadBtn] = useState(false)
  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)

  const add = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setProcessing(true)
    const { status, data } = await createJobTitle(formData).catch(err => console.log(err))
    if (status) {
      fetch()
      setShowModal(false)
    }
    setProcessing(false)
  }

  const fetch = async () => {
    const { status, data } = await fetchJobTitle().catch(err => console.log(err))
    if (status) {
      setRiz(data.data[0]);
    }
  }

  const bulkUpload = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0]
    const formData = new FormData();
    formData.append("csv_file", file)
    setUploadBtn(true)

    await axios.post(`${API_BASE_URL}admin/bulkuploads/jobtitle`, formData, { headers }).then(async (res) => {
      await fetch()
      setImportModal(false)
      setBtn(false)
      setAlert(true)
      setAlertData(res.data)
    }).catch((error) => {
      setAlert(true)
      setAlertData(error)
    })
    setUploadBtn(false)
  }

  useEffect(() => {
    fetch()
    companies().then(res => setCompnis([...res]))
    allDepartment().then(res => setAllDept([...res]))
  }, [])



  return (
    <AppLayout>
      <div className="space-y-4">
        <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
          <form onSubmit={(e) => add(e)} className="space-y-4">
            <div className="text-hrms_green text-xl">Add Job title</div>
            <div className="grid grid-cols-2 gap-4">
              <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
              <AppInput name="department_id" type={"select"} required label="Department To" options={[...allDept]} />
              <AppInput name="title" type={"text"} required label="Title" />
              <AppInput name={"description"} type={"textarea"} label="Description" />
            </div>
            <button disabled={processing} className={`bg-hrms_green w-full rounded-lg text-white py-2 ${processing && "bg-opacity-25"}`}>{processing ? "Creating" : "Add"}</button>
          </form>
        </Modal>
        <Modal closeModal={() => setImportModal(false)} size={"2xl"} isOpen={importModal}>
          <div className="space-y-5">
            <div className="text-hrms_green text-2xl">Import CSV file only</div>
            <div className="bg-gray-100 py-10 space-y-4">
              <div className="text-sm p-4">
                <div className="max-w-lg text-center mx-auto">The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</div>
              </div>
              <div className="flex justify-center">
                <div>

                  {/* <a
                    href={`data:text/csv;charset=utf-8,${escape(["STAFF ID,USER ID,EMPLOYEE NAME,EMPLOYEE STATUS,HIRE DATE,DATE OF BIRTH,MARITAL STATUS,GENDER,DESIGNATION,ASSIGNMENT,SUB ORGANIZATION,CATEGORY,GRADE,STEP,TELEPHONE,NPFA NAME,PIN NUMBER,LEGACY ID,PERSON START DATE,POSITION,EMPLOYEE TYPE,BVN,LAST NAME,FIRST NAME,MIDDLE NAME,STATE OF ORIGIN,DEPARTMENT ID,\n,\n,\n,\n,\n,\n"])}`}
                    download="employee_sample.csv"
                  > */}
                    <div className="bg-hrms_green rounded-lg text-white px-5 py-3"><i className="ri-download-2-line"></i> Download File Sample</div>
                  {/* </a> */}
                </div>
              </div>
            </div>
            <div className="">
              <form onSubmit={bulkUpload} enctype="multipart/form-data" className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Upload File</div>
                  <label htmlFor="upload" className="relative rounded-lg text-hrms_green border border-hrms_green py-3 px-4 inline-block cursor-pointer">
                    <input id="upload" name="csv_file" accept=".csv" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-upload-2-line"></i> <span>Choose File. . .</span>
                  </label>
                </div>
                {/* <div className="space-y-2">
                  <div className="text-sm text-gray-500">Enter Manually</div>
                  <textarea className="w-full bg-gray-50 p-3 rounded-lg outline-none ring-0 resize-none"></textarea>
                </div> */}
                <div className="flex gap-4 justify-end">
                  <div
                    onClick={() => setImportModal(false)}
                    className="disabled:bg-opacity-35 px-6 shadow-md border border-hrms_green text-hrms_green rounded-lg py-3"
                  >
                    Cancel
                  </div>
                  <button
                    disabled={uploadBtn}
                    className="disabled:bg-opacity-35 px-6 shadow-md bg-hrms_green text-white rounded-lg py-3"
                  >
                    {uploadBtn ? "Uploading..." : "Upload"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>

        <div className="lg:flex lg:gap-y-4 space-ysss-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Job titles
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company Job titles are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div onClick={() => setImportModal(true)} className="flex justify-center cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
              <i className="ri-upload-2-fill text-hrms_green"></i>
              <div className="">Upload Bulk</div>
            </div>
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setShowModal(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Job Title</div>
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
                  Company
                </th>

                <th className="hidden lg:table-cell">Department</th>
                <th className="hidden sm:table-cell">Job Title</th>
                <th className="w-20">Status</th>
              </tr>
              {
                riz.map((list, i) => (
                  <tr key={i} className=''>
                    <td className="flex items-center gap-3 pl-5 py-2">
                      {/* <div className="w-9 relative">
                        <div className=""><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                      </div> */}
                      <div className="space-y-1">
                        <div className="">{list.company.company_name}</div>
                      </div>
                    </td>
                    <td className="hidden lg:table-cell">
                      <div className="">{list.department.department_name}</div>
                    </td>
                    <td className="hidden sm:table-cell">
                      <div className="font-semibold">{list.title}</div>
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
            <AppPagination totalRecords={riz} newData={(e) => setRiz(e)} />
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