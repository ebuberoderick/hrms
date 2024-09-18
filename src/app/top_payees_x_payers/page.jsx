import AppLayout from '@/components/layouts/appLayout'
import BarChartData from '@/components/molecules/BarChartData'
import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { IoIosArrowDown } from 'react-icons/io'

function page() {
    return (
        <AppLayout title={"Top Payees and Payers"}>
            <div className="space-y-5">
                <div className="">
                    <div className="text-xl">Dashboard</div>
                    <div className=""></div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_blue">
                        <div className="text-2xl text-hrms_blue "><FiUsers /></div>
                        <div className="font-bold text-2xl">15</div>
                        <div className="">Total Payee</div>
                    </div>
                    <div className="bg-opacity-10 px-4 py-7 bg-hrms_green">
                        <div className="text-2xl text-hrms_green "><FiUsers /></div>
                        <div className="font-bold text-2xl">10</div>
                        <div className="">Total Payers</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div className="">
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="flex items-center pr-3">
                                <div className="text-lg flex-grow font-semibold px-5 py-3">Frequently Top Payees</div>
                                <div className="flex items-center text-gray-500 gap-2 pr-3">Months <IoIosArrowDown /></div>
                            </div>
                            <div className="h-96">
                                <BarChartData color="#FFFF47" dae={[["January", "February", "March", "April", "May", "June"], [20, 38, 20, 11, 28, 38]]} />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="bg-white shadow-sm rounded-lg">
                            <div className="flex items-center pr-3">
                                <div className="text-lg flex-grow font-semibold px-5 py-3">Frequently Top Payer</div>
                                <div className="flex items-center text-gray-500 gap-2 pr-3">Months <IoIosArrowDown /></div>
                            </div>
                            <div className="h-96">
                                <BarChartData color="#008000" dae={[["January", "February", "March", "April", "May", "June"], [20, 38, 20, 11, 28, 38]]} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-xl pt-7">List of frequently payees/payers</div>
                <div className="">
                    <table className="w-full divide-y text-sm text-left">
                        <tr className="bg-gray-100">
                            <th className="flex gap-3 pl-5 py-2">
                                Payees
                            </th>
                            <th className="hidden lg:table-cell">Payer</th>
                            <th className="hidden lg:table-cell">Transaction volume</th>
                            <th className="hidden sm:table-cell">In Flow</th>
                            <th className="hidden sm:table-cell">Out Flow</th>
                            <th className="">Transaction Date</th>
                        </tr>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default page