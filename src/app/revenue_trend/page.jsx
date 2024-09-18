import AppLayout from '@/components/layouts/appLayout'
import MultipleLineChart from '@/components/molecules/MultipleLineChart'
import React from 'react'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

function page() {
    return (
        <AppLayout title={"Revenue Trend"}>
            <div className="space-y-5">
                <div className="">
                    <div className="text-xl">Dashboard</div>
                    <div className=""></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_blue">
                        <div className="text-2xl text-hrms_blue "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 12,244</div>
                        <div className="">Total Revenue</div>
                    </div>
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_green">
                        <div className="text-2xl text-hrms_green "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 8,482</div>
                        <div className="">Available Revenue</div>
                    </div>
                </div>
                <div className="">
                    <div className="bg-white shadow-sm rounded-lg">
                        <div className="flex items-center pr-3">
                            <div className="text-lg flex-grow font-semibold px-5 py-3">Revenue Overview</div>
                            <div className="flex items-center text-gray-500 gap-2 pr-3">Last 6 Months <IoIosArrowDown /></div>
                        </div>
                        <div className="h-96">
                            <MultipleLineChart />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default page