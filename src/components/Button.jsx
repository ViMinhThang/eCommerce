import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";

const Button = ({ children, className = "", onClick = () => {} }) => {
  return (
      <button
        onClick={onClick}
        className={`w-[40%] border-2 border-black inline-flex items-center text-xl py-2 px-2 ${
          className ? className : ""
        }`}
      >
        <span className="flex-auto text-start">{children}</span>
        <span>
          <IoArrowForward />
        </span>
      </button>
  );
};

export default Button;
