"use client";
import React, { useEffect, useState } from "react";
import ResponseModal from "../../organisms/ResponseModal";
import AppInput from "../../organisms/AppInput";
import Modal from "../../organisms/Modal";
import { useDispatch, useSelector } from "react-redux";
import serialize from "@/hooks/Serialize";
import { NigeriaStates } from "@/hooks/Nigeria";
import { updateProfile } from "@/services/authService";
import Image from "next/image";
import axios from "axios";
import { SignInAuth } from "@/hooks/Auth";
import { useRouter } from "next/navigation";

const EmployeeDashboard = () => {
  const dispatch = useDispatch()
  const perset_key = process.env.NEXT_PUBLIC_API_CLOUDINARY_PERSET_KEY
  const cloud_name = process.env.NEXT_PUBLIC_API_CLOUDINARY_CLOUD_NAME
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModal, setIsErrorModal] = useState(false);
  const router = useRouter();
  const [imgUrl, setImgUrl] = useState("");
  const [errMsg, setErrMsg] = useState(false);
  const [personalData, setPersonalData] = useState([])
  const [currentStep, setCurrentStep] = useState(0)

  const userType = useSelector((state) => state.User?.value);
  useEffect(() => {
    console.log(userType.user.next_of_kin_name);
    if (userType.user.next_of_kin_name === null) {
      setIsModalOpen(true);
    }
  }, []);



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



  const setPreData = (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setPersonalData({ ...formData })
    setCurrentStep(1)
  };


  const updateData = (e) => {
    e.preventDefault();
    const formData = serialize(e.target);
    setPersonalData((prev) => { return { ...prev, ...formData } })
    setCurrentStep(2)
  }

  const saveData = async (e) => {
    e.preventDefault();
    personalData.avatar = imgUrl
    console.log(personalData);
    const { status, data } = await updateProfile(personalData)
    SignInAuth({ data }, dispatch);
    router.push("/")
    console.log(data);
  }

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
              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
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
              <div className="w-32 h-32 absolute top-12 -right-12 bg-opacity-20 bg-hrms_green rounded-full flex items-center justify-center">
                <div className="w-24 h-24 flex items-center justify-center bg-hrms_green rounded-full bg-opacity-20">
                  <div className="w-16 h-16 bg-hrms_green rounded-full bg-opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal promt size={"2xl"} isOpen={isModalOpen}>
        <div>
          <div className="grid gap-[20px]">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-[500] text-hrms_green">
                Enter Key Personal Infomation
              </h2>
            </div>
            {
              currentStep === 0 ? (
                <form enctype="multipart/form-data" onSubmit={setPreData} className="space-y-4">
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
                      <AppInput name="password" type="password" required label="Login Password" />
                      <AppInput name="phone" type="number" required label="Phone Number" />
                      <AppInput value={userType.user.email} name="email" type="email" required label="Email" />
                      <AppInput name="gender" type="select" required label="Gender"
                        options={[
                          { value: "male", label: "Male" },
                          { value: "female", label: "Female" }
                        ]}
                      />
                      <AppInput name="state_of_origin" type="select" required label="State Of Origin (optional)" options={[...NigeriaStates]} />
                      <AppInput name="state_of_residence" type="select" required label="State Of Residence" options={[...NigeriaStates]} />
                      <AppInput name="date_of_birth" type="date" required label="Date Of Birth" max={maxDate} />
                      <AppInput name="next_of_kin_name" type="text" required label="Next of Kin" />
                      <AppInput name="next_of_kin_contact" type="number" required label="Next of Kin's Contact" />
                      <AppInput name="next_of_kin_relationship" type="select" required label="Relationship"
                        options={[
                          { value: "Father", label: "Father" },
                          { value: "Mother", label: "Mother" },
                          { value: "Brother", label: "Brother" },
                          { value: "Sister", label: "Sister" },
                          { value: "Cousin", label: "Cousin" },
                          { value: "Nephew", label: "Nephew" },
                          { value: "Niece", label: "Niece" },
                          { value: "Uncle", label: "Uncle" },
                          { value: "Aunt", label: "Aunt" },
                          { value: "in-laws", label: "in-laws" },
                          { value: "Others", label: "Others" },
                        ]}
                      />
                    </div>
                  </div>
                  <div>
                    <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Continue</button>
                  </div>
                </form>
              ) : currentStep === 1 ? (
                <form onSubmit={e => updateData(e)} className="space-y-4">
                  <div className="space-y-2">
                    <div className="w-16 h-16 rounded-full bg-gray-100 relative">
                      <Image id="output" className="w-full h-full rounded-full" />
                    </div>
                    <div className="text-hrms_green text-lg font-semibold">Personal Information</div>
                    <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                      <div>
                        <div className="font-semibold">Login Password</div>
                        <div>***********</div>
                      </div>
                      <div>
                        <div className="font-semibold">Phone Number</div>
                        <div>0{personalData.phone}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Email</div>
                        <div>{personalData.email}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Gender</div>
                        <div>{personalData.gender}</div>
                      </div>
                      <div>
                        <div className="font-semibold">State Of Origin (optional)</div>
                        <div>{personalData.state_of_origin}</div>
                      </div>
                      <div>
                        <div className="font-semibold">State Of Residence</div>
                        <div>{personalData.state_of_residence}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Date Of Birth</div>
                        <div>{personalData.date_of_birth}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Next of Kin</div>
                        <div>{personalData.next_of_kin_name}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Next of Kin&apos;s Contact</div>
                        <div>0{personalData.next_of_kin_contact}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Relationship</div>
                        <div>{personalData.next_of_kin_relationship}</div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-hrms_green text-lg font-semibold">Employment Information</div>
                    <div className="grid grid-cols-2 gap-4">
                      <AppInput name="bank_name" type="select" required label="Account Bank"
                        options={[
                          { value: "Access bank", label: "Access Bank" },
                          { value: "Zenith bank", label: "Zenith Bank" },
                        ]}
                      />
                      <AppInput name="account_number" type="number" required label="Salary Account Number" />
                      <div className="col-span-2"><AppInput name="account_name" type="text" required label="Account Name" /></div>
                      <div>
                        <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">Continue</button>
                      </div>
                      <div onClick={() => setCurrentStep(0)} className="text-center py-2 border border-hrms_green rounded-lg text-hrms_green cursor-pointer">Previous</div>
                    </div>
                  </div>
                </form>
              ) : (
                <form onSubmit={(e) => saveData(e)} className="space-y-2">
                  <div className="w-16 h-16 rounded-full bg-gray-100 relative">
                    <Image id="output" className="w-full h-full rounded-full" />
                  </div>
                  <div className="text-hrms_green text-lg font-semibold">Personal Information</div>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div>
                      <div className="font-semibold">Login Password</div>
                      <div>***********</div>
                    </div>
                    <div>
                      <div className="font-semibold">Phone Number</div>
                      <div>{personalData.phone}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div>{personalData.email}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Gender</div>
                      <div>{personalData.gender}</div>
                    </div>
                    <div>
                      <div className="font-semibold">State Of Origin (optional)</div>
                      <div>{personalData.state_of_origin}</div>
                    </div>
                    <div>
                      <div className="font-semibold">State Of Residence</div>
                      <div>{personalData.state_of_residence}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Date Of Birth</div>
                      <div>{personalData.date_of_birth}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Next of Kin</div>
                      <div>{personalData.next_of_kin_name}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Next of Kin&apos;s Contact</div>
                      <div>{personalData.next_of_kin_contact}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Relationship</div>
                      <div>{personalData.next_of_kin_relationship}</div>
                    </div>
                  </div>
                  <div className="text-hrms_green text-lg font-semibold">Employment Information</div>
                  <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                    <div>
                      <div className="font-semibold">Account Bank</div>
                      <div>{personalData.bank_name}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Salary Account Number</div>
                      <div>{personalData.account_number}</div>
                    </div>
                    <div>
                      <div className="font-semibold">Account Name</div>
                      <div>{personalData.account_name}</div>
                    </div>
                    <div className="col-span-2 pt-4">
                      <AppInput required type="checkbox" label="Confirm your details" />
                    </div>
                    <div>
                      <button className="bg-hrms_green w-full text-white rounded-lg py-2 text-center cursor-pointer">submit</button>
                    </div>
                    <div onClick={() => setCurrentStep(1)} className="text-center py-2 border border-hrms_green rounded-lg text-hrms_green cursor-pointer">Previous</div>
                  </div>
                </form>
              )
            }
          </div>
        </div>
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


{/* <div className="grid grid-cols-2 gap-[20px]">
              <AppInput name="date_of_birth" type="date" required label="Date Of Birth" max={maxDate} />
              <AppInput name="gender" required type="select" label="Gender"
                options={[
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                ]}
              />
              <AppInput name="state_of_origin" required label="	State of Origin" />
              <AppInput name="state_of_residence" required label="	State of Residence" />
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
                className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_green text-white rounded-lg py-3"
              >
                {proccessing ? "Submitting..." : "Submit"}
              </button>
            </div> */}