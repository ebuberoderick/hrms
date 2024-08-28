import React from 'react'
import { CiTrophy } from 'react-icons/ci'
import { IoTicketOutline, IoWalletOutline } from 'react-icons/io5'
import { RiSendPlaneLine, RiUserReceivedLine } from 'react-icons/ri'
import { RxSpeakerLoud } from 'react-icons/rx'
import { SlPlane } from 'react-icons/sl'
import { HiOutlineBriefcase } from "react-icons/hi";
import PieChart from '../PieChart'
import { VscMail } from 'react-icons/vsc'

function EmployeeVerifiedDashboard() {
    return (
        <div className='space-y-4'>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-4 gap-4 grid grid-cols-3'>

                    <div className="bg-hrms_green space-y-1 rounded-md bg-opacity-10 px-4 py-2">
                        <div className="text-2xl text-[#5ad44fbd]">
                            <RiUserReceivedLine />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">5</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Leave</div>
                    </div>



                    <div className="bg-[#2886c441] space-y-1 rounded-md bg-opacity-20 px-4 py-2">
                        <div className="text-2xl text-[#2886c4de]">
                            <SlPlane />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">3</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Travel</div>
                    </div>


                    <div className="bg-hrms_yellow space-y-1 rounded-md bg-opacity-30 px-4 py-2">
                        <div className="text-2xl text-[#c4b428de]">
                            <IoTicketOutline />
                        </div>
                        <div className="flex">
                            <div className="flex-grow text-3xl">25</div>
                            <div></div>
                        </div>
                        <div className="text-xs">Total Ticket</div>
                    </div>
                </div>
                <div className='flex rounded-lg py-4 gap-1 text-white bg-hrms_dark_green flex-col items-center justify-center'>
                    <div><IoWalletOutline className='3xl' /></div>
                    <div>Payslip</div>
                    <div className='px-3 bg-white text-sm text-hrms_dark_green rounded-lg'>View Details</div>
                </div>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-2 space-y-4'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className="border border-gray-100 p-4 bg-white shadow-sm rounded-lg">
                            <div className="text-lg font-semibold">Total Projects</div>
                            <div className="">
                                <PieChart
                                    series={[45, 35, 76]}
                                    labels={["Project Done", "In Progress", "Pending"]}
                                />
                            </div>
                        </div>
                        <div className="border border-gray-100 p-4 bg-white shadow-sm rounded-lg">
                            <div className="text-lg font-semibold">Total Task Assigned</div>
                            <div className="">
                                <PieChart series={[45, 35,18]} labels={["Task Done", "In Progress","Pending"]} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='flex items-center gap-2 bg-white border border-gray-100 shadow-md p-4'>
                            <div><RiSendPlaneLine /></div>
                            <div>Request Travel</div>
                        </div>
                        <div className='flex items-center gap-2 bg-white border border-gray-100 shadow-md p-4'>
                            <div><VscMail /></div>
                            <div>Request Leave</div>
                        </div>
                        <div className='flex items-center gap-2 bg-white border border-gray-100 shadow-md p-4'>
                            <div><IoTicketOutline /></div>
                            <div>Open a Ticket</div>
                        </div>
                    </div>
                </div>
                <div className='bg-white space-y-3 rounded-md shadow-md p-4'>
                    <div className='shadow-sm border border-gray-100 flex items-center px-3 py-6 rounded-md'>
                        <div><CiTrophy className='text-4xl text-hrms_dark_green' /></div>
                        <div>Award (0)</div>
                    </div>
                    <div className='shadow-sm border border-gray-100 flex items-center px-3 py-6 rounded-md'>
                        <div><RxSpeakerLoud className='text-4xl text-hrms_dark_green' /></div>
                        <div>Announcement (0)</div>
                    </div>
                    <div className='shadow-sm border border-gray-100 flex items-center px-3 py-6 rounded-md'>
                        <div><HiOutlineBriefcase className='text-4xl text-hrms_dark_green' /></div>
                        <div>Upcoming Holiday (0)</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}

export default EmployeeVerifiedDashboard