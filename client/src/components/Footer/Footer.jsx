import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="email">
        <form className="email__form">
          <label className="email__form--label">email address:</label>
          <input
            className="email__form--input"
            placeholder="Your email address"
          ></input>
          <button className="email__form--button">sign up</button>
        </form>
      </div>
      <div className="intro-wrapper">
        <div className="intro">
          <h2 className="intro__guide--title">Shopping Guide</h2>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Blog</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>FAQs</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Payment</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Shipment</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Where is my order?</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Return policy</span>
          </Link>
        </div>
        <div className="intro">
          <h2 className="intro__advise--title">Style Advisor</h2>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Your Account</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Information</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Addresses</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Discount</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Ordered History</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Order Tracking</span>
          </Link>
        </div>
        <div className="intro">
          <h2 className="intro__info--title">Information</h2>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Site Map</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Search Terms</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Advanced Search</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>About Us</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Contact Us</span>
          </Link>
          <Link className="intro__link" to="#">
            <i className="fas fa-chevron-right"></i>
            <span>Suppliers</span>
          </Link>
        </div>
        <div className="intro">
          <h2 className="intro__contact--title">Contact us</h2>
          <div className="intro__contact--content">
            <i className="fas fa-map-marker-alt"></i>
            <span>423 Minh Khai, Hai Bà Trưng, Hà Nội</span>
          </div>
          <div className="intro__contact--content">
            <i className="fas fa-phone-alt"></i>
            <span>+1 800 123 1234</span>
          </div>
          <div className="intro__contact--content">
            <i className="fas fa-envelope"></i>
            <span>trinhtruong1803@gmail.com</span>
          </div>
          <div className="intro__contact--content">
            <div className="follow">
              <a href="https://www.facebook.com/" target="_blank">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank">
                <i className="fab fa-instagram-square"></i>
              </a>
              <a href="https://twitter.com/" target="_blank">
                <i className="fab fa-twitter-square"></i>
              </a>
              <a
                href="https://github.com/Truong1803?tab=repositories"
                target="_blank  "
              >
                <i className="fab fa-github-square"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2016 magikthemes. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
