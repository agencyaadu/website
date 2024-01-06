import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import game from "../../assets/images/game.mp4";

import "./work.scss";
import Logo from "../Logo";

const Work: React.FC = () => {
  return (
      <div className="work-wrapper">
        <motion.div
          className="header-wrapper"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
        >
          <div className="logo">
            <Link to="/">
              <div className="logo1">
                <Logo />
              </div>
            </Link>
          </div>
          <div className="navbar-content">
            <div className='nav work-nav'>
              <Link to="/work" className="work-link">
                <p>WORK</p>
              </Link>
            </div>
            <div className='nav blog-nav'>
              <Link to="/blog">
                <p>BLOG</p>
              </Link>
            </div>
          </div>
        </motion.div>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} className="about-wrapper">
          <a
            href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIB0kGxc-dgSo="
            target="_blank"
          >
            <div className="work-box">
              <div className="box1 mob-box">
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
                  <div className="testimonials desktop-testimonials">
                    <div className="text">
                      <div className="text1 text2">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION .&nbsp;
                      </div>
                      <div className="text1 text2">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION .&nbsp;
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
                  <source src={game} type="video/mp4" />
                </video>
              </div>

              <div className="box1 box3">
                <div className="rotator rotator2">
                  <div className="testimonials mob-testimonials">
                    <div className="text">
                      <div className="text1 text2">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION .&nbsp;
                      </div>
                      <div className="text1 text2">
                        PRODUCT ROADMAPING . PRODUCT DEVELOPMENT . 3D MODELLING . 3D ANIMATION . 2D ANIMATION .&nbsp;
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </a>
          <p className="request request1" style={{ textDecoration: "none" }}>
            CLICK ANYWHERE WITHIN THE BOX TO PLACE A SERVICE REQUEST.
          </p>
        </motion.div>
    </div>
  );
};

export default Work;