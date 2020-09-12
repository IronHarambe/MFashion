import React from "react";

import "./ShopNav.scss";
import { Link } from "react-router-dom";

function ShopNav() {
  return (
    <div className="shopNav">
      <div className="shop__links">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h4>Painting</h4>
        </Link>
        <Link to="/minimal" style={{ textDecoration: "none" }}>
          <h4>Minimalistic</h4>
        </Link>
        <Link to="/abstract" style={{ textDecoration: "none" }}>
          <h4>Abstract</h4>
        </Link>
        <Link to="/oil" style={{ textDecoration: "none" }}>
          <h4>Oil</h4>
        </Link>
      </div>
    </div>
  );
}

export default ShopNav;
