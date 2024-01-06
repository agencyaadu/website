import React from "react";
import { motion } from "framer-motion";
import BlogPage from "../../components/BlogPage";
import Connect from "../../components/Connect";
import Footer from "../../components/Footer";
import "../../index.css";

const Blog = () => {

  return (
    <div>
        <>
          <section>
          <motion.div
            className="main"
            id='up'    
          >
            <div className="app">
              <div className="completeBlog-wrapper">
                <BlogPage />
              </div>
            </div>
            <a href="#down" style={{textDecoration:"none"}}>
              <div className="footerish">
                <Footer />
              </div>
            </a>

            <a href="#up" style={{textDecoration:"none"}}>
              <section>
                <div className="contact" id="down">
                  <Connect />
                </div>
              </section>
            </a>
            </motion.div>
          </section>
        </>
    </div>
  );
};

export default Blog;
