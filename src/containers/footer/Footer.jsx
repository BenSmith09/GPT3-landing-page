import React from "react";
import "./footer.css";
import gpt3Logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to step into the future before others?
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Technologies Used</h4>
          <p>Javascript</p>
          <p>JSX</p>
          <p>CSS</p>
          <p>React.JS</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Resources</h4>
          <p>Animista.net</p>
          <p>Figma</p>
          <p>angrytools.com/gradient</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Disclaimers</h4>
          <p>This website is for training purposes only</p>
          <p>Created for Ben Smith's online Portfolio</p>
          <p>bensmith2365@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
