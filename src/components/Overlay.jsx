import React from "react";
import Accordion from "./Accordion";

const Overlay = ({ onClose }) => {
  const faqItems = [
    {
      title: 'Sort by',
      content: [
        "Giá (Thấp - Cao)",
        "Mới Nhất Trước",
        "Bán chạy nhất",
        "Giá (Cao - Thấp)"
      ]
    },
  ]
  return (
    <div onClick={onClose} className="fixed inset-0 z-50 flex justify-end right-0 bg-black bg-opacity-50">
      <div className="bg-white border-2 border-black w-[30%]">
        <div className="flex flex-col p-8">
          <p className="font-bold text-xl">Bộ lọc được áp dụng</p>
        </div>
        <div className="mt-5">
          <Accordion items={faqItems} />
        </div>
      </div>
    </div>
  );
};

export default Overlay;
