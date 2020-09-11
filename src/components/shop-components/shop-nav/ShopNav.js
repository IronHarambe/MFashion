import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./ShopNav.scss";

function ShopNav() {
  return (
    <div className="shop__nav">
      {/*  */}
      <Nav
        defaultActiveKey="/home"
        className="flex-sm-column "
        bg="primary"
        variant="dark"
      >
        <Nav.Link as={NavLink} to="/shop">
          Painting
        </Nav.Link>
        <Nav.Link as={NavLink} to="/minimal">
          Minamilistic
        </Nav.Link>
        <Nav.Link as={NavLink} to="/oil">
          Oil Painting
        </Nav.Link>
        <Nav.Link as={NavLink} to="/abstract">
          Abstract
        </Nav.Link>
      </Nav>
    </div>
  );
}

export default ShopNav;
