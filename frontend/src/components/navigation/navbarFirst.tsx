import React, { useState } from "react";
import logo from "./logo.png";
import "./navbarFirst.scss";
import arrow from "./arrow.svg";

// I know this code is a mess :D

export default function NavBarFirst() {
  let [switcher, setSwitcher] = useState(false);
  let [switcher1, setSwitcher1] = useState(false);
  let [switcher2, setSwitcher2] = useState(false);
  let [switcher3, setSwitcher3] = useState(false);
  let [switcher4, setSwitcher4] = useState(false);

  let triggerArrow = () => {
    setSwitcher(!switcher);
  };
  let triggerArrow1 = () => {
    setSwitcher1(!switcher1);
  };
  let triggerArrow2 = () => {
    setSwitcher2(!switcher2);
  };
  let triggerArrow3 = () => {
    setSwitcher3(!switcher3);
  };
  let triggerArrow4 = () => {
    setSwitcher4(!switcher4);
  };
  return (
    <span className="navbarFirst">
      <a href="/" className="navbarLogo">
        <img alt="404" src={logo} />
      </a>

      <a onClick={triggerArrow} className="navbarFirst__element">
        Categories
        <img
          height="4.5px"
          src={arrow}
          className={switcher ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={switcher ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
      </a>

      <a onClick={triggerArrow1} className="navbarFirst__element">
        Deals
        <img
          height="4.5px"
          src={arrow}
          className={switcher1 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={switcher1 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
      </a>
      <a onClick={triggerArrow2} className="navbarFirst__element">
        What’s New
        <img
          height="4.5px"
          src={arrow}
          className={switcher2 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={switcher2 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
      </a>
      <a onClick={triggerArrow3} className="navbarFirst__element">
        Pickup & Delivery
        <img
          height="4.5px"
          src={arrow}
          className={switcher3 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={switcher3 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
      </a>
      <input className="navbarFirst__element" />
      <a onClick={triggerArrow4} className="navbarFirst__element">
        Sign
        <img
          height="4.5px"
          src={arrow}
          className={switcher4 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={switcher4 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
      </a>
      <a className="navbarFirst__element">Case</a>
    </span>
  );
}
