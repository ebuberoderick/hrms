import AppLayout from '@/components/layouts/appLayout'
import BarChart from '@/components/molecules/BarChart'
import BarChartData from '@/components/molecules/BarChartData'
import LineChart from '@/components/molecules/LineChart'
import React from 'react'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

function page() {
    return (
        <AppLayout title={"Expense"}>
            <div className="space-y-5">
                <div className="">
                    <div className="text-xl">Dashboard</div>
                    <div className=""></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-opacity-10 px-4 py-7 bg-danger">
                        <div className="text-2xl text-danger "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 82,050</div>
                        <div className="">Total Expenses</div>
                    </div>
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_green">
                        <div className="text-2xl text-hrms_green "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 68,000</div>
                        <div className="">Total Paid</div>
                    </div>
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_green">
                        <div className="text-2xl text-hrms_green "><FaMoneyBillTrendUp /></div>
                        <div className="font-bold text-2xl">&#8358; 14,050</div>
                        <div className="">Utilities</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="">
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="flex items-center pr-3">
                                <div className="text-lg flex-grow font-semibold px-5 py-3">Salary Summary Graph</div>
                                <div className="flex items-center text-gray-500 gap-2 pr-3">Months <IoIosArrowDown /></div>
                            </div>
                            <div className="h-96">
                                <BarChartData color="#008000" dae={[["January", "February", "March", "April", "May", "June"], [20, 38, 20, 11, 28, 38]]} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="flex items-center pr-3">
                                <div className="text-lg flex-grow font-semibold px-5 py-3">Utility Summary Graph</div>
                                <div className="flex items-center text-gray-500 gap-2 pr-3">Months <IoIosArrowDown /></div>
                            </div>
                            <div className="h-96">
                                <BarChartData color="#FFFF47" dae={[["January", "February", "March", "April", "May", "June"], [20, 38, 20, 11, 28, 38]]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default page