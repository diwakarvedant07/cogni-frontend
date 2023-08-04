import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./header.module.css";
import companyLogo from "../Images/cogni white logo.webp";
import userLogo from "../Images/logo2.png";

const Header = () => {
  return (
    <Navbar className={classes.navbar}>
      <Navbar.Brand as={Link} to="/" className={classes.brand}>
        <img
          src={companyLogo}
          alt="Company Logo"
          className={classes.logo}
          style={{ width: "197px", height: "63px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className={`ml-auto ${classes.navLinks}`}>
          <Nav.Link
            as={Link}
            to="/"
            exact
            className={classes.navLink}
            style={{ color: "white" }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/about"
            className={classes.navLink}
            style={{ color: "white" }}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/contact"
            className={classes.navLink}
            style={{ color: "white" }}
          >
            Contact
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/login"
            className={classes.navLink}
            style={{ color: "white" }}
          >
            <img src={userLogo} alt="User" className={classes.userLogo} />
            User
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
