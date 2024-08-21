// "use client";
// import AuthLayout from "@/components/layouts/authLayout";
// import AppCheckBox from "@/components/organisms/AppCheckBox";
// import AppInput from "@/components/organisms/AppInput";
// import { Applogin, personalInfo, verifyCode } from "@/services/authService";
// import Link from "next/link";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import Cookies from "js-cookie";
// import { Session, SignInAuth } from "@/hooks/Auth";

// function Page() {
//   const dispatch = useDispatch();
//   const [proccessing, setProccessing] = useState(false);
//   const [errMsg, setErrMsg] = useState(false);
//   const router = useRouter();
//   const user = useSelector((state) => state.User);

//   const personalInformation = async (e) => {
//     setProccessing(true);
//     const { status, data } = await personalInfo(e).catch((err) =>
//       console.log(err)
//     );
//     setProccessing(false);
//     if (status) {
//       setErrMsg("");
//       SignInAuth(data, dispatch);
//       router.push("/");
//     } else {
//       setErrMsg(data.message);
//     }
//     console.log(e);
//   };

//   // const isAuthenticated = Session(user)

//   return (
//     <AuthLayout
//       errMsg={errMsg}
//       onSubmit={personalInformation}
//       title={"Personal Information"}
//       subText={"Enter Key Personal Infomation"}
//     >
//       <AppInput name="surname" required label="Salary Account Number" />
//       <AppInput name="account_number" required label="Surname" />

//       <div className="flex gap-3">
//         <button
//           disabled={proccessing}
//           className="flex-grow disabled:bg-opacity-35 shadow-md bg-hrms_blue text-white rounded-lg py-3"
//         >
//           {" "}
//           {proccessing ? "Submitting..." : "Submit"}
//         </button>
//       </div>
//     </AuthLayout>
//   );
// }

// export default Page;
import React from 'react'

function Page() {
  return (
    <div>page</div>
  )
}

export default Page
