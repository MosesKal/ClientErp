import React from "react";
import logo from "../assets/img/logo.png";

const Logo = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="index.html" className="logo d-flex align-items-center">
        <img src={logo} alt="" />
        <span className="d-none d-lg-block">Small ERP</span>
      </a>
      <i className="bi bi-list toggle-sidebar-btn"></i>
    </div>
  );
};

export default Logo;
