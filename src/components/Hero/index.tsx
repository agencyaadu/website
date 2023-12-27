import React, { useEffect } from "react";
import Text1 from "../../assets/images/Handheld..svg";
import "./Hero.scss";
import Moon from "../../assets/icons/moon.svg";
import { useState } from "react";
import "../Header/Header.scss";
import { Link } from "react-router-dom";
import Logohover from "../../assets/icons/Logohover.svg";
import Logo from "../Logo";
import Loading from "../Loading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import All from "../../assets/images/All.svg";
import The from "../../assets/images/the.svg";
import Way from "../../assets/images/way.svg";
import Game from "../../assets/images/game.mp4";
import { motion } from "framer-motion";
import BlogPage from "../BlogPage";


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
        <div className="logo" style={{ opacity: isActive === "About" ? 1 : ''}}>
          <Link to="/">
            <div className="logo1" onClick={() => setIsActive("About")}>
              <Logo />
            </div>
          </Link>
        </div>
        <div className="navbar-content">
          <div
            onClick={() => setIsActive("About")}
            className={`nav about-nav ${isActive === "About" ? "active" : ""}`}
          >
            <p>ABOUT</p>
          </div>
          <div
            onClick={() => setIsActive("Work")}
            className={`nav work-nav ${isActive === "Work" ? "active" : ""}`}
          >
            <p>WORK</p>
          </div>
          <div
            onClick={() => setIsActive("Blog")}
            className={`nav blog-nav ${isActive === "Blog" ? "active" : ""}`}
          >
              <p>BLOG</p>
          </div>
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
                marginTop: "16px",
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
            className="request request1"
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 2 },
            }}
          >
            CLICK ANYWHERE WITHIN THE BOX TO PLACE A SERVICE REQUEST.
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
                <div className="rotator">
                  <div className="services">
                    <div className="text">
                      <div className="text1">
                        &nbsp;THEY’re the best in what they do - would absolutely recommend them to do designing for your website.
                      </div>
                      <div className="text1">
                        &nbsp;THEY’re the best in what they do - would absolutely recommend them to do designing for your website.
                      </div>
                      <div className="text1">
                        &nbsp;THEY’re the best in what they do - would absolutely recommend them to do designing for your website.
                      </div>
                      <div className="text1">
                        &nbsp;THEY’re the best in what they do - would absolutely recommend them to do designing for your website.
                      </div>
                    </div>
                  </div>
                  <div className="testimonials">
                    <div className="text">
                      <div className="text1">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION . 
                      </div>
                      <div className="text1">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION . 
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="box2">
                <video autoPlay muted onEnded={() => {
                  setTimeout(()=> {
                    window.location.reload();
                  }, 3000);
                }}>
                  <source src={Game} type="video/mp4" />
                </video>
              </div>
            </div>
          </a>
          <p className="request request1" style={{ textDecoration: "none" }}>
            CLICK ANYWHERE WITHIN THE BOX TO PLACE A SERVICE REQUEST.
          </p>
        </motion.div>
      )}

      {isActive === "Blog" && (
        <div>
          <BlogPage />
        </div>
      )}
    </div>
  );
};

export default Hero;
