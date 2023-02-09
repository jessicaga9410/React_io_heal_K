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
            {" "}
            Hi, I’m Kate Carrara. I help people in their healing journey, <br />
            by overcoming the emotional, spiritual and physical obstacles <br />{" "}
            they may be encountering in their lives.
          </h1>
          <div className="container mx-auto px-4 text_about_container"></div>
        </div>
      </div>
    </>
  );
}

export default About;
