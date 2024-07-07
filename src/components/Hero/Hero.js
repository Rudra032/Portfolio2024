import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import resume from "../../assets/resume2.pdf";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-title">
        <h1>I'M Naman Rajput</h1>
        <span>Full Stack Developer</span>
        <p>
          Welcome to my portfolio! I'm Naman Rajput, a Full Stack Developer
          turning ideas into reality through innovative web solutions.
        </p>
      </div>
      <div className="hero-action">
        <div className="hero-connect">
          {" "}
          <AnchorLink className="anchor-link" href="#contact">
            Contact with me
          </AnchorLink>
        </div>
        <div className="hero-resume">
          <a href={resume} download="resume.pdf">
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
