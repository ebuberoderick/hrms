"use client";
import AppLayout from "@/components/layouts/appLayout";
import Calender from "@/components/molecules/Calender";
import DashboardCard from "@/components/molecules/DashboardCard";
import LineChart from "@/components/molecules/LineChart";
import PieChart from "@/components/molecules/PieChart";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ResponseModal from "../organisms/ResponseModal";
import AppInput from "../organisms/AppInput";
import Modal from "../organisms/Modal";
import { useSelector } from "react-redux";
import { personalInfo } from "@/services/authService";
import serialize from "@/hooks/Serialize";

const EmployeeDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const userType = useSelector((state) => state.User?.value);
  useEffect(() => {
    console.log(userType.AccountNumber);
    if (userType.AccountNumber === undefined) {
      setIsModalOpen(true);
    }
  }, []);

  const personalInformation = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    console.log(formData);
    setIsModalOpen(false);
    setIsSuccessModalOpen(true);
    // setProccessing(true);
    // const { status, data } = await personalInfo(formData).catch((err) =>
    //   console.log(err)
    // );
    // setProccessing(false);
    // if (status) {
    //   setErrMsg("");
    //   setIsSuccessModalOpen(true);
    // } else {
    //   setErrMsg(data.message);
    //   console.log(data.message);
    //   setIsErrorModal(true);
    // }
  };

  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const maxDate = getTodayDate();
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 space-y-4">
          <div className="grid grid-cols-3 gap-4">
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div>

            {/* <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div> */}

            {/* <div className="p-3 h-32 rounded-lg overflow-hidden bg-white shadow-sm relative">
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

              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_blue rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_blue rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_blue rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div className=" bg-white shadow-sm rounded-lg">
            <div className="text-lg font-semibold px-5 py-3">Payment</div>
            <div className="h-96">
              <LineChart />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Employee Department</div>
              <div className="">
                <PieChart
                  series={[45, 35, 76]}
                  labels={["CSE", "Finance", "Analyst"]}
                />
              </div>
            </div>
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Employee Designation</div>
              <div className="">
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
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Expense Vs Deposit</div>
              <div className="">
                <PieChart series={[45, 35]} labels={["Expense", "Deposit"]} />
              </div>
            </div>
            <div className="h-96 p-4 bg-white shadow-sm rounded-lg">
              <div className="text-lg font-semibold">Project Status</div>
              <div className="">
                <PieChart
                  series={[45, 5]}
                  labels={["In Progress", "Not Started"]}
                />
              </div>
            </div>
          </div> */}
        </div>
        {/* <div className="">
          <div className="space-y-4 max-w-xs">
            <div className="bg-white shadow-sm rounded-lg ">
              <Calender />
            </div>
            <div className="bg-white p-4 shadow-sm rounded-lg space-y-4">
              <div className="text-xl font-bold">Options</div>
              <div className="space-y-2 *:cursor-pointer">
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-sun-line"></i>
                  </div>
                  <div className="">Holidays</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-mail-line"></i>
                  </div>
                  <div className="">Leave Request</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-flight-takeoff-fill"></i>
                  </div>
                  <div className="">Travel Request</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-trophy-line"></i>
                  </div>
                  <div className="">Trainigs</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-article-line"></i>
                  </div>
                  <div className="">Projects</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-list-radio"></i>
                  </div>
                  <div className="">Tasks</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-calendar-line"></i>
                  </div>
                  <div className="">Events</div>
                </div>
                <div className="border gap-2 rounded-lg p-3 flex items-center hover:bg-hrms_blue hover:bg-opacity-10">
                  <div className="">
                    <i className="ri-time-line"></i>
                  </div>
                  <div className="">Meetings</div>
                </div>
              </div>
            </div>
            <div className="bg-white space-y-4 p-4 shadow-sm rounded-lg">
              <Link
                href="#"
                className="p-3 flex items-center gap-2 bg-gray-50 rounded-lg"
              >
                <div className="text-hrms_blue">
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
        </div> */}
      </div>

      <Modal isOpen={isModalOpen}>
        <form onSubmit={personalInformation}>
          <div className="grid gap-[20px]">
            <div className="flex items-start justify-between">
              <h2 className="text-[24px] font-[500] text-[#112255]">
                Enter Key Personal Infomation
              </h2>
              <i
                className="ri-close-fill cursor-pointer text-[25px] text-[#000000]"
                onClick={() => setIsModalOpen(false)}
              ></i>
            </div>
            <div className="grid grid-cols-2 gap-[20px]">
              <AppInput
                name="dob"
                type="date"
                required
                label="Date Of Birth"
                max={maxDate}
              />
              <AppInput
                name="gender"
                required
                type="select"
                label="Gender "
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
              <AppInput
                name="state_of_origin"
                required
                label="	State of Origin"
              />

              <AppInput
                name="state_of_residence"
                required
                label="	State of Residence"
              />
            </div>

            <div className=" grid gap-[10px]">
              <p>Contact details </p>
              <div className=" grid grid-cols-2 gap-[20px]">
                <AppInput name="phone" required label="Phone" />
                <AppInput name="email" required label="	Email" />
              </div>
            </div>

            <div className=" grid gap-[10px]">
              <p>Next of Kin </p>
              <div className=" grid grid-cols-2 gap-[20px]">
                <AppInput name="name" required label="Name" />
                <AppInput name="relationship" required label="	Relationship" />
                <AppInput name="contact" required label="contact information" />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                disabled={proccessing}
                className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_blue text-white rounded-lg py-3"
              >
                {proccessing ? "Submitting..." : "Submit"}
              </button>
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                disabled={proccessing}
                className="flex-grow disabled:bg-opacity-35 shadow-md border border-hrms_blue text-hrms_blue rounded-lg py-3"
              >
                Cancel
              </button>
            </div>
            {/* </div> */}
          </div>
        </form>
      </Modal>

      <ResponseModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        message="Personal Info Uploaded!"
        icon="ri-checkbox-circle-line"
        iconColor="text-hrms_green"
      />
      <ResponseModal
        isOpen={isErrorModal}
        onClose={() => setIsErrorModal(false)}
        message={`${errMsg}`}
        icon="ri-close-fill"
        iconColor=" text-danger"
      />
    </div>
  );
};

export default EmployeeDashboard;
