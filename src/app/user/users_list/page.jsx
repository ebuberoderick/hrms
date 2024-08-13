"use client";
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import AppPagination from "@/components/organisms/AppPagination";
import Modal from "@/components/organisms/Modal";
import { fetchUsers } from "@/services/authService";
import { LuEye } from "react-icons/lu";
import React, { useEffect, useState } from "react";
import { debounce } from "@/hooks/useDebounce";

const Page = () => {
  const [employee, setEmployee] = useState([])
  const [updateData, setUpdateData] = useState({})
  const [isloading, setIsLoading] = useState(true)

  const fetchEmployees = async () => {
    const { status, data } = await fetchUsers().catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
    setIsLoading(false)
  }

  const searchFN = debounce(async (e) => {
    const { status, data } = await fetchUsers({ search: e }).catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
  }, 3000);


  useEffect(() => {
    fetchEmployees()
  }, [])


  return (
    <AppLayout title={"User"}>
      {
        Object.keys(updateData).length > 0 && (
          <Modal size={"lg"} closeModal={() => setUpdateData({})} isOpen={Object.keys(updateData).length > 0}>
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <h2 className="text-[24px] font-[500] text-hrms_green">
                  User Infomation
                </h2>
              </div>
              <div className="">
                <div className="">
                  <div className="w-16 h-16 bg-gray-100 rounded-full">
                    <img src={updateData.avatar} alt="" className="w-full h-full rounded-full" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <div className="font-bold">Email</div>
                    <div className="">{updateData.email}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">name</div>
                    <div className="">{updateData.name}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">role</div>
                    <div className="">{updateData.role}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">state of origin</div>
                    <div className="">{updateData.state_of_origin}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">address verification</div>
                    <div className="">{updateData.is_address_verified == 1 ? "Verified" : "Pending"}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">bank verification</div>
                    <div className="">{updateData.is_bank_verified == 1 ? "Verified" : "Pending"}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">bvn verification</div>
                    <div className="">{updateData.is_bvn_verified == 1 ? "Verified" : "Pending"}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">next of kin verification</div>
                    <div className="">{updateData.is_next_of_kin_verified == 1 ? "Verified" : "Pending"}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">nin verification</div>
                    <div className="">{updateData.is_nin_verified == 1 ? "Verified" : "Pending"}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">status</div>
                    <div className="">{updateData.status}</div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        )
      }
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
              onChange={(e) => searchFN(e.target.value)}
              placeholder="Search by name or email"
              className="pl-2 w-full placeholder:text-hrms_green outline-none text"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center h-full w-8">
              <i className="ri-search-line"></i>
            </div>
          </div>

          {/* <div className="flex items-center gap-[10px] py-[12px] px-[14px] border border-hrms_green rounded-[10px]">
            <i className="ri-equalizer-line"></i>
            <p className="font-[700] text-[16px] text-hrms_green">Filter</p>
          </div> */}
        </div>

        <div className="py-5 space-y-8">
          <table className="w-full divide-y text-sm text-left">
            <tr className="bg-gray-100">
              <th className="flex gap-3 pl-5 py-2">
                {/* <div className="w-9 relative">
                  <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
                </div> */}
                <div className="flex-grow">Image</div>
              </th>
              <th className="hidden lg:table-cell">Email</th>
              <th className="hidden lg:table-cell">Permission Role</th>
              <th className="w-20">Action</th>
            </tr>
            {
              employee?.data?.map((emp, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-3 pl-5 py-2">
                    {/* <div className="w-9 relative">
                      <div className="absolute -top-3"><AppInput type="checkbox" name="employee" /></div>
                    </div> */}
                    <div className="flex-grow gap-2 flex">
                      <div className="">
                        <div className="w-9 h-9 bg-gray-100 rounded-full">
                          <img src={emp.avatar} alt="" className="w-full h-full rounded-full" />
                        </div>
                      </div>
                      <div className="">
                        <div className="font-semibold">{emp.name}</div>
                        <div className="">Employee status : {emp.status}</div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="font-semibold">{emp.email}</div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="">{emp.role}</div>
                  </td>
                  <td>
                    <div className="text-xl flex gap-1">
                      <div onClick={() => setUpdateData(emp)} className="text-hrms_green p-1 cursor-pointer"><LuEye /></div>
                    </div>
                  </td>
                </tr>
              ))
            }
            {
              isloading && ["", "", "", "", "", "", "", ""].map((emp, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-3 pl-5 py-2">
                    <div className="flex-grow gap-2 flex">
                      <div className="">
                        <div className="w-9 h-9 preload rounded-full">

                        </div>
                      </div>
                      <div className="w-full space-y-1">
                        <div className="preload w-2/3 py-3"></div>
                        <div className="preload w-2/3 py-2"></div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="preload w-2/3 py-3"></div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="preload w-2/3 py-3"></div>
                  </td>
                  <td>
                    <div className="text-xl flex gap-1">
                      <div className="preload w-1/3 py-3"></div>
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



