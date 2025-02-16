import React from "react";
const AccordionItem = ({
  title,
  isOpen,
  onClick,
  children,
  classNameTitle = "",
  className = "",
}) => {
  return (
    <div className="">
      <button
        onClick={onClick}
        className={`flex items-center justify-between w-full p-4 text-left transition-colors ${className}`}
      >
        <span className={`text-neutral-800 ${classNameTitle}`}>{title}</span>
        <span className="text-xl text-neutral-600">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-2 text-neutral-600 space-y-3 font-medium">
          {children}
        </div>
      </div>
    </div>
  );
};
export default AccordionItem;
