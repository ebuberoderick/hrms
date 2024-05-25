"use client";
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import Modal from "@/components/organisms/Modal";
import ResponseModal from "@/components/organisms/ResponseModal";
import serialize from "@/hooks/Serialize";
import { employeeInvite } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const router = useRouter();
  // const data = useSelector((state) => state.User?.value?.user.name);
  // console.log("hello", data);
  const inviteEmployee = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setIsModalOpen(false);
    setProccessing(true);
    const { status, data } = await employeeInvite(formData).catch((err) =>
      console.log(err)
    );
    setProccessing(false);
    if (status) {
      setErrMsg("");
      setIsSuccessModalOpen(true);
    } else {
      setErrMsg(data.message);
      console.log(data.message);
      setIsErrorModal(true);
    }
  };

  return (
    <AppLayout>
      <>
        <div className=" flex items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Employee(140)
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company employee are listed here
            </p>
          </div>
          <div className="flex gap-[10px] text-sm">
            <div className="flex cursor-pointer font-bold gap-2 items-center border border-hrms_blue text-hrms_blue px-7 py-3 rounded-[4px]">
              <i className="ri-upload-2-fill text-hrms_blue"></i>
              <div className="">Import Employees</div>
            </div>
            <div
              className="flex cursor-pointer font-bold gap-2 items-center text-white bg-hrms_blue px-7 py-3 rounded-[4px]"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Employee</div>
            </div>
          </div>
        </div>

        <div className="my-[32px] max-w-[461px] flex items-center gap-[20px]">
          <div className="w-[334px] relative py-[12px] pr-[30px] border border-hrms_blue rounded-[10px]">
            <input
              type="text"
              placeholder="Search..."
              className="pl-2 w-full placeholder:text-hrms_blue outline-none text capitalize"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center h-full w-8">
              <i className="ri-search-line"></i>
            </div>
          </div>

          <div className="flex items-center gap-[10px] py-[12px] px-[14px] border border-hrms_blue rounded-[10px]">
            <i className="ri-equalizer-line"></i>
            <p className="font-[700] text-[16px] text-hrms_blue">Filter</p>
          </div>
        </div>

        <Modal isOpen={isModalOpen}>
          <form onSubmit={inviteEmployee}>
            <div className="grid gap-[20px]">
              <div className="flex items-start justify-between">
                <h2 className="text-[24px] font-[500] text-hrms_blue">
                  Invite Employee
                </h2>
                <i
                  className="ri-close-fill cursor-pointer text-[25px] text-[#000000]"
                  onClick={() => setIsModalOpen(false)}
                ></i>
              </div>
              <div className="grid gap-[20px]">
                <AppInput name="email" required label="Employee Email" />
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
              </div>
            </div>
          </form>
        </Modal>

        <ResponseModal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="Employee invitation sent!"
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
      </>
    </AppLayout>
  );
};

export default Page;
