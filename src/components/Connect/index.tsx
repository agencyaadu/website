import React from "react";
import One from "../../assets/icons/Vector (1).svg";
import Two from "../../assets/icons/Vector (3).svg";
import Three from "../../assets/icons/Vector (4).svg";
import Four from "../../assets/icons/Vector (5).svg";
import Five from "../../assets/icons/Vector (6).svg";
import Six from "../../assets/icons/Vector (7).svg";
import Seven from "../../assets/icons/Vector (8).svg";
import "./Connect.scss";
import { useMediaQuery } from "@uidotdev/usehooks";

const Connect: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:430px)");
  const isSmolMobile = useMediaQuery("(max-width:320px)");

  return (
    <div className="connect-wrapper">
      <div className="connect-container">
        <div className="up-img">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="82" viewBox="0 0 60 82" fill="none">
          <path d="M26 78C26 80.2091 27.7909 82 30 82C32.2091 82 34 80.2091 34 78L26 78ZM32.8284 1.17157C31.2663 -0.390524 28.7337 -0.390524 27.1716 1.17157L1.71573 26.6274C0.153634 28.1895 0.153634 30.7222 1.71573 32.2843C3.27783 33.8464 5.81049 33.8464 7.37259 32.2843L30 9.65685L52.6274 32.2843C54.1895 33.8464 56.7222 33.8464 58.2843 32.2843C59.8464 30.7222 59.8464 28.1895 58.2843 26.6274L32.8284 1.17157ZM34 78L34 4L26 4L26 78L34 78Z" fill="#B3B0AC"/>
        </svg>
        </div>
        <div className="connect-content">
          <div className="line"></div>
          <div className="content">
            <p>hello@aadu.agency</p>
            <h5>6/196 , THOTIYANKADU 639136 IN</h5>

            <div className="icon">
              <a href="https://discord.gg/mFdsehXr8x" target="_blank" rel="noreferrer">
                <img src={One} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
              <a href="https://t.me/agencyAadu" target="_blank" rel="noreferrer">
                <img src={Two} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
              <a href="https://www.behance.net/agencyaadu" target="_blank" rel="noreferrer">
                <img src={Three} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
              <a href="https://dribbble.com/agencyaadu" target="_blank" rel="noreferrer">
                <img src={Four} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
                <img src={Five} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              <a href="https://www.deviantart.com/agencyaadu" target="_blank" rel="noreferrer">
                <img src={Six} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
              <a href="https://www.artstation.com/agencyaadu" target="_blank" rel="noreferrer">
                <img src={Seven} alt="" className="iconsm" style={{ width: isSmolMobile ? "12px" : isMobile ? "15px" : "18px" }}/>
              </a>
            </div>
          </div>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
