import React from 'react'
import { FiUsers } from 'react-icons/fi'
import { TbCalendarTime } from "react-icons/tb";
import { RiUserReceivedLine } from "react-icons/ri";
import { PiHandDeposit, PiHashStraightLight, PiPrinter } from "react-icons/pi";

function TopCards() {
    return (
        <div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
                <div className="bg-hrms_yellow space-y-1 rounded-md bg-opacity-30 px-4 py-2">
                    <div className="text-2xl text-[#c4b428de]">
                        <FiUsers />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">1782</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Employees</div>
                </div>

                <div className="bg-hrms_green space-y-1 rounded-md bg-opacity-10 px-4 py-2">
                    <div className="text-2xl text-[#5ad44fbd]">
                        <TbCalendarTime  />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">21</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Attendance</div>
                </div>



                <div className="bg-danger space-y-1 rounded-md bg-opacity-10 px-4 py-2">
                    <div className="text-2xl text-danger">
                        <RiUserReceivedLine />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">3</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Leave</div>
                </div>



                <div className="bg-[#2886c441] space-y-1 rounded-md bg-opacity-20 px-4 py-2">
                    <div className="text-2xl text-[#2886c4de]">
                        <PiPrinter />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">$1,782</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Expense</div>
                </div>



                <div className="bg-danger space-y-1 rounded-md bg-opacity-30 px-4 py-2">
                    <div className="text-2xl text-danger">
                        <PiHandDeposit />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">$1,782</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Deposit</div>
                </div>



                <div className="bg-[#66c42828] space-y-1 rounded-md bg-opacity-30 px-4 py-2">
                    <div className="text-2xl text-[#66c428de]">
                        <PiHashStraightLight />
                    </div>
                    <div className="flex">
                        <div className="flex-grow text-3xl">$1,782</div>
                        <div></div>
                    </div>
                    <div className="text-xs">Total Salaries Paid</div>
                </div>
            </div>
        </div>
    )
}

export default TopCards