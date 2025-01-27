import React from "react";
import { Routes, useLocation, Route, Link } from "react-router-dom";

const UserProfileNav = () => {
  const location = useLocation();
    console.log(location)
  return (
    <div className="border-t-2 border-b-2 pb-5">
      <div className="flex flex-col items-center justify-center mt-5">
        <div className="w-[1200px] flex items-center justify-between">
          <div className="flex flex-col justify-start items-start">
            <h2 className="font-bold text-3xl">CHÀO HUYNH</h2>
            <p className="text-sm">0 Điểm</p>
          </div>
          <div className="flex justify-center items-center">
            <img src="https://www.adidas.com.vn/glass/react/ab41356/assets/img/membership-home/myaccount-redesign/new-adiClub-levels/adiclub-level-1-badge-DT-SVG.svg" />
          </div>
        </div>
        <div className="space-x-5 mt-12 font-medium">
          <Link to="/my-account" className={`p-5 ${location.pathname == "/my-account" ?"border-b-2 border-black":""}`}>Tin tức</Link>
          <Link to="/order-history" className={`p-5 ${location.pathname === "/order-history" ?"border-b-2 border-black":""}`}>Đơn hàng</Link>
          <Link to="/my-account/profile" className={`p-5 ${location.pathname.includes("/my-account/profile") ?"border-b-2 border-black":""}`}>Tài khoản</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfileNav;
