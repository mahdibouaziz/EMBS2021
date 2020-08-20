import React from "react";
import { Container, Row } from "react-bootstrap";
import "./footer.css";
import logo from "./embs_logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-col">
          <img src={logo} alt="" />
          <p className="footer-col-desc">
            If you think you have the passion, attitude and capability to join
            us, don't hesitate
          </p>
        </div>

        <div className="footer-col">
          <p className="title">CONTACT US</p>
          <p className="body">
            <i className="fas fa-location-arrow"></i>
            INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex{" "}
          </p>
          <p className="body">
            <i className="fas fa-phone-square-alt"></i> (+216) 58 869 350
          </p>
          <p className="body">
            <i className="fas fa-envelope-square"></i> embs-insat@outlook.com
          </p>
          <p className="social-footer">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
