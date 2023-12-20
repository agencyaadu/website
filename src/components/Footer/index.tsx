import React from "react";
import Up from "../../assets/images/Vector.svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" viewBox="0 0 16 26" fill="none" className="main-arrow">
            <path d="M9 1C9 0.447715 8.55228 2.41412e-08 8 0C7.44772 -2.41412e-08 7 0.447715 7 1L9 1ZM7.29289 25.7071C7.68342 26.0976 8.31658 26.0976 8.70711 25.7071L15.0711 19.3431C15.4616 18.9526 15.4616 18.3195 15.0711 17.9289C14.6805 17.5384 14.0474 17.5384 13.6569 17.9289L8 23.5858L2.34315 17.9289C1.95262 17.5384 1.31946 17.5384 0.928931 17.9289C0.538407 18.3195 0.538407 18.9526 0.928931 19.3431L7.29289 25.7071ZM7 1L7 25L9 25L9 1L7 1Z" fill="#4A3020"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Footer;
