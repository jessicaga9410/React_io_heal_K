import React from "react";
import image from "../../Assets/logo2.png";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navb.css"

function Navb() {
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="light"
        variant="dark"
      >
        <Container>
          <div className="logo1">
            <Nav.Link href="/">
              <img src={image} className="logo1" alt="logo1" />
            </Nav.Link>
          </div>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="navbar-nv">
                <Nav.Link href="/"> Home </Nav.Link>
                <Nav.Link href="/about"> About</Nav.Link>
                <Nav.Link href="/coachingsessions">
                  {" "}
                  Coaching Sessions{" "}
                </Nav.Link>
                <Nav.Link href="/physicalhealing"> Physical Healing </Nav.Link>
                <Nav.Link href="/contact"> Contact </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
export default Navb;
