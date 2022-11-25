import React from "react";
import Button from "react-bootstrap/Button";

import "./header.css";

const Header = () => (
  <div className="header-section__padding" id="home">
    <div className="">
    <div className="header-text">
      <h1 className="header-text" >HEALING WITH KATE</h1>
</div>
     <div className="header-content__input">
        <Button variant="secondary">Book with me Here</Button>{" "}
      </div>
    </div>
  </div>
);

export default Header;
