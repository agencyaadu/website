import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// import Tooltip from "../Tooltip";
import { motion } from "framer-motion";
import Logohover from "../../assets/icons/Logohover.svg";
import Moon from "../../assets/icons/moon.svg";

import "./Header.scss";

const Header: React.FC = () => {

  // ================= DARK-MODE =================
  const [theme, setTheme] = useState("light-theme");
  
  const toggleTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [isActive, setIsActive] = useState("About");

  return (
    <>
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
          {/* <Tooltip text={"work in progress"}> */}
          <img src={Moon} alt="" onClick={() => toggleTheme()} />
          {/* </Tooltip> */}
        </div>
      </motion.div>
    </>
  );
};

export default Header;
