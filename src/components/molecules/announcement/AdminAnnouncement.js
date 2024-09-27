
'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppInput from '@/components/organisms/AppInput'
import AppPagination from '@/components/organisms/AppPagination'
import Modal from '@/components/organisms/Modal'
import ResponseModal from '@/components/organisms/ResponseModal'
import serialize from '@/hooks/Serialize'
import { addAnnouncements, fetchAnnouncements } from '@/services/authService'
import { allDepartment, companies, companyLocation, companyType } from '@/utility/constants'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function AdminAnnouncement() {
    const [showModal, setShowModal] = useState(false)
    const [alertMsg, setAlert] = useState(false)
    const [alertMsgData, setAlertData] = useState(false)
    const [btn, setBtn] = useState(false)
    const [compnis, setCompnis] = useState([])
    const [allDept, setAllDept] = useState([])
    const [announce, setAnnounce] = useState([])



    const [uploadBtn, setUploadBtn] = useState(false)
    const [importModal, setImportModal] = useState(false)

    const bulkUpload = async (e) => {
        e.preventDefault();
        const file = e.target[0].files[0]
        const formData = new FormData();
        formData.append("csv_file", file)
        setUploadBtn(true)

        await axios.post(`${API_BASE_URL}admin/bulkuploads/announcement`, formData, { headers }).then(async (res) => {
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


    const add = async (e) => {
        e.preventDefault();
        const formData = serialize(e.target);
        const { status, data } = await addAnnouncements(formData).catch(err => console.log(err))
        if (status) {
            await fetch()
            setShowModal(false)
            setAlert(true)
            setAlertData(data)
            setBtn(false)
        }
    }


    const fetch = async () => {
        const { status, data } = await fetchAnnouncements().catch(err => console.log(err))
        if (status) {
            setAnnounce(data.data[0])
        }
    }



    useEffect(() => {
        fetch()
        companies().then(res => setCompnis([...res]))
        allDepartment().then(res => setAllDept([...res]))
    }, [])
    return (
        <AppLayout title={"Organizations Announcement"}>
            <div className="space-y-6">
                <Modal closeModal={() => setShowModal(false)} size={"xl"} isOpen={showModal}>
                    <form onSubmit={(e) => add(e)} className="space-y-4">
                        <div className="text-hrms_green text-xl">Add Announcement</div>
                        <div className="grid grid-cols-2 gap-4">
                            <AppInput name="title" type={"text"} required label="Title" />
                            <AppInput name="summary" type={"text"} required label="Summary" />
                            <AppInput name="start_date" type={"date"} required label="Start Date" />
                            <AppInput name="end_date" type={"date"} required label="End Date" />
                            <AppInput name="company_id" type={"select"} required label="Company" options={[...compnis]} />
                            <AppInput name="department_id" type={"select"} required label="Department" options={[...allDept]} />
                        </div>
                        <AppInput name="description" required type={"textarea"} label="Description" />
                        <AppInput name="notify" type="checkbox" label="Notify" />
                        <button className="bg-hrms_green w-full rounded-lg text-white py-2">Add</button>
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
                        <div onClick={() => setImportModal(true)} className="flex justify-center cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
                            <i className="ri-upload-2-fill text-hrms_green"></i>
                            <div className="">Upload Bulk</div>
                        </div>
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
                    {
                        announce?.data?.map((annuon, i) => (
                            <div key={i} className="bg-white shadow-md border rounded-lg p-3 flex gap-x-5">
                                <div className="">
                                    <div className="w-24 h-24 rounded-lg bg-hrms_green bg-opacity-30 text-hrms_green flex items-center justify-center text-5xl"><i className="ri-mic-line"></i></div>
                                </div>
                                <div className="space-y-2">
                                    <div className="font-bold text-sm">{annuon.title}:</div>
                                    <div className="text-sm">
                                        {annuon.title}: {annuon.description}
                                    </div>
                                    <div className="text-xs">{annuon.start_date} - {annuon.end_date}</div>
                                </div>
                            </div>
                        ))
                    }
                    <AppPagination totalRecords={announce} newData={(e) => setAnnounce(e)} />
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

export default AdminAnnouncement