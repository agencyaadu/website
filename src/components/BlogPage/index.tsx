import React, { useState } from "react";
import "./Blog.scss";
import Logohover from "../../assets/icons/Logohover.svg";
import Moon from "../../assets/icons/moon.svg";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "../Tooltip";
import Post1 from "./BlogList/BlogList1";
import Post2 from "./BlogList/BlogList2";
import Post3 from "./BlogList/BlogList3";
import Logo from "../Logo";

const BlogPage: React.FC = () => {
  const [isActive, setIsActive] = useState("Blog");
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="BlogPage-wrapper" style={{aspectRatio: isHomePage ? '' : '16/13' }}>

      {/* ========================= Header ========================= */}
      { isHomePage ? null : (
        <div
          className="header-wrapper"
          // initial={{ opacity: 0, y: 10 }}
          // animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: 2 } }}
        >
          <div className="logo">
            <Link to="/">
              <div className="logo1">
                <Logo />
              </div>
            </Link>
          </div>
          <div className="navbar-content">
            <div
              onClick={() => setIsActive("About")}
              className={`nav about-nav ${isActive === "About" ? "active" : ""}`}
            >
              <Link to="/">
                <p>ABOUT</p>
              </Link>
            </div>
            <div
              onClick={() => setIsActive("Work")}
              className={`nav work-nav ${isActive === "Work" ? "active" : ""}`}
            >
              <Link to="/">
                <p>WORK</p>
              </Link>
            </div>
            <div
              onClick={() => setIsActive("Blog")}
              className={`nav blog-nav ${isActive === "Blog" ? "active" : ""}`}
            >
              <Link to="/blog">
                <p>BLOG</p>
              </Link>
            </div>
            {/* <Tooltip text={"work in progress"}> */}
            <img src={Moon} className="moon moon-nav" alt="" />
            {/* </Tooltip> */}
          </div>
        </div>
      )}

      <div className="BlogPost">
        <Post1 />
        <Post2 />
        <Post3 />
      </div>
      
    </div>
  );
};

export default BlogPage;