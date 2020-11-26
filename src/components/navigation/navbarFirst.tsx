import React, { useState } from "react";
import logo from "./target.svg";
import "./navbarFirst.scss";

export default function NavBarFirst() {
  return (
    <div className="navbarFirst">
      <img height="70px" alt="404" src={logo} />
    </div>
  );
}
