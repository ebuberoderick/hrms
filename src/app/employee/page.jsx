"use client";
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Input, Button, DropdownTrigger, Dropdown, DropdownMenu, DropdownItem, Chip, User, Pagination } from "@nextui-org/table";
import Modal from "@/components/organisms/Modal";
import ResponseModal from "@/components/organisms/ResponseModal";
import serialize from "@/hooks/Serialize";
import { employeeInvite } from "@/services/authService";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import AppCheckBox from "@/components/organisms/AppCheckBox";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [importModal, setImportModal] = useState(false)

  const selectAll = (e) => {
    // console.log(e.target);
  }


  const router = useRouter();
  // const data = useSelector((state) => state.User?.value?.user.name);
  // console.log("hello", data);
  const inviteEmployee = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setProccessing(true);
    const { status, data } = await employeeInvite(formData).catch((err) =>
      console.log(err)
    );
    setProccessing(false);
    setIsModalOpen(false);
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
            <div onClick={(e) => setImportModal(true)} className="flex cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
              <i className="ri-upload-2-fill text-hrms_green"></i>
              <div className="">Import Employees</div>
            </div>
            <div
              className="flex cursor-pointer font-bold gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
              onClick={() => setIsModalOpen(true)}
            >
              <i className="ri-add-line"></i>
              <div className="">Add Employee</div>
            </div>
          </div>
        </div>

        <div className="my-[32px] max-w-[461px] flex items-center gap-[20px]">
          <div className="w-[334px] relative py-[12px] pr-[30px] border border-hrms_green rounded-[10px]">
            <input
              type="text"
              placeholder="Search..."
              className="pl-2 w-full placeholder:text-hrms_green outline-none text capitalize"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center h-full w-8">
              <i className="ri-search-line"></i>
            </div>
          </div>

          <div className="flex items-center gap-[10px] py-[12px] px-[14px] border border-hrms_green rounded-[10px]">
            <i className="ri-equalizer-line"></i>
            <p className="font-[700] text-[16px] text-hrms_green">Filter</p>
          </div>
        </div>

        <div className="">
          <table className="w-full divide-y text-sm text-left">
            <tr className="bg-gray-100">
              <th className="flex gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow">Image</div>
              </th>
              <th className="">Username</th>
              <th className="">Permission Role</th>
              <th className="w-20">Action</th>
            </tr>
            <tr>
              <td className="flex items-center gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow gap-2 flex">
                  <div className="">
                    <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="">
                    <div className="font-semibold">Ashraf Shadat</div>
                    <div className="">Username:</div>
                    <div className="">Gender:</div>
                    <div className="">Salary:</div>
                    <div className="">Payslip:</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-semibold">HR1</div>
                <div className="">Username:</div>
                <div className="">Role:</div>
              </td>
              <td>
                <div className=""><i className="ri-mail-line text-gray-400"></i> ergjdfgk@dfg.dfj</div>
                <div className=""><i className="ri-phone-line text-gray-400"></i> 08054634563</div>
              </td>
              <td>
                <div className="text-xl flex gap-1">
                  <div className="text-hrms_blue p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                  <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow gap-2 flex">
                  <div className="">
                    <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="">
                    <div className="font-semibold">Ashraf Shadat</div>
                    <div className="">Username:</div>
                    <div className="">Gender:</div>
                    <div className="">Salary:</div>
                    <div className="">Payslip:</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-semibold">HR1</div>
                <div className="">Username:</div>
                <div className="">Role:</div>
              </td>
              <td>
                <div className=""><i className="ri-mail-line text-gray-400"></i> ergjdfgk@dfg.dfj</div>
                <div className=""><i className="ri-phone-line text-gray-400"></i> 08054634563</div>
              </td>
              <td>
                <div className="text-xl flex gap-1">
                  <div className="text-hrms_blue p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                  <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow gap-2 flex">
                  <div className="">
                    <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="">
                    <div className="font-semibold">Ashraf Shadat</div>
                    <div className="">Username:</div>
                    <div className="">Gender:</div>
                    <div className="">Salary:</div>
                    <div className="">Payslip:</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-semibold">HR1</div>
                <div className="">Username:</div>
                <div className="">Role:</div>
              </td>
              <td>
                <div className=""><i className="ri-mail-line text-gray-400"></i> ergjdfgk@dfg.dfj</div>
                <div className=""><i className="ri-phone-line text-gray-400"></i> 08054634563</div>
              </td>
              <td>
                <div className="text-xl flex gap-1">
                  <div className="text-hrms_blue p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                  <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput onChange={(e) => selectAll(e)} type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow gap-2 flex">
                  <div className="">
                    <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
                  </div>
                  <div className="">
                    <div className="font-semibold">Ashraf Shadat</div>
                    <div className="">Username:</div>
                    <div className="">Gender:</div>
                    <div className="">Salary:</div>
                    <div className="">Payslip:</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-semibold">HR1</div>
                <div className="">Username:</div>
                <div className="">Role:</div>
              </td>
              <td>
                <div className=""><i className="ri-mail-line text-gray-400"></i> ergjdfgk@dfg.dfj</div>
                <div className=""><i className="ri-phone-line text-gray-400"></i> 08054634563</div>
              </td>
              <td>
                <div className="text-xl flex gap-1">
                  <div className="text-hrms_blue p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                  <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                </div>
              </td>
            </tr>
          </table>
        </div>


        <Modal size={"lg"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
          <form onSubmit={inviteEmployee}>
            <div className="grid gap-[20px]">
              <div className="flex items-start justify-between">
                <h2 className="text-[24px] font-[500] text-hrms_green">
                  Invite Employee
                </h2>
              </div>
              <div className="grid gap-[20px]">
                <AppInput name="email" type={"email"} required label="Employee Email" />
                <div className="flex gap-3">
                  <button
                    disabled={proccessing}
                    className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_green text-white rounded-lg py-3"
                  >
                    {proccessing ? "Submitting..." : "Submit"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    disabled={proccessing}
                    className="flex-grow disabled:bg-opacity-35 shadow-md border border-hrms_green text-hrms_green rounded-lg py-3"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </Modal>
        <Modal closeModal={() => setImportModal(false)} size={"2xl"} isOpen={importModal}>
          <div className="space-y-5">
            <div className="text-hrms_green text-2xl">Import CSV file only</div>
            <div className="bg-gray-100 py-10 space-y-4">
              <div className="text-sm p-4">
                <div className="max-w-lg text-center mx-auto">The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</div>
              </div>
              <div className="flex justify-center">
                <a href="#">
                  <div className="bg-hrms_green rounded-lg text-white px-5 py-3"><i className="ri-download-2-line"></i> Download File Sample</div>
                </a>
              </div>
            </div>
            <div className="">
              <form className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Upload File</div>
                  <label htmlFor="upload" className="relative rounded-lg text-hrms_green border border-hrms_green py-3 px-4 inline-block cursor-pointer">
                    <input id="upload" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-upload-2-line"></i> <span>Choose File. . .</span>
                  </label>
                </div>
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Enter Manually</div>
                  <textarea className="w-full bg-gray-50 p-3 rounded-lg outline-none ring-0 resize-none"></textarea>
                </div>
                <div className="flex gap-4 justify-end">
                  <div
                    onClick={() => setImportModal(false)}
                    className="disabled:bg-opacity-35 px-6 shadow-md border border-hrms_green text-hrms_green rounded-lg py-3"
                  >
                    Cancel
                  </div>
                  <button
                    disabled={proccessing}
                    className="disabled:bg-opacity-35 px-6 shadow-md bg-hrms_green text-white rounded-lg py-3"
                  >
                    {proccessing ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal>

        <ResponseModal
          status={true}
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          message="Employee invitation sent!"
        />
        <ResponseModal
          status={false}
          isOpen={isErrorModal}
          onClose={() => setIsErrorModal(false)}
          message={`${errMsg}`}
        />
      </>
    </AppLayout>
  );
};

export default Page;



