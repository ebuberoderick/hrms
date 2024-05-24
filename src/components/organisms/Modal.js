import React from "react";

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className=" relative bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[600px] mx-auto">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
