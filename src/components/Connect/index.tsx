import React from "react";
// import Up from "../../assets/images/Vector.svg";
import One from "../../assets/icons/Vector (1).svg";
import Two from "../../assets/icons/Vector (3).svg";
import Three from "../../assets/icons/Vector (4).svg";
import Four from "../../assets/icons/Vector (5).svg";
import Five from "../../assets/icons/Vector (6).svg";
import Six from "../../assets/icons/Vector (7).svg";
import Seven from "../../assets/icons/Vector (8).svg";
import "./Connect.scss";

const Connect: React.FC = () => {
  return (
    <div className="connect-wrapper">
      <div className="connect-container">
        <div className="up-img">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="78" viewBox="0 0 60 78" fill="none">
              <path d="M32.8284 1.17157C31.2663 -0.390526 28.7337 -0.390526 27.1716 1.17157L1.71573 26.6274C0.153633 28.1895 0.153633 30.7222 1.71573 32.2843C3.27783 33.8464 5.81049 33.8464 7.37259 32.2843L30 9.65685L52.6274 32.2843C54.1895 33.8464 56.7222 33.8464 58.2843 32.2843C59.8464 30.7222 59.8464 28.1895 58.2843 26.6274L32.8284 1.17157ZM34 78L34 4L26 4L26 78L34 78Z" fill="#B3B0AC"/>
            </svg>
        </div>
        <div className="connect-content">
          <div className="line"></div>
          <div className="content">
            <p>hello@aadu.agency</p>
            <h5>6/196 , THOTIYANKADU 639136 IN</h5>

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

export default Connect;
