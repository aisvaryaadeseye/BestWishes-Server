import React from "react";
import "./style.css";
import { FooterContainer } from "./style";
import bestWishLogo from "../../assets/images/bestWishesLogo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterContainer className="footerContainer">
      <div className="footerContact">
        <div className="footerImgContainer">
          <img src={bestWishLogo} className=" bestWishIcon" />
        </div>
        <div className="footerContactText">
          <p>
            {" "}
            <i className="fas fa-phone linkIcon"></i>+356 999 1234
          </p>
        </div>
        <div className="footerContactText">
          <p>
            {" "}
            <i className="fa-solid fa-location-dot"></i>Lukiokatu 77, Tavastia
            Proper
          </p>
        </div>
        <div className="footerContactText">
          <p>
            {" "}
            <i className="fa-solid fa-envelope"></i>Bestwishes"gmail.com
          </p>
        </div>
      </div>
      <div className="footerUsefulLink">
        <p>Useful links</p>

        <span className="usefullink">Blog</span>
        <span className="usefullink">Service</span>
        <span className="usefullink">About Us</span>
        <span className="usefullink">Support Center</span>
        <span className="usefullink">Term of use</span>
      </div>
      <div className="footerSocial">
        <p>Our Social</p>
        <span className="socialLink">
          <i className="fa-brands fa-linkedin socialIcon"></i>Linkedin
        </span>
        <span className="socialLink">
          <i className="fa-brands fa-facebook socialIcon"></i> Facebook
        </span>
        <span className="socialLink">
          {" "}
          <i className="fa-brands fa-twitter-square socialIcon"></i>Twitter
        </span>
        <span className="socialLink">
          {" "}
          <i className="fa-brands fa-instagram-square socialIcon"></i>Instagram
        </span>
      </div>
      <div className="footerBestWish">
        <p>New to Best Wishes</p>
        <h2>Be the first to know about offers and update</h2>
        <div className="footerEmailContainer">
          <input type="text" placeholder="Email address" />
          <div className="footerSubmitBtn">
            <button>Submit</button>
          </div>
        </div>
        <h2>Become a seller Today</h2>
      </div>
    </FooterContainer>
  );
};

export default Footer;
