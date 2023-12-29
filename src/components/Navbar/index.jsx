import React from "react";
import logo from "../../assets/logo.png";
import "./style.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-flex">
        <div className="Navbar-logo">
          <img src={logo} alt="" />
        </div>
        <button className="Navbar-btn">Join Now</button>
      </div>
    </div>
  );
};

export default Navbar;
