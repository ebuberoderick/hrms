'use client'
import AppLayout from '@/components/layouts/appLayout'
import AppPagination from '@/components/organisms/AppPagination'
import { fetchAnnouncements } from '@/services/authService'
import React, { useEffect, useState } from 'react'

function EmployeeAnnouncement() {
    const [announce, setAnnounce] = useState([])

    const fetch = async () => {
        const { status, data } = await fetchAnnouncements().catch(err => console.log(err))
        if (status) {
            setAnnounce(data.data[0])
        }
    }

    useEffect(() => {
        fetch()
    }, [])
    return (
        <AppLayout title={"Organizations Announcement"}>
            <div className="space-y-6">

                <div className="lg:flex space-y-3 items-center justify-between">
                    <div className="">
                        <p className=" text-[24px] font-[500] text-[#000000]">
                            Announcements
                        </p>
                        <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
                            All the company Announcements are listed here
                        </p>
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
        </AppLayout>
    )
}

export default EmployeeAnnouncement