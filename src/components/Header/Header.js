import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink, Route, Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        {/* Title */}
        <Navbar.Brand as={NavLink} to="/" className="logo">
          ArtNation
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* Options */}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {/* Dropdown */}
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/shop">
                Painting
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop">
                Abstract
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop">
                Minimal
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/shop">
                Digital
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/">
              Contact
            </Nav.Link>

            <Nav.Link as={NavLink} to="/shop">
              <ShoppingBasketIcon></ShoppingBasketIcon>
            </Nav.Link>
            <Navbar.Text>0</Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Link>
              {/* <Navbar.Text>Hello! </Navbar.Text> */}
              <Button variant="danger" className="sign__btn">
                Sign-In
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
