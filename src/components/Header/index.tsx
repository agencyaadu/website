import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/icons/Logo.svg";
import Moon from "../../assets/icons/moon.svg";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <>
      <motion.div
        // className="header-wrapper"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 5 } }}
      >
        <div className="logo">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="navbar-content">
          <div>
            <p>ABOUT</p>
          </div>
          <div>
            <p>WORK</p>
          </div>
          <div>
            <p>BLOG</p>
          </div>

          <img src={Moon} alt="" />
        </div>
      </motion.div>
    </>
  );
};

export default Header;
