import Calender from "@/components/molecules/Calender";
import LineChart from "@/components/molecules/LineChart";
import PieChart from "@/components/molecules/PieChart";
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
import TopCards from "./TopCards";
import { IoIosArrowDown } from "react-icons/io";
import { RxSpeakerLoud } from "react-icons/rx";
import { PiBriefcaseThin } from "react-icons/pi";
import { IoTicketOutline } from "react-icons/io5";
import BarChart from "../BarChart";

export const metadata = {
  title: "Dashboard",
};

function AdminDashboard() {
  return (
    <div className="space-y-4">
      <div>
        Hello! Admin Welcome 🫡
      </div>
      <TopCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div className="md:col-span-2 lg:col-span-3">
          <div className="bg-white shadow-sm rounded-lg">
            <div className="flex items-center pr-3">
              <div className="text-lg flex-grow font-semibold px-5 py-3">Payment Statistics Chart</div>
              <div className="flex items-center text-gray-500 gap-2 pr-3">Last 6 Months <IoIosArrowDown /></div>
            </div>
            <div className="h-72">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="hidden xl:block">
          <div className="bg-white shadow-sm rounded-lg ">
            <Calender />
          </div>
        </div>
      </div>
      <div>
        <div className="grid xl:grid-cols-3 gap-4">
          <div className=" p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Employee Department</div>
            <div className="">
              <PieChart
                series={[45, 35, 76]}
                labels={["CSE", "Finance", "Analyst"]}
              />
            </div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Expense Vs Deposit</div>
            <div className="">
              <PieChart series={[45, 35]} labels={["Expense", "Deposit"]} />
            </div>
          </div>
          <div className="p-4 bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold">Project Status</div>
            <div className="">
              <PieChart
                series={[45, 5]}
                labels={["In Progress", "Not Started"]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="grid xl:grid-cols-2 gap-4">
        <div className="bg-white p-4 py-7 shadow-sm rounded-lg space-y-4">
          <div className="text-lg font-semibold">Employee Designation</div>
          <BarChart />
        </div>
        <div className="bg-white p-4 py-7 shadow-sm rounded-lg space-y-4">
          <div className="text-xl font-bold">Schedule</div>
          <div className="grid md:grid-cols-2 gap-4 *:border-none *:shadow-md *:cursor-pointer">
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
      </div>
      <div>
        <div className="bg-white p-4 rounded-md grid lg:grid-cols-3 gap-4">
          <Link
            href="#"
            className="p-3 font-bold flex items-center gap-2 shadow-lg justify-center h-32 rounded-lg"
          >
            <div className="text-3xl">
              <RxSpeakerLoud />
            </div>
            <div className="">Announcement (0)</div>
          </Link>
          <Link
            href="#"
            className="p-3 font-bold flex items-center gap-2 shadow-lg justify-center h-32 rounded-lg"
          >
            <div className="text-3xl">
              <IoTicketOutline />
            </div>
            <div className="">Open ticket (0)</div>
          </Link>
          <Link
            href="#"
            className="p-3 font-bold flex items-center gap-2 shadow-lg justify-center h-32 rounded-lg"
          >
            <div className="text-3xl">
              <PiBriefcaseThin />
            </div>
            <div className="">Completed Project (0)</div>
          </Link>
        </div>
      </div>
    </div>
    
  );
}

export default AdminDashboard;
