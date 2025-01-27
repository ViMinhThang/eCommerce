import React from "react";
import UserProfileNav from "../../components/UserProfileNav";
import { Route, Routes } from "react-router-dom";
import UserProfile from "../userAccount/UserProfile";
import MyAccount from "../myAccount/MyAccount";
const UserRoutes = () => {
  return (
    <>
      <UserProfileNav/>
      <Routes>
        <Route path="/" element={<MyAccount />} />
        <Route path="profile/*" element={<UserProfile />} />
      </Routes>
    </>
  );
};

export default UserRoutes;
