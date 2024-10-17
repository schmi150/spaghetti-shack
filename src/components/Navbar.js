import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.svg";

function AppNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-myColor navbar-dark">
        <Navbar.Brand as={Link} to="/Homepage">
          <img data-test="theLogo" src={logo} alt="logo" width="50" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-light float-end border border-2 mx-3"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto float-end text-end">
            <Nav.Item
              as={Link}
              to="/"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Home
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/menu"
              className="link-text "
              style={{ marginRight: 20 }}
            >
              Menu
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/catering"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Catering
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/specials"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Specials
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/locations"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Locations
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/hiring"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Hiring
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/franchising"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Franchising
            </Nav.Item>
            <Nav.Item
              as={Link}
              to="/fundraisers"
              className="link-text"
              style={{ marginRight: 20 }}
            >
              Fundraisers
            </Nav.Item>

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
