import React from "react";
import Accordion from "./Accordion";
import AccordionItem from "./AccordionItem"

const Overlay = ({ onClose }) => {

  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex justify-end right-0 bg-black bg-opacity-50">
      <div className="bg-white border-2 border-black w-[30%]" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col p-8">
          <p className="font-bold text-xl">Bộ lọc được áp dụng</p>
        </div>
        <div className="mt-5">
          <Accordion>
            <AccordionItem title="Lọc theo giá">
              {["Giá (Thấp - cao)", "Mới nhất trước", "Bán chạy nhất", "Giá (Cao - Thấp)"].map((item, index) => (
                <div key={index} className="border-b-2 p-2">
                  {item}
                </div>
              ))}
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
