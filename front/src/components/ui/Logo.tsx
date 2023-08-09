import React from "react";
import logo from "../../assets/images/logo/logo-no-background.png";
const Logo = ({ size }) => {
  return (
    <img
      className="p-2"
      src={logo}
      style={{ width: `${size}%`, height: `${size}%` }}
      alt=""
    />
  );
};

export default Logo;
