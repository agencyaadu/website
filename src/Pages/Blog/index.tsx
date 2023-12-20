import React, { useState, useEffect } from "react";

import { useMediaQuery } from "usehooks-ts";
import { motion } from "framer-motion";

import arrow from "../../assets/images/Vector.svg";

import "./Blog.scss";
import BlogPage from "../../components/BlogPage";
import Response from "../../components/Response";
import Connect from "../../components/Connect";
import Footer from "../../components/Footer";
// import Header from "../../components/Header";

const Blog = () => {

  const [isArrow, setIsArrow] = useState(false);
  const isTab = useMediaQuery("(max-width:768px)");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowDown") {
        setIsArrow(true);
      } else if (event.key === "ArrowUp") {
        setIsArrow(false);
      }
    };

    const handleScroll = () => {
      setIsArrow(!isArrow);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {!isTab ? (
        <>
          {/* <Helmet> */}
            <title>Blog - aA</title>
          {/* </Helmet> */}
          <section>
          <motion.div
              className="main"
              animate={{
                translateY : isArrow ? '-50%' : '0%',
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="app">
                <BlogPage />
              </div>
              <div className="footerish" onClick={() => setIsArrow(true)}>
                <Footer />
              </div>
              <section>
                <div className="contact" onClick={() => setIsArrow(false)}>
                  <Connect />
                </div>
              </section>
            </motion.div>
          </section>
        </>
      ) : (
        <Response />
      )}
    </div>
  );
};

export default Blog;
