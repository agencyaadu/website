import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import game from "../../assets/images/game.mp4";

import "./work.scss";
import Logo from "../Logo";

interface MousePosition {
  x: number;
  y: number;
}

const Work: React.FC = () => {

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });
  console.log(mousePosition)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x-7,
      y: mousePosition.y-7,
      opacity: 0.72,
    },
    change: {
      width: '84px',
      height: '84px',
      x: mousePosition.x-42,
      y: mousePosition.y-42,
    },
  }

  const [cursorVariant, setCursorVariant] = useState("default");

  const textEnter = () => setCursorVariant("change")
  const textLeave = () => setCursorVariant("default")
  

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
        
        <motion.div
          className="about-wrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 2 } }} 
          >
          <a
            href="https://survey.qwary.com/form/S_wSzSPnasH9Wc_FT15X0J1BuEcPl5gIB0kGxc-dgSo="
            target="_blank"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
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
        <motion.div
          className="cursor" 
          variants = {variants}
          animate = {cursorVariant}
          transition = {{ease: "backOut"}}
        >
          {cursorVariant === "change" && (
            <p className="cursor-text">Place<br/>Service Request</p>
          )}
        </motion.div>
    </div>
  );
};

export default Work;