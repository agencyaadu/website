import React from "react";
import Up from "../../assets/images/Vector.svg";
import One from "../../assets/icons/Vector (1).svg";
import Two from "../../assets/icons/Vector (3).svg";
import Three from "../../assets/icons/Vector (4).svg";
import Four from "../../assets/icons/Vector (5).svg";
import Five from "../../assets/icons/Vector (6).svg";
import Six from "../../assets/icons/Vector (7).svg";
import Seven from "../../assets/icons/Vector (8).svg";
import "./Footer.scss";

const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="up-img">
          <img src={Up} alt="" />
        </div>
        <div className="footer-content">
          <div className="line"></div>
          <div className="content">
            <p>hello@aadu.agency</p>
            <h5>6/170 , THOTIYANKADU 639136 IN</h5>

            <div className="icon">
              <img src={One} alt="" />
              <img src={Two} alt="" />
              <img src={Three} alt="" />
              <img src={Four} alt="" />
              <img src={Five} alt="" />
              <img src={Six} alt="" />
              <img src={Seven} alt="" />
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
