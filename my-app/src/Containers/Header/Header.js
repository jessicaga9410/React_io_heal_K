import React from 'react';
import Button from 'react-bootstrap/Button';
// import image1 from '../../assets/p3.jpg';
import './header.css';

const Header = () => (
  <div className="header-section__padding" id="home">
    <div className="header-content">
      <h1 className="gradient__text">Healing with Kate</h1>
      <div className="header-content__input">
      <Button variant="outline-primary">Book with me Here</Button>{' '}
      </div>

    </div>
  </div>
);

export default Header;