
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import React from "react";

export const metadata = {
  title: "Users list",
};

function Page() {
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
          <div className="flex gap-3 text-sm">
            <div className="flex cursor-pointer font-bold gap-2 items-center text-white bg-hrms_blue px-7 py-3 rounded-lg">
              <i className="ri-add-line"></i>
              <div className="">Add User</div>
            </div>
            <div className="flex cursor-pointer font-bold gap-2 items-center text-white bg-danger px-7 py-3 rounded-lg">
              <i className="ri-indeterminate-circle-line"></i>
              <div className="">Bulk Delete</div>
            </div>
          </div>
        </div>

        <div className="   my-[32px] max-w-[461px] flex items-center gap-[20px]">
          {/* <AppInput name="email" required label="Username" /> */}
          <div className=" w-[334px] relative">
            <input
              type="text"
              placeholder="search..."
              className="pr-8 py-[12px] px-[10px] w-full border border-hrms_blue rounded-[10px]"
            />
            <div className="absolute right-0 top-0 flex items-center justify-center h-full w-8">
              <i className="ri-search-line"></i>
            </div>
          </div>

          <div className=" flex items-center gap-[10px] py-[12px] px-[14px] border border-hrms_blue rounded-[10px]">
            <i className="ri-equalizer-line"></i>
            <p className=" font-[700] text-[16px] text-hrms_blue">Filter</p>
          </div>
        </div>
      </>
    </AppLayout>
  );
}

export default Page;
