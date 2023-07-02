import React from "react";
import Login from "../../pages/auth/Login";
import Register from "../../pages/auth/Register";
import ResetPassword from "../../pages/auth/ResetPassword";
import Page404 from "../../pages/404";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "../../pages/auth/ForgotPassword";

const RenderAuthPages = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={< ResetPassword/>} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* 404 */}
      <Route path="/*" element={<Page404 />} />
    </Routes>
  );
};

export default RenderAuthPages;
