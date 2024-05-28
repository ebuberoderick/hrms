import Image from "next/image";
import React from "react";
import success from '@assets/images/good.gif'
import error from '@assets/images/error.gif'

const ResponseModal = ({ isOpen, onClose, message,status, iconColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 p-3 z-50 flex items-center justify-center backdrop-blur-md bg-white bg-opacity-5">
      <div className={`relative bg-white rounded-lg space-y-4 px-4 py-4 shadow-lg overflow-hidden w-full max-w-sm mx-auto`}>
        {
          status ? <Image src={success}  alt="#" className="w-20 mx-auto" />:<Image src={error}  alt="#" className="w-20 mx-auto" />
        }
        
        <div className="p-4 text-center">{message}</div>
        <button
          onClick={() => onClose()}
          className="bg-blue-500 hover:bg-gray-100 w-full text-hrms_green px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResponseModal;
