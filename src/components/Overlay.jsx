import React from "react";

const Overlay = () => {
  return (
    <div className="fixed z-50 bg-black bg-opacity-50 flex justify-end">
        <div className="bg-white border-2 border-black">
            <div className="flex flex-col">
                Bộ lọc được áp dụng
                <div>.....</div>
            </div>
        </div>
    </div>
  );
};

export default Overlay;
