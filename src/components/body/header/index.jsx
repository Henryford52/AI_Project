import React from "react";
import "./style.css";
import headerimg from "../../../assets/Group-5.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h2>Empower Your Health Understanding</h2>
        <p>
          {" "}
          Simplify understanding your medical test results with our easy-to-use
          web application. Quick, accurate, and clear.
        </p>
      </div>
      <img src={headerimg} alt="" />
    </div>
  );
};

export default Header;
