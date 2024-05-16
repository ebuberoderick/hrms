import React from 'react'

function DashboardCard({ children , icon , color ,title }) {
    return (
        <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
                <div className="">
                    <div className={`w-12 h-12 text-[${color}] text-2xl border-2 border-[${color}] bg-[${color}] flex items-center justify-center bg-opacity-20 rounded-full`}>{icon}</div>
                </div>
                <div className="relative top-3">
                    <div className="font-bold text-lg">{title}</div>
                    <div className="relative top-3">{children}</div>
                </div>
            </div>
            
            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                    <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
            </div>
        </div>
    )
}

export default DashboardCard