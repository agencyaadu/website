import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import Game from "../../assets/images/game.mp4";
import "./work.scss";
import Logo from "../Logo";


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
          <p className="request request1" style={{ textDecoration: "none" }}>
            CLICK ANYWHERE WITHIN THE BOX TO PLACE A SERVICE REQUEST.
          </p>
        </motion.div>
    </div>
  );
};

export default Work;
