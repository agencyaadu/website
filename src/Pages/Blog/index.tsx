import React from "react";
import { motion } from "framer-motion";
import BlogPage from "../../components/BlogPage";
import Response from "../../components/Response";
import { useMediaQuery } from "usehooks-ts";
import Connect from "../../components/Connect";
import Footer from "../../components/Footer";

const Blog = () => {
  const isTab = useMediaQuery("(max-width:768px)");

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
            id='up'    
          >
            <div className="app">
              <BlogPage />
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
      ) : (
        <Response />
      )}
    </div>
  );
};

export default Blog;
