import React from "react";
import image from "../../Assets/logo.png";
import "./navb.css";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navb() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="light"
      >
        <Container>
          <div className="logo1">
            <Nav.Link href="/">
              <img src={image} alt="" />
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <div className="nav-section">
              <Nav>
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About</Nav.Link>
                <Nav.Link href="/coachingsessions">
                  {" "}
                  Coaching Sessions{" "}
                </Nav.Link>
                <Nav.Link href="/physicalhealing"> Physical Healing </Nav.Link>
                <Nav.Link href="/contact"> Contact </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navb;
