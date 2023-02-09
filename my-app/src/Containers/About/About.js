import React from "react";
import "./about.css";
import img7 from "../../Assets/profilephoto.png";

function About() {
  return (
    <>
      <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
        <h1 className="about-header">About</h1>
        <div className="gpt3__whatgpt3-heading"></div>
        {/* <img className='h10Img' src={aboutMeImg} alt=""/> */}
        <div className="gpt3__whatgpt3-container">
          <img className="aboutImg" src={img7} alt="" />
          <h1 className="about-me-section">
          <div className="intro-aboutMe">
            {" "}
            Hey there!<br />
            <br />
             I’m Kate Carrara <br /> and I want to help you overcome<br />
              obstacles in your life. Im so glad you came across my page!   <br />{" "}
         Jesus has called us to use our giftings, <br />
         and I want to use mine to help you become the best<br />
          version of yourself.<br />
          <br />
        Click on the "Book with me Here" button to schedule your call 🤍<br />
        </div>
          </h1>
          <div className="container mx-auto px-4 text_about_container"></div>
        </div>
      </div>
    </>
  );
}

export default About;
