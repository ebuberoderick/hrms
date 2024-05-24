import React from "react";

const ResponseModal = ({ isOpen, onClose, message, icon, iconColor }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 text-center">
        {icon && <i className={`${icon} ${iconColor} text-[40px]`}></i>}
        <p className="mb-4">{message || "Operation completed successfully!"}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-hrms_blue px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ResponseModal;
