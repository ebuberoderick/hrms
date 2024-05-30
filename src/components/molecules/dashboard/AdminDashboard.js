import AppLayout from "@/components/layouts/appLayout";
import Calender from "@/components/molecules/Calender";
import DashboardCard from "@/components/molecules/DashboardCard";
import LineChart from "@/components/molecules/LineChart";
import PieChart from "@/components/molecules/PieChart";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";
import Holidays from "./Holidays";
import LeaveRequest from "./LeaveRequest";
import TravelRequest from "./TravelRequest";
import Traings from "./Traings";
import Projects from "./Projects";
import Tasks from "./Tasks";
import Events from "./Events";
import Meetings from "./Meetings";

export const metadata = {
  title: "Dashboard",
};

function AdminDashboard() {
  return (
    <div className="grid xl:grid-cols-3 gap-4">
      <div className="xl:col-span-2 space-y-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#f43f5e] text-2xl border-2 border-[#f43f5e] bg-[#f43f5e] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-sun-line"></i>
                </div>
              </div>
              <div className="relative top-2">
                <div className="font-bold text-lg">Employees</div>
                <div className="relative top-3">15</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#a21caf] text-2xl border-2 border-[#a21caf] bg-[#a21caf] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-file-list-3-line"></i>
                </div>
              </div>
              <div className="relative top-3">
                <div className="font-bold text-lg">Attendance</div>
                <div className="relative top-3">P:12 A:31</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#0e7490] text-2xl border-2 border-[#0e7490] bg-[#0e7490] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-leaf-line"></i>
                </div>
              </div>
              <div className="relative top-3">
                <div className="font-bold text-lg">Total Leave</div>
                <div className="relative top-3">2</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#15803d] text-2xl border-2 border-[#15803d] bg-[#15803d] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-arrow-left-right-line"></i>
                </div>
              </div>
              <div className="relative top-3">
                <div className="font-bold text-lg">Total Expense</div>
                <div className="relative top-3">&#8358;405</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#19C19F] text-2xl border-2 border-[#19C19F] bg-[#19C19F] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-currency-line"></i>
                </div>
              </div>
              <div className="relative top-3">
                <div className="font-bold text-lg">Total Deposit</div>
                <div className="relative top-3">&#8358;3454</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>

          <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
            <div className="flex gap-2">
              <div className="">
                <div
                  className={`w-12 h-12 text-[#6d28d9] text-2xl border-2 border-[#6d28d9] bg-[#6d28d9] flex items-center justify-center bg-opacity-20 rounded-full`}
                >
                  <i className="ri-copper-diamond-line"></i>
                </div>
              </div>
              <div className="relative top-3">
                <div className="font-bold text-lg">Total Salaries Paid</div>
                <div className="relative top-3">&#8358;5677</div>
              </div>
            </div>

            <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
              <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-white shadow-sm rounded-lg">
          <div className="text-lg font-semibold px-5 py-3">Payment</div>
          <div className="h-96">
            <LineChart />
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div className=" p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Employee Department</div>
            <div className="h-96">
              <PieChart
                series={[45, 35, 76]}
                labels={["CSE", "Finance", "Analyst"]}
              />
            </div>
          </div>
          <div className=" p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Employee Designation</div>
            <div className="h-96">
              <PieChart
                series={[54, 43, 97, 23, 56]}
                labels={[
                  "Android Developer",
                  "Data Analyst",
                  "Finance Manager",
                  "Senior Programmer",
                  "Marketing Analyst",
                ]}
              />
            </div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Expense Vs Deposit</div>
            <div className="h-96">
              <PieChart series={[45, 35]} labels={["Expense", "Deposit"]} />
            </div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Project Status</div>
            <div className="h-96">
              <PieChart
                series={[45, 5]}
                labels={["In Progress", "Not Started"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="space-y-4 grid md:grid-cols-2 xl:grid-cols-1 xl:max-w-xs">
          <div className="bg-white shadow-sm rounded-lg ">
            <Calender />
          </div>
          <div className="bg-white p-4 shadow-sm rounded-lg space-y-4">
            <div className="text-xl font-bold">Options</div>
            <div className="space-y-2 *:cursor-pointer">
              <Holidays />
              <LeaveRequest />
              <TravelRequest />
              <Traings />
              <Projects />
              <Tasks />
              <Events />
              <Meetings />
            </div>
          </div>
          <div className="bg-white space-y-4 p-4 shadow-sm rounded-lg">
            <Link
              href="#"
              className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg"
            >
              <div className="text-hrms_green">
                <i className="ri-mic-fill"></i>
              </div>
              <div className="">0 Announcement</div>
            </Link>
            <Link
              href="#"
              className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg"
            >
              <div className="text-hrms_green">
                <i className="ri-coupon-line"></i>
              </div>
              <div className="">0 Open ticket</div>
            </Link>
            <Link
              href="#"
              className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg"
            >
              <div className="text-danger">
                <i className="ri-file-damage-line"></i>
              </div>
              <div className="">0 Completed Project</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;