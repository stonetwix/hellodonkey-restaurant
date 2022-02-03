import { CSSProperties } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/logo-hd-white.png";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import BadgeCart from "./Cart/Badge";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="sm" style={navbarStyle}>
      <Container>
        <Navbar.Brand href="/" style={brandStyle}>
          <img
            src={logo}
            alt="Hello Donkey logo"
            width={window.innerWidth > 786 ? "65%" : "40%"}
            height={window.innerWidth > 786 ? "65%" : "40%"}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          area-aria-controls="responsive-navbar-nav"
          style={{ background: "#61c9a8" }}
        />
        <Navbar.Collapse id="responsive-navbar-nav" style={containerStyle}>
          <Nav style={navStyle}>
            <Link to="/bookatable" style={navItemStyle}>
              Book a table
            </Link>
            <Link to="/takeaway" style={navItemStyle}>
              Take away
            </Link>
            <Link to="/leftovers" style={navItemStyle}>
              Leftovers
            </Link>
            <Link to="/cart" style={{ color: "white" }}>
              <ShoppingCartOutlined
                style={{ fontSize: "1.5rem", marginRight: "-0.3rem" }}
              />
            </Link>
            <BadgeCart />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

const navbarStyle: CSSProperties = {
  background: "#61c9a8",
  height: window.innerWidth > 786 ? "6.5rem" : "5rem",
  width: "100%",
};

const containerStyle: CSSProperties = {
  justifyContent: "flex-end",
  flexDirection: "row",
  background: "#61c9a8",
  padding: "30px 0 20px 20px",
  width: "100%",
};

const navStyle: CSSProperties = {
  fontFamily: "Staatliches",
  fontSize: "1rem",
};

const brandStyle: CSSProperties = {
  float: "left",
  width: window.innerWidth > 786 ? "20rem" : "14rem",
};

const navItemStyle: CSSProperties = {
  marginRight: "1.5rem",
  color: "white",
};
