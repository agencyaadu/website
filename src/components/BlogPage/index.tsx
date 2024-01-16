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
      x: mousePosition.x-8,
      y: mousePosition.y-8,
      opacity: 0.72,
    },
    changeforwork: {
      width: '48px',
      height: '48px',
      x: mousePosition.x-24,
      y: mousePosition.y-24,
    },
    changeforblog: {
      width: '48px',
      height: '48px',
      x: mousePosition.x-24,
      y: mousePosition.y-24,
    }
  }

  const [cursorVariant, setCursorVariant] = useState("default");

  const textLeave = () => setCursorVariant("default")
  const workTextEnter = () => setCursorVariant("changeforwork")
  const blogTextEnter = () => setCursorVariant("changeforblog")

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
                <p
                  onMouseEnter={workTextEnter}
                  onMouseLeave={textLeave}
                >WORK</p>
              </Link>
            </div>
            <div
              onClick={() => setIsActive("Blog")}
              className={`nav blog-nav ${isActive === "Blog" ? "active" : ""}`}
            >
              <Link to="/blog">
                <p
                  onMouseEnter={blogTextEnter}
                  onMouseLeave={textLeave}
                >BLOG</p>
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
      <motion.div
        className="cursor" 
        variants = {variants}
        animate = {cursorVariant}
      >
        {cursorVariant === "changeforwork" && (
          <p className="cursor-text" style={{fontSize: '0.6rem'}}>Work</p>
        )}
        {cursorVariant === "changeforblog" && (
          <p className="cursor-text" style={{fontSize: '0.6rem'}}>Blog</p>
        )}
      </motion.div>
    </div>
  );
};

export default BlogPage;