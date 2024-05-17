import AppLayout from '@/components/layouts/appLayout'
import Calender from '@/components/molecules/Calender';
import DashboardCard from '@/components/molecules/DashboardCard';
import LineChart from '@/components/molecules/LineChart';
import PieChart from '@/components/molecules/PieChart';
import { DateCalendar } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react'


export const metadata = {
  title: "Dashboard"
};


function Page() {
  return (
    <AppLayout>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <DashboardCard title={"Employees"} color={"#f43f5e"} icon={<i className="ri-sun-line"></i>}>
              15
            </DashboardCard>
            <DashboardCard title={"Attendance"} color={"#a21caf"} icon={<i className="ri-file-list-3-line"></i>}>
              P:12 A:31
            </DashboardCard>
            <DashboardCard title={"Total Leave"} color={"#0e7490"} icon={<i className="ri-leaf-line"></i>}>
              2
            </DashboardCard>
            <DashboardCard title={"Total Expense"} color={"#15803d"} icon={<i className="ri-arrow-left-right-line"></i>}>
              &#8358;405
            </DashboardCard>
            <DashboardCard title={"Total Deposit"} color={"#dc2626"} icon={<i className="ri-currency-line"></i>}>
              &#8358;3454
            </DashboardCard>
            <DashboardCard title={"Total Salaries Paid"} color={"#6d28d9"} icon={<i className="ri-copper-diamond-line"></i>}>
              &#8358;5677
            </DashboardCard>
          </div>
          <div className=" bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold px-5 py-3">Payment</div>
            <div className="h-96">
              <LineChart />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Employee Department</div>
              <div className="">
                <PieChart series={[45, 35, 76]} labels={['CSE', 'Finance', 'Analyst']} />
              </div>
            </div>
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Employee Designation</div>
              <div className="">
                <PieChart series={[54, 43, 97, 23, 56]} labels={['Android Developer', 'Data Analyst', 'Finance Manager', 'Senior Programmer', 'Marketing Analyst']} />
              </div>
            </div>
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Expense Vs Deposit</div>
              <div className="">
                <PieChart series={[45, 35]} labels={['Expense', 'Deposit']} />
              </div>
            </div>
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Project Status</div>
              <div className="">
                <PieChart series={[45, 5]} labels={['In Progress', 'Not Started']} />
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="space-y-4 max-w-xs">
            <div className="bg-white shadow-sm rounded-lg ">
              <Calender />
            </div>
            <div className="bg-white p-4 shadow-sm rounded-lg space-y-4">
              <div className="text-xl font-bold">Options</div>
              <div className="space-y-2 *:cursor-pointer">
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-sun-line"></i></div>
                  <div className="">Holidays</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-mail-line"></i></div>
                  <div className="">Leave Request</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-flight-takeoff-fill"></i></div>
                  <div className="">Travel Request</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-trophy-line"></i></div>
                  <div className="">Trainigs</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-article-line"></i></div>
                  <div className="">Projects</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-list-radio"></i></div>
                  <div className="">Tasks</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-calendar-line"></i></div>
                  <div className="">Events</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className=""><i className="ri-time-line"></i></div>
                  <div className="">Meetings</div>
                </div>
              </div>
            </div>
            <div className="bg-white space-y-4 p-4 shadow-sm rounded-lg">
              <Link href="#" className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg">
                <div className="text-hrms_blue"><i className="ri-mic-fill"></i></div>
                <div className="">0 Announcement</div>
              </Link>
              <Link href="#" className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg">
                <div className="text-hrms_green"><i className="ri-coupon-line"></i></div>
                <div className="">0 Open ticket</div>
              </Link>
              <Link href="#" className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg">
                <div className="text-danger"><i className="ri-file-damage-line"></i></div>
                <div className="">0 Completed Project</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default Page