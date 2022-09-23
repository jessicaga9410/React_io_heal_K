import React from 'react';
// import image from '../../Assets/logo.png';
import './navb.css';
import { Navbar, Nav, Container } from 'react-bootstrap';


function Navb() {
return (
  <>
  
         <Navbar collapseOnSelect fixed='top' expand="sm" bg="light" variant="light">
          <Container>
          {/* <div className="logo1">
          <img src={image} alt="" />
          </div> */}
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav>
                <Nav.Link href='/'> Home </Nav.Link>
                <Nav.Link href='/coachingsessions'> Coaching Sessions </Nav.Link>
                <Nav.Link href='/physicalhealing'> Physical Healing </Nav.Link>
                <Nav.Link href='/about'> About Me</Nav.Link>
                <Nav.Link href='/contact'> Contact </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
         </Navbar>
          
    </>
);
}
export default Navb;
