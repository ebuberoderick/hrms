import AppLayout from '@/components/layouts/appLayout'
import React from 'react'

export const metadata = {
  title: "Users list"
};

function Page() {
  return (
    <AppLayout>
      <div className="">
        <div className="flex gap-3 text-sm">
          <div className="flex cursor-pointer font-bold gap-2 items-center text-white bg-hrms_blue px-7 py-3 rounded-lg">
            <i class="ri-add-line"></i>
            <div className="">Add User</div>
          </div>
          <div className="flex cursor-pointer font-bold gap-2 items-center text-white bg-danger px-7 py-3 rounded-lg">
            <i class="ri-indeterminate-circle-line"></i>
            <div className="">Bulk Delete</div>
          </div>
        </div>
        <div className="">
          
        </div>
        <div className=""></div>
      </div>
    </AppLayout>
  )
}

export default Page