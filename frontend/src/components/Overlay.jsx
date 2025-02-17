import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem"

const Overlay = ({ onClose,children }) => {

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex justify-end right-0 bg-black bg-opacity-50">
      <div className="bg-white border-2 border-black w-[30%]" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
