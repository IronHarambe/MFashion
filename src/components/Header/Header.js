import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink, Route, Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.scss";
import { useStaeValue } from "../context-api/StateProvider";

function Header() {
  const [{ basket }, dipatch] = useStaeValue();

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

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>

            <Nav.Link as={NavLink} to="/checkout">
              <ShoppingBasketIcon></ShoppingBasketIcon>
            </Nav.Link>
            {/* The amount of items in the basket */}
            <Navbar.Text>{basket?.length}</Navbar.Text>
          </Nav>
          <Nav>
            <Nav.Link>
              {/* <Navbar.Text>Hello! </Navbar.Text> */}
              <Nav.Link as={NavLink} to="/sign">
                <Button variant="danger" className="sign__btn">
                  Sign-In
                </Button>
              </Nav.Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
