import React from "react";

const PopUp = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white shadow-lg p-6 w-full max-w-4xl">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-semibold">{title}</h2>
          <button
            className="absolute text-gray-500 hover:text-gray-800 text-xl font-bold w-[50px] h-[50px] border-2 border-black right-[-25px] top-[-25px] bg-white"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default PopUp;
