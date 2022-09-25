import React from "react";
import Button from "react-bootstrap/Button";

import "./header.css";

const Header = () => (
  <div className="header-section__padding" id="home">
    <div className="header-content">
    <div className="fade-in-text">
      <h1 className="gradient_text">Healing with Kate</h1>
</div>
     <div className="header-content__input">
        <Button variant="secondary">Book with me Here</Button>{" "}
      </div>
    </div>
  </div>
);

export default Header;
