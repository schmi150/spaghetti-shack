import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";
import cart_logo from "../shopping-cart-outline.svg";
//import React, { useState } from "react";

function AppNavbar() {
  //const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar className="bg-myColor navbar-dark" expand="lg" collapseOnSelect>
        <Navbar.Brand as={Link} to="/">
          <img data-test="theLogo" src={logo} alt="logo" width="50" />
        </Navbar.Brand>
        <Navbar.Brand as={Link} to="/cart">
          <img data-test="theLogo" src={cart_logo} alt="logo" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-light float-end border border-2 mx-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto float-middle text-middle">
            <Nav.Link
              as={Link}
              to="/menu"
              className="link-text"
              eventKey="1"
              style={{ marginRight: 20 }}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/catering"
              className="link-text"
              eventKey="2"
              style={{ marginRight: 20 }}
            >
              Catering
            </Nav.Link>
            {/* <Nav.Link
              as={Link}
              to="/specials"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Specials
            </Nav.Link> */}
            <Nav.Link
              as={Link}
              to="/locations"
              className="link-text"
              eventKey="2"
              style={{ marginRight: 20 }}
            >
              Locations
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/hiring"
              className="link-text"
              eventKey="3"
              style={{ marginRight: 20 }}
            >
              Hiring
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/franchising"
              className="link-text"
              eventKey="4"
              style={{ marginRight: 20 }}
            >
              Franchising
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/fundraisers"
              className="link-text"
              eventKey="5"
              style={{ marginRight: 20 }}
            >
              Fundraisers
            </Nav.Link>

            {/* <Nav.Link as={Link} to="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Link
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Link
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Link
              </Nav.Link>
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Link
              </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
