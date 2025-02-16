import React from "react";

const InputField = ({
  id,
  label,
  type = "text",
  required = true,
  isSelectField = false,
  children,
  className,
  onChange = () => {},
}) => {
  return !isSelectField ? (
    <div className="relative mt-5">
      <input
        type={type}
        id={id}
        placeholder=" "
        required={required}
        className={`p-3 peer w-full border-2 border-gray-300 bg-transparent text-lg focus:outline-none focus:ring-0 focus:border-b-green-500 ${className}`}
      />
      <label
        htmlFor={id}
        className="p-2 absolute left-2 top-2 text-gray-500 text-xs transition-all peer-placeholder-shown:top-[10px] peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-sm peer-focus:top-[-20px] peer-focus:text-xs bg-white"
      >
        {label} {required && "*"}
      </label>
      <span className="text-red-500 text-sm mt-1 hidden peer-invalid:block"></span>
    </div>
  ) : (
    <select
      id={id}
      placeholder=" "
      required={required}
      className={`p-3 peer w-full border-2 border-gray-300 bg-transparent text-lg ${className}`}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default InputField;
