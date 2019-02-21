import React from "react";
import logo from "./so-icon.png";

const Logo = props => {
  return (
    <>
      <img src={logo} alt="" className={props.className} />
    </>
  );
};

export default Logo;
