"use client";
import React, { useEffect, useState } from "react";
import ResponseModal from "../organisms/ResponseModal";
import AppInput from "../organisms/AppInput";
import Modal from "../organisms/Modal";
import { useSelector } from "react-redux";
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
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen}>
        <form onSubmit={personalInformation}>
          <div className="grid gap-[20px]">
            <div className="flex items-start justify-between">
              <h2 className="text-[24px] font-[500] text-hrms_blue">
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
