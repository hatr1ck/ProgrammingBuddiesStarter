import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";
import "./navbarFirst.scss";
import arrow from "./arrow.svg";

// I know this code is a mess :D
interface Options {
  switcher?: boolean;
  switcher1?: boolean;
  switcher2?: boolean;
  switcher3?: boolean;
  switcher4?: boolean;
}
export default function NavBarFirst() {
  let [obj, setObj] = useState<Options>({});
  let [prev, setPrev] = useState("");

  let triggerArrow = (switcher: string) => {
    if (switcher == prev) {
      setObj({ [switcher]: false });
      setPrev("");
    } else {
      setObj({ [switcher]: true });
      setPrev(switcher);
    }
  };
  return (
    <div className="navbarFirst">
      <a href="/" className="navbarLogo">
        <img alt="404" src={logo} />
      </a>

      <a
        onClick={() => triggerArrow("switcher")}
        className="navbarFirst__element"
      >
        Categories
        <img
          height="4.5px"
          src={arrow}
          className={obj.switcher ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={obj.switcher ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
        {obj.switcher ? (
          <div className="navbarFirstSubmenu">
            <Link to="/" className="navbarFirstSubmenuElement">
              Main Menu
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Grocery
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Household Essentials
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Cyber Monday
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Gift Ideas
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Christmas
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Women
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Men
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Young Adult
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Kids
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Baby
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Shoes
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Home
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Furniture
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Kitchen & Dining
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Patio & Garden
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Toys
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Electronics
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Video Games
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Movies, Music & Books
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Sports & Outdoors
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Beauty
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Personal Care
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Health
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Pets
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Luggage
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              School & Office Supplies
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Party Supplies
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Gift Cards
            </Link>
          </div>
        ) : null}
      </a>

      <a
        onClick={() => triggerArrow("switcher1")}
        className="navbarFirst__element"
      >
        Deals
        <img
          height="4.5px"
          src={arrow}
          className={obj.switcher1 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={obj.switcher1 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
        {obj.switcher1 ? (
          <div className="navbarFirstSubmenu">
            <Link
              to="/c/clearance/-/N-5q0ga?lnk=dNav_clearance"
              className="navbarFirstSubmenuElement"
            >
              Clearance
            </Link>
            <Link to="/weekly-add" className="navbarFirstSubmenuElement">
              Weekly Ad
            </Link>
            <Link to="/c/top-deals" className="navbarFirstSubmenuElement">
              Top Deals
            </Link>
            <Link
              to="/redcard/about?lnk=dNav_redcardexclusives"
              className="navbarFirstSubmenuElement"
            >
              Redcard Exlusives
            </Link>
            <Link
              to="/offers/target-circle"
              className="navbarFirstSubmenuElement"
            >
              Target Circle Offers
            </Link>
          </div>
        ) : null}
      </a>
      <a
        onClick={() => triggerArrow("switcher2")}
        className="navbarFirst__element"
      >
        What’s New
        <img
          height="4.5px"
          src={arrow}
          className={obj.switcher2 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={obj.switcher2 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
        {obj.switcher2 ? (
          <div className="navbarFirstSubmenu">
            <Link
              to="/offers/target-style"
              className="navbarFirstSubmenuElement"
            >
              #TargetStyle
            </Link>
            <Link to="/finds/BeautyNews" className="navbarFirstSubmenuElement">
              Beauty New Arrivals
            </Link>
            <Link
              to="/c/new-arrivals/women"
              className="navbarFirstSubmenuElement"
            >
              Women's New Arrivals
            </Link>
            <Link
              to="/c/home-new-arrivals"
              className="navbarFirstSubmenuElement"
            >
              Home New Arrivals
            </Link>
            <Link
              to="/c/kids-new-arrivals"
              className="navbarFirstSubmenuElement"
            >
              Kids' New Arrivals
            </Link>
            <Link
              to="/c/men-new-arrivals"
              className="navbarFirstSubmenuElement"
            >
              Men's New Arrivals
            </Link>
            <Link
              to="/c/nails-makeup-beauty/"
              className="navbarFirstSubmenuElement"
            >
              Holiday Nail Trends
            </Link>
            <Link
              to="/finds/stories/ideas-cozy"
              className="navbarFirstSubmenuElement"
            >
              Cozy Season Ideas
            </Link>
            <Link to="/target-finds" className="navbarFirstSubmenuElement">
              Target Finds
            </Link>
          </div>
        ) : null}
      </a>
      <a
        onClick={() => triggerArrow("switcher3")}
        className="navbarFirst__element"
      >
        Pickup & Delivery
        <img
          height="4.5px"
          src={arrow}
          className={obj.switcher3 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={obj.switcher3 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
        {obj.switcher3 ? (
          <div className="navbarFirstSubmenu">
            <Link to="/c/order-pickup/" className="navbarFirstSubmenuElement">
              Order Pickup
            </Link>
            <Link
              to="/c/same-day-delivery"
              className="navbarFirstSubmenuElement"
            >
              Same Day Delivery
            </Link>
            <Link to="/c/drive-up/" className="navbarFirstSubmenuElement">
              Drive Up
            </Link>
          </div>
        ) : null}
      </a>
      <input
        type="search"
        id="INPUT_1"
        name="searchTerm"
        placeholder="Search"
      />
      <a
        onClick={() => triggerArrow("switcher4")}
        className="navbarFirst__element"
      >
        Sign
        <img
          height="4.5px"
          src={arrow}
          className={obj.switcher4 ? "arrow__down" : "arrow__down__away"}
        />
        <img
          className={obj.switcher4 ? "arrow__up__away" : "arrow__up"}
          height="4.5px"
          src={arrow}
        />
        {obj.switcher4 ? (
          <div className="navbarFirstSubmenu">
            <Link to="/" className="navbarFirstSubmenuElement">
              Clearance
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Weekly Ad
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Top Deals
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Redcard Exlusives
            </Link>
            <Link to="/" className="navbarFirstSubmenuElement">
              Target Circle Offers
            </Link>
          </div>
        ) : null}
      </a>
      <a className="navbarFirst__element">Case</a>
    </div>
  );
}
