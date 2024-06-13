"use client";
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import AppPagination from "@/components/organisms/AppPagination";
import { fetchUsers } from "@/services/authService";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [employee, setEmployee] = useState([])




  const fetchEmployees = async () => {
    const { status, data } = await fetchUsers().catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])


  return (
    <AppLayout>
      <>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Users ({employee?.total})
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company employee are listed here
            </p>
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

        <div className="py-5 space-y-8">
          <table className="w-full divide-y text-sm text-left">
            <tr className="bg-gray-100">
              <th className="flex gap-3 pl-5 py-2">
                <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
                </div>
                <div className="flex-grow">Image</div>
              </th>
              <th className="hidden lg:table-cell">Username</th>
              <th className="hidden lg:table-cell">Permission Role</th>
              <th className="w-20">Action</th>
            </tr>
            {
              employee?.data?.map((emp, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-3 pl-5 py-2">
                    <div className="w-9 relative">
                      <div className="absolute -top-3"><AppInput type="checkbox" name="employee" /></div>
                    </div>
                    <div className="flex-grow gap-2 flex">
                      <div className="">
                        <div className="w-9 h-9 bg-gray-100 rounded-full"></div>
                      </div>
                      <div className="">
                        <div className="font-semibold">{emp.employee_name}</div>
                        <div className="">Username:{emp.employee}</div>
                        <div className="">Gender:{emp.gender}</div>
                        <div className="">Employee status:{emp.employee_status}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="font-semibold">{emp.designation}</div>
                    <div className="">Grade: {emp.grade}</div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className=""><i className="ri-mail-line text-gray-400"></i> {emp.staff_id}</div>
                    <div className=""><i className="ri-phone-line text-gray-400"></i> 0{emp.telephone}</div>
                  </td>
                  <td>
                    <div className="text-xl flex gap-1">
                      <div className="text-hrms_green p-1 cursor-pointer"><i className="ri-edit-2-line"></i></div>
                      <div className="text-danger p-1 cursor-pointer"><i className="ri-delete-bin-6-line"></i></div>
                    </div>
                  </td>
                </tr>
              ))
            }
          </table>
          <AppPagination totalRecords={employee} newData={(e) => setEmployee(e)} />
        </div>
      </>
    </AppLayout>
  );
};

export default Page;



