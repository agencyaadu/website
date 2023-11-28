import React from "react";
import Icon from "../../assets/images/Icon.svg";
import Footer from "../../assets/images/Footer.svg";
import "./Response.scss";
import video from "../../assets/download-video.mp4";

const Response: React.FC = () => {
  return (
    <div className="mobile-wrapper">
      <div className="center-content">
        <div className="gap">
          <img className="right" src={Icon} alt="" />
          <h1>mini website</h1>
        </div>

        <div className="company-title">
          <a href="https://b.link/u2vu96" target="_blank" rel="noopener noreferrer">
            <p>Service Request</p>
          </a>
        </div>
        <div className="profile">
          <a href={video} download>
            <p>Quality Reference</p>
          </a>
        </div>
      </div>
      <div className="footer">
        <img src={Footer} alt="" />
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Response;
