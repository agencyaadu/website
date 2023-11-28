import React, { useEffect } from "react";
import Text1 from "../../assets/images/Handheld..svg";
import "./Hero.scss";
import Moon from "../../assets/icons/moon.svg";
import { useState } from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import Logohover from "../../assets/icons/Logohover.svg";
import Loading from "../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import All from "../../assets/images/All.svg";
import The from "../../assets/images/the.svg";
import Way from "../../assets/images/way.svg";
import Game from "../../assets/images/game.mp4";
import { motion } from "framer-motion";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  touchThreshold: 100,
  arrows: false,
  autoplaySpeed: 4000,
};

const Hero: React.FC = () => {
  const [isActive, setIsActive] = useState("About");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (isActive !== "About") {
      setShowLoader(false);
      return;
    }
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 8600);

    return () => {
      clearTimeout(timeout);
    };
  }, [isActive]);

  return (
    <div className="hero-wrapper">
      <motion.div
        className="header-wrapper"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
      >
        <div className="logo">
          <Link to="/">
            <img className="logo1" src={Logohover} alt="" />
          </Link>
        </div>
        <div className="navbar-content">
          <div
            onClick={() => setIsActive("About")}
            className={`nav ${isActive === "About" ? "active" : ""}`}
          >
            <p>ABOUT</p>
          </div>
          <div
            onClick={() => setIsActive("Work")}
            className={`nav ${isActive === "Work" ? "active" : ""}`}
          >
            <p>WORK</p>
          </div>
          <div
            onClick={() => setIsActive("Blog")}
            className={`nav ${isActive === "Blog" ? "active" : ""}`}
          >
            <Link to="/blog">
              <p>BLOG</p>
            </Link>
          </div>

          <img src={Moon} alt="" />
        </div>
      </motion.div>

      {isActive === "About" && (
        <div className="about-wrapper">
          <a
            href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIB0kGxc-dgSo="
            target="_blank"
          >
            <motion.div
              className="hero-box"
              initial={{ opacity: 0, marginTop: "0" }}
              animate={{
                opacity: 1,
                marginTop: "20px",
                transition: { duration: 1 },
              }}
            >
              <motion.div
                className="hero-box-bg"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.7, duration: 2 },
                }}
              >
                <div className="text">
                  <motion.img
                    className="hand"
                    src={Text1}
                    alt=""
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 4.5, duration: 1 },
                    }}
                  />
                  <div className="flex">
                    <motion.img
                      className="way"
                      src={All}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 5.5, duration: 1.5 },
                      }}
                    />
                    <motion.img
                      className="way"
                      src={The}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 6.5, duration: 0.7 },
                      }}
                    />
                    <motion.img
                      className="way"
                      src={Way}
                      alt=""
                      style={{ marginTop: "15px" }}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 6.6, duration: 0.7 },
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </a>

          <motion.p
            className="request"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 2 },
            }}
          >
            CLICK ANYWHERE TO PLACE A SERVICE REQUEST
          </motion.p>

          {showLoader && (
            <motion.div
              className="loading-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1, duration: 1 } }}
            >
              <Loading setIsActive={setIsActive} />
            </motion.div>
          )}

          <motion.div
            className="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0, transition: { delay: 1 } }}
          ></motion.div>
        </div>
      )}

      {isActive === "Work" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }}>
          <a
            href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIB0kGxc-dgSo="
            target="_blank"
          >
            <div className="work-box">
              <div className="box1">
                <div className="slider-carousel">
                  {/* <Slider {...settings}>
                  <div className="slider-card">
                    <div className="background"></div>
                  </div>
                  <div className="slider-card">
                    <div
                      className="background"
                      style={{ backgroundColor: "red" }}
                    ></div>
                  </div>
                  <div className="slider-card">
                    <div
                      className="background"
                      style={{ backgroundColor: "green" }}
                    ></div>
                  </div>
                  <div className="slider-card">
                    <div className="background"></div>
                  </div>
                </Slider> */}
                </div>

                {/* <h5>OUR CLIENT</h5> */}
                <div className="slider-carousel">
                  <Slider {...settings}>
                    <div className="slider-card-content">
                      <p>
                        I noticed a huge gap when it came to good service delivery in the market ,
                        agencyAadu is my response to bridging this gap .
                      </p>
                      <h5>FREDRIK PARKER</h5>
                    </div>
                    <div className="slider-card-content">
                      <p>
                        絶対的なプロフェッショナルであるagencyAaduとの取引に際し、私たちが示してくれた多大な敬意に心から感謝しています。
                      </p>
                      <h5>HIROTO HAYASHI</h5>
                    </div>
                    <div className="slider-card-content">
                      <p style={{ paddingTop: "35px" }}>每次都准时！</p>
                      <h5>XIAO MA</h5>
                    </div>
                    <div className="slider-card-content">
                      <p>
                        우리가 원하는 것을 시각화할 수 있어서 기뻤습니다. 이는 고객이 필요로 하고
                        좋아하는 디자인을 맞춤화하는 데 큰 도움이 되었습니다.
                      </p>
                      <h5>PARK TAE - JOON</h5>
                    </div>
                    <div className="slider-card-content">
                      <p>
                        Polite , Patient and made sure our requirement was understood before
                        beginning production
                      </p>
                      <h5>SUZZANE KOZACK</h5>
                    </div>
                    <div className="slider-card-content">
                      <p>
                        Every step we made was documented , would certainly insist that you work for
                        a month to see for yourself
                      </p>
                      <h5>JEFF BAKER</h5>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className="box2">
                <video
                  autoPlay
                  muted
                  onEnded={() => {
                    setTimeout(() => {
                      window.location.reload();
                    }, 3000);
                  }}
                >
                  <source src={Game} type="video/mp4" />
                </video>
              </div>
            </div>
          </a>
          <p className="request" style={{ textDecoration: "none" }}>
            CLICK ANYWHERE TO PLACE A SERVICE REQUEST
          </p>
        </motion.div>
      )}

      {isActive === "Blog" && (
        <div>
          <h1>Hello</h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
