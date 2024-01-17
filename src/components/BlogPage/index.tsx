import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Blog.scss";
import { Link, useLocation } from "react-router-dom";
import Post1 from "./BlogList/BlogList1";
import Post2 from "./BlogList/BlogList2";
import Post3 from "./BlogList/BlogList3";
import Logo from "../Logo";
import Post4 from "./BlogList/BlogList4";
import Post5 from "./BlogList/BlogList5";
import Post6 from "./BlogList/BlogList6";
import Post7 from "./BlogList/BlogList7";

interface MousePosition {
  x: number;
  y: number;
}

const BlogPage: React.FC = () => {
  const [isActive, setIsActive] = useState("Blog");
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  // CURSOR
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0
  });

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
      x: mousePosition.x-8,
      y: mousePosition.y-8,
      opacity: 0.72,
    },
  }


  return (
    <div className="BlogPage-wrapper" style={{aspectRatio: isHomePage ? '' : '16/13' }}>

      {/* ========================= Header ========================= */}
      { isHomePage ? null : (
        <div
          className="header-wrapper"
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
          </div>
        </div>
      )}

      <div className={`BlogPost ${isHomePage ? '' : 'BlogPostWBlog'}`}>
        <Post1 />
        <Post2 />
        <Post3 />
        <Post4 />
        <Post5 />
        <Post6 />
        <Post7 />
      </div>
      { isHomePage ? null : (<motion.div
        className="cursor" 
        variants = {variants}
        animate = "default"
      >
      </motion.div>) }
    </div>
  );
};

export default BlogPage;