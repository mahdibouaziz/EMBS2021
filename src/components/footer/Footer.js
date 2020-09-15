import React from "react";
import "./footer.css";
import logoblack from "./embs_logo_white.png";
import logowhite from "./embs_logo_black.png";
import { MdLocationOn, MdMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";

const Footer = (props) => {
  const { theme } = props;
  return (
    <footer className="footer-section">
      <div className="wrapper">
        <div className="footer-col">
          <img
            loading="lazy"
            src={theme === "light" ? logoblack : logowhite}
            alt=""
          />
          <p className="footer-col-desc paragraph">
            If you think you have the passion, attitude and capability to join
            us, don't hesitate
          </p>
        </div>

        <div className="footer-col">
          <p className="title">CONTACT US</p>
          <p className="body paragraph">
            <MdLocationOn
              style={{ fontSize: "1.1rem", position: "relative", top: "-4px" }}
            />
            INSAT Centre Urbain Nord BP 676 - 1080 Tunis Cedex{" "}
          </p>
          <p className="body paragraph">
            <FiPhoneCall /> (+216) 53 737 757
          </p>
          <p className="body paragraph">
            <MdMailOutline /> embs-insat@outlook.com
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
