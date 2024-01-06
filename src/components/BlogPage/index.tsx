import React, { useState } from "react";
import "./Blog.scss";
import { Link, useLocation } from "react-router-dom";
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
      </div>
      
    </div>
  );
};

export default BlogPage;