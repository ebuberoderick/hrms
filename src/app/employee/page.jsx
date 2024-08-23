"use client";
import AppLayout from "@/components/layouts/appLayout";
import AppInput from "@/components/organisms/AppInput";
import AppPagination from "@/components/organisms/AppPagination";
import Modal from "@/components/organisms/Modal";
import ResponseModal from "@/components/organisms/ResponseModal";
import DownloadCSV from "@/hooks/DownloadCSV";
import { NigeriaStates } from "@/hooks/Nigeria";
import serialize from "@/hooks/Serialize";
import { debounce } from "@/hooks/useDebounce";
// import sample from "@assets/samples/employee_sample.csv"
import { addEmploye, adminadduser, employeeBulkUpload, employeeInvite, fetchEmployee, fetchemploy } from "@/services/authService";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { LuEye } from "react-icons/lu";


const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const [proccessing, setProccessing] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const [activeModal, setActiveModal] = useState("Register")
  const [importModal, setImportModal] = useState(false)
  const [employee, setEmployee] = useState([])
  const [updData, setUpdateData] = useState({})
  const [proccessingAdd, setProccessingAdd] = useState(false)

  const [isloading, setIsLoading] = useState(true)


  const perset_key = process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY
  const cloud_name = process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState("");
  // const [errMsg, setErrMsg] = useState(false);
  const [personalData, setPersonalData] = useState([])
  const [currentStep, setCurrentStep] = useState(0)






  const [alertMsg, setAlert] = useState(false)
  const [alertMsgData, setAlertData] = useState(false)
  const [btn, setBtn] = useState(false)




  const uploadImg = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData();
    formData.append("file", file)
    formData.append("upload_preset", perset_key)
    await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData).then(res => {
      setImgUrl(res.data.url);
    }).catch(err => console.log(err))
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById('output');
      output.src = reader.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }




  const addEmployee = async (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setProccessingAdd(true)
    formData.image = imgUrl
    formData.telephone = `+234${formData.telephone}`
    formData.middlename === 0 ? formData.middlename = "" : formData.middlename = formData.middlename
    formData.firstname === 0 ? formData.firstname = "" : formData.firstname = formData.firstname
    formData.lastname === 0 ? formData.lastname = "" : formData.lastname = formData.lastname
    const { status, data } = await addEmploye(formData).catch(err => console.log(err))
    if (status) {
      await fetchEmployees()
      setIsModalOpen(false)
      setBtn(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }



  const bulkUpload = async (e) => {
    e.preventDefault();
    const file = e.target[0].files[0]
    const formData = new FormData();
    formData.append("csv_file", file)

    console.log(formData);
    setProccessingAdd(true)
    const { status, data } = await employeeBulkUpload(formData).catch(err => console.log(err))
    if (status) {
      await fetchEmployees()
      setIsModalOpen(false)
      setBtn(false)
    }
    setAlert(true)
    setAlertData(data)
    setProccessingAdd(false)
  }




  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };
  const maxDate = getTodayDate();





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


  const fetchEmployees = async () => {
    const { status, data } = await fetchEmployee().catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
    setIsLoading(false)
  }


  const searchFN = debounce(async (e) => {
    const { status, data } = await fetchEmployee({ search: e }).catch(err => console.log(err))
    if (status) {
      setEmployee(data.data[0])
    }
  }, 3000);

  const data = "Name,Age,Profession\nJohn Doe,30,Developer\nJane Smith,25,Designer";


  useEffect(() => {
    fetchEmployees()
  }, [])


  return (
    <AppLayout title={"Employee"}>
      <>
        <div className="lg:flex space-y-3 items-center justify-between">
          <div className="">
            <p className=" text-[24px] font-[500] text-[#000000]">
              Employee({employee?.total})
            </p>
            <p className=" text-[12px] font-[400] text-[#00000099] text-opacity-60">
              All the company employee are listed here
            </p>
          </div>
          <div className="sm:flex space-y-3 sm:space-y-0 gap-[10px] text-sm">
            <div onClick={(e) => setImportModal(true)} className="flex justify-center cursor-pointer font-bold gap-2 items-center border border-hrms_green text-hrms_green px-7 py-3 rounded-[4px]">
              <i className="ri-upload-2-fill text-hrms_green"></i>
              <div className="">Import Employees</div>
            </div>
            <div
              className="flex cursor-pointer font-bold justify-center gap-2 items-center text-white bg-hrms_green px-7 py-3 rounded-[4px]"
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
              onChange={(e) => searchFN(e.target.value)}
              placeholder="Search by name and staff_id"
              className="pl-2 w-full placeholder:text-hrms_green outline-none text capitalize"
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
              <th className="hidden lg:table-cell">Username</th>
              <th className="hidden lg:table-cell">ID/Contact</th>
              <th className="w-20">Action</th>
            </tr>
            {
              employee?.data?.map((emp, i) => (
                <tr key={i}>
                  <td className="flex items-center gap-3 pl-5 py-2">
                    {/* <div className="w-9 relative">
                      <div className="absolute -top-1"><AppInput type="checkbox" name="employee" /></div>
                    </div> */}
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
                    <div className="flex items-center gap-1 "><FaRegUserCircle className=" text-gray-400" /> {emp.staff_id}</div>
                    <div className=""><i className="ri-phone-line text-gray-400"></i> {emp.telephone}</div>
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
                        <div className="preload w-2/3 py-2"></div>
                        <div className="preload w-2/3 py-2"></div>
                      </div>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="w-full space-y-1">
                      <div className="preload w-2/3 py-2"></div>
                      <div className="preload w-2/3 py-2"></div>
                    </div>
                  </td>
                  <td className="hidden lg:table-cell">
                    <div className="w-full space-y-1">
                      <div className="preload w-2/3 py-2"></div>
                      <div className="preload w-2/3 py-2"></div>
                    </div>
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

        {
          Object.keys(updData).length > 0 && (
            <Modal size={"lg"} closeModal={() => setUpdateData({})} isOpen={Object.keys(updData).length > 0}>
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h2 className="text-[24px] font-[500] text-hrms_green">
                    Employees Infomation
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="">
                    <div className="font-bold">Staff ID</div>
                    <div className="">{updData.staff_id === null ? "Null" : updData.staff_id}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">firstname</div>
                    <div className="">{updData.firstname === null ? "Null" : updData.firstname}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">lastname</div>
                    <div className="">{updData.lastname === null ? "Null" : updData.lastname}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">middlename</div>
                    <div className="">{updData.middlename === null ? "Null" : updData.middlename}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">telephone</div>
                    <div className="">{updData.telephone === null ? "Null" : updData.telephone}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">state of origin</div>
                    <div className="">{updData.state_of_origin === null ? "Null" : updData.state_of_origin}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">category</div>
                    <div className="">{updData.category === null ? "Null" : updData.category}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">grade</div>
                    <div className="">{updData.grade === null ? "Null" : updData.grade}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">step</div>
                    <div className="">{updData.step === null ? "Null" : updData.step}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">designation</div>
                    <div className="">{updData.designation === null ? "Null" : updData.designation}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">date of birth</div>
                    <div className="">{updData.date_of_birth === null ? "Null" : updData.date_of_birth}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">hire date</div>
                    <div className="">{updData.hire_date === null ? "Null" : updData.hire_date}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">assignment</div>
                    <div className="">{updData.assignment === null ? "Null" : updData.assignment}</div>
                  </div>
                  <div className="">
                    <div className="font-bold capitalize">sub organization</div>
                    <div className="">{updData.sub_organization === null ? "Null" : updData.sub_organization}</div>
                  </div>
                </div>
              </div>
            </Modal>
          )
        }
        <Modal size={"2xl"} closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <h2 className="text-[24px] font-[500] text-hrms_green">
                Add Employee
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <AppInput onChange={(e) => setActiveModal(e.target.value)} name="addtype" checked={activeModal === "Invite"} value={"Invite"} type={"radio"} label="Invite Employee" />
              <AppInput onChange={(e) => setActiveModal(e.target.value)} name="addtype" checked={activeModal === "Register"} value={"Register"} type={"radio"} label="Register Employee" />
            </div>
            <div className="">
              {
                activeModal === "Invite" && (
                  <form onSubmit={inviteEmployee}>
                    <div className="grid gap-[20px]">
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
                )
              }
            </div>
            <div className="">
              {
                activeModal === "Register" && (
                  <div className="">
                    <form enctype="multipart/form-data" onSubmit={addEmployee} className="space-y-4">
                      <div>
                        <div className="w-20 h-20 rounded-full bg-gray-100 relative">
                          <Image id="output" className="w-full h-full rounded-full" />
                          <label htmlFor="image" className="absolute w-8 h-8 border-2 border-white bottom-1 right-0 bg-hrms_green text-white rounded-full flex items-center justify-center">
                            <input accept="image/*" required id="image" onChange={(e) => uploadImg(e)} name="image" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                            <i className="ri-camera-line"></i>
                          </label>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-hrms_green text-lg font-semibold">Personal Information</div>
                        <div className="grid grid-cols-2 gap-4">
                          <AppInput name="telephone" type="number" required label="Phone Number" />
                          <AppInput name="email" type="email" required label="Email" />
                          <AppInput name="firstname" type="text" required label="First Name" />
                          <AppInput name="lastname" type="text" required label="Last Name" />
                          <AppInput name="middlename" type="text" label="Middle Name (Optional)" />
                          <AppInput name="employee_type" type="select" required label="Employee Type" options={[
                            { value: "Uniformed", label: "Uniformed" },
                            { value: "Formal", label: "Formal" }]} />
                          <AppInput name="staff_id" type="text" required label="Staff ID" />
                        </div>
                      </div>
                      <div>
                        <button disabled={proccessingAdd} className="bg-hrms_green disabled:bg-opacity-40 w-full text-white rounded-lg py-2 text-center cursor-pointer">{proccessingAdd ? "Adding Employee" : "Add Employee"}</button>
                      </div>
                    </form>
                  </div>
                )
              }
            </div>
          </div>
        </Modal>
        <Modal closeModal={() => setImportModal(false)} size={"2xl"} isOpen={importModal}>
          <div className="space-y-5">
            <div className="text-hrms_green text-2xl">Import CSV file only</div>
            <div className="bg-gray-100 py-10 space-y-4">
              <div className="text-sm p-4">
                <div className="max-w-lg text-center mx-auto">The first line in downloaded csv file should remain as it is. Please do not change the order of columns in csv file.</div>
              </div>
              <div className="flex justify-center">
                {/* <a download={sample} href="#">
                  <div className="bg-hrms_green rounded-lg text-white px-5 py-3"><i className="ri-download-2-line"></i> Download File Sample</div>
                </a> */}
                <DownloadCSV data={data} fileName="employees" />
              </div>
            </div>
            <div className="">
              <form onSubmit={bulkUpload} className="space-y-4">
                <div className="space-y-2">
                  <div className="text-sm text-gray-500">Upload File</div>
                  <label htmlFor="upload" className="relative rounded-lg text-hrms_green border border-hrms_green py-3 px-4 inline-block cursor-pointer">
                    <input id="upload" name="csv_file" type="file" className="opacity-0 absolute w-full cursor-pointer h-full" />
                    <i className="ri-upload-2-line"></i> <span>Choose File. . .</span>
                  </label>
                </div>
                {/* <div className="space-y-2">
                  <div className="text-sm text-gray-500">Enter Manually</div>
                  <textarea className="w-full bg-gray-50 p-3 rounded-lg outline-none ring-0 resize-none"></textarea>
                </div> */}
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
        <ResponseModal
          status={alertMsgData?.success}
          isOpen={alertMsg}
          onClose={() => setAlert(false)}
          message={alertMsgData?.message}
        />
      </>
    </AppLayout>
  );
};

export default Page;



