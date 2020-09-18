import React from "react";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import { NavLink, Route, Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import "./Header.scss";
import { useStaeValue } from "../context-api/StateProvider";
import { auth } from "../../pages/Firebase";

function Header() {
  const [{ basket, user }, dipatch] = useStaeValue();

  // When user presses button, signs them out
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

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
              <NavDropdown.Item as={NavLink} to="/oil">
                Oil
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
            <Navbar.Text className="user__name">{user?.email}</Navbar.Text>
            <Nav.Link>
              {/* If there is no user, then redirect to sign in page */}
              <Nav.Link as={NavLink} to={!user && "/sign"}>
                <div className="login_info" onClick={handleAuthentication}>
                  <Button variant="danger" className="sign__btn">
                    {/* If user exists Sign in else signout */}
                    {user ? "Sign Out" : "Sign In"}
                  </Button>
                </div>
              </Nav.Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
