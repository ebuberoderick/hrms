"use client"
import AppLayout from '@/components/layouts/appLayout'
import React, { useState } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

function Page() {
    const [active, setActive] = useState("all")
    return (
        <AppLayout title={"Notifications"}>
            <div className="grid grid-cols-4 gap-4">
                <div className="space-y-4">
                    <div className="flex gap-3 items-center">
                        <div onClick={() => setActive("all")} className={`${active === "all" ? "bg-hrms_dark_green text-white" : "text-hrms_dark_green"} cursor-pointer px-3 py-1`}>All (10)</div>
                        <div onClick={() => setActive("new")} className={`${active === "new" ? "bg-hrms_dark_green text-white" : "text-hrms_dark_green"} cursor-pointer px-3 py-1`}>New (5)</div>
                    </div>
                    <div className="space-y-3">
                        {
                            ["", "", "", "", "", ""].map((list, i) => (
                                <div key={i} className="shadow-lg flex items-center hover:bg-hrms_lighter_green hover:bg-opacity-10 cursor-pointer gap-2 p-3 border border-gray-100">
                                    <div className="">
                                        <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200"></div>
                                    </div>
                                    <div className="flex-grow space-y-2">
                                        <div className="font-bold leading-4">User onboarding verification</div>
                                        <div className="text-xs text-gray-400">Please kindliy review...</div>
                                    </div>
                                    <div className=""><IoIosCloseCircleOutline /></div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="col-span-3"></div>
            </div>
        </AppLayout>
    )
}

export default Page