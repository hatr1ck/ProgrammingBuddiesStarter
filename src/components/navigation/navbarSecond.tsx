import React, { useState } from "react";
import "./navbarSecond.scss";
import { Link } from "react-router-dom";

export default function NavBarSecond() {
  return (
    <div className="navigationSecond">
      <Link className="linkFromNav" to="/gift-registry">
        Registry
      </Link>
      <Link className="linkFromNav" to="/weekly-add">
        Weekly Ad
      </Link>
      <Link className="linkFromNav" to="/redcard/about">
        RedCard
      </Link>
      <Link className="linkFromNav" to="/c/gift-cards/-/N-5xsxu">
        Gift Cards
      </Link>
      <Link className="linkFromNav" to="/store-locator/find-stores">
        Find Stores
      </Link>
      <Link className="linkFromNav" to="/account/orders">
        Orders
      </Link>
    </div>
  );
}
