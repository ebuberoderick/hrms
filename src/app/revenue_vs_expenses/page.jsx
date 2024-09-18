import AppLayout from '@/components/layouts/appLayout'
import PieChart from '@/components/molecules/PieChart'
import React from 'react'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

function page() {
    return (
        <AppLayout title={"Revenue vs Expenses"}>
            <div className="space-y-5">
                <div className="">
                    <div className="text-xl">Dashboard</div>
                    <div className=""></div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_green">
                        <div className="text-2xl text-hrms_green "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 12,244</div>
                        <div className="">Total Revenue</div>
                    </div>
                    <div className="bg-opacity-10 px-4 py-7 bg-danger">
                        <div className="text-2xl text-danger "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 12,244</div>
                        <div className="">Total Expenses</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-white shadow-sm rounded-lg">
                        <div className="flex items-center pr-3">
                            <div className="text-lg flex-grow font-semibold px-5 py-3">Revenue vs Expenses Chart</div>
                            <div className="flex items-center text-gray-500 gap-2 pr-3">Last 6 Months <IoIosArrowDown /></div>
                        </div>
                        <div className="h-80">
                            <PieChart series={[30, 70]} labels={["Expense", "Revenue"]} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default page